const { Logger } = require('../utils/logger');

var { memoryCache } = require('../utils/sharedcache')

const transactions = (req, res, next) => {
    res.payload = memoryCache.get('transactions') || []
    return next();
}

const saveTransactions = (req, res, next) => {
    if (memoryCache.get('transactions')) {
        memoryCache.get('transactions').push(req.body)
    }
    else {
        memoryCache.put('transactions', [], 120000);
        memoryCache.get('transactions').push(req.body)
        let refreshIntervalId = setInterval(() => {
            try {
                Logger.info(JSON.stringify(memoryCache.get('transactions').pop()))
            } catch (error) {
                clearInterval(refreshIntervalId);
            }
        }, 3000)
    }
    res.payload = {
        status: "OK"
    }

    return next();
}

module.exports = {
    transactions,
    saveTransactions
};