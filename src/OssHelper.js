const Helper = require('./Helper');

const Cookies = require('js-cookie');
const request = require('browser-request');

class OssHelper extends Helper {
    addFetchEvent (urlFunction) {
        if (!Cookies.get('CLIPSTS')) {
            const options = {
                url: urlFunction(),
                form: {fetchCreateTime: new Date().getTime(), uuid: Cookies.get('CLIPUUID')}
            };
            request.post(options, (err, httpResponse, body) => {
                if (err || httpResponse / 100 >= 3) {
                    throw new Error('fetchSTSTokenError');
                }
                Cookies.set('CLIPSTS', body.return_data.sts, {expires: 0.5});
                Cookies.set('CLIPOSSI', body.return_data.oss_info, {expires: 0.5});
            });
        }
    }
}

module.exports = OssHelper;
