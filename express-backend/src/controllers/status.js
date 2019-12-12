const { APP_NAME, APP_VERSION } = require('../config/settings');
const { Logger } = require('../utils/logger');

const statusController = (req, res, next) => {
    Logger.info('status endpoint running')
    res.payload = {
        app_version: APP_VERSION,
        app_name: APP_NAME
    };
    return next();
}

module.exports = {
    statusController
};
