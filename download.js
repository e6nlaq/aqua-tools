
// Aqua Tools
// download.js

const https = require('https');
const fs = require('fs');

var download = function (uri, filename) {
    return new Promise(function (resolve, reject) {
        return https
            .request(uri, function (res) {
                res
                    .pipe(fs.createWriteStream(filename))
                    .on("close", resolve)
                    .on("error", reject);
            })
            .end();
    });
};

const arg = process.argv;

download(arg[2], arg[3]);
