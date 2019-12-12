const { APP_NAME, APP_VERSION } = require('../config/settings');
const { Logger } = require('../utils/logger');

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
function isPair(num) {
    return num % 2 === 0
}

const uploadController = (req, res, next) => {
    Logger.info('status endpoint running')

    var fstream;
    let primeSum = 0
    let pairSum = 0
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        var buf = ''
        file.on('data', function (data) {
            buf += data
        })
        file.on('end', function () {
            let splitedFile = buf.split("\n")
            for (let i = 0; i < splitedFile.length; i++) {
                if (isPair(Number(splitedFile[i]))) {
                    pairSum += Number(splitedFile[i])
                }
                else if (isPrime(Number(splitedFile[i]))) {
                    primeSum += Number(splitedFile[i])
                }
                else {

                }
            }
            res.payload = { pairSum: pairSum, primeSum: primeSum };
            Logger.info(JSON.stringify(res.payload));
            return next();
        })



    });


}

module.exports = {
    uploadController
};
