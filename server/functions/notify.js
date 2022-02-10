const request = require('request');
const fs = require('fs')

exports.notifyEvent = (msg) => {
    request({
        uri: 'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer: 'E66MfkoNEctmjdP7oQ45BCwtR1v13UtcNNGLyIGa7zi'
        },
        form: {
            message: msg,
        },

    })
}


exports.notifyEvening = (msg, filename) => {
    var filedata = `public/uploads/${filename}`
    request({
        uri: 'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer: 'E66MfkoNEctmjdP7oQ45BCwtR1v13UtcNNGLyIGa7zi'
        },
        formData: {
            message: msg,
            imageFile: fs.createReadStream(filedata)
        },

    })
}
