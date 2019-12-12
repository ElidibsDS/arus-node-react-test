const { BASE_PATH } = require('./settings')

const variables = {
    status: BASE_PATH + '/status',
    upload: BASE_PATH + '/upload',
    transactions: BASE_PATH + '/transactions',
    savetransaction: BASE_PATH + '/savetransaction',
    getsum: BASE_PATH + '/getsum'
};

module.exports = variables;