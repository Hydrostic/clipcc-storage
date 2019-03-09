module.exports = () => {
    const config = {}
    config.oss = {
        region: '',
        accessKeyId: '',
        accessKeySecret: '',
        project: { bucket: '', secure: true },
        asset: { bucket: '', secure: true }
    }
    return config
}
