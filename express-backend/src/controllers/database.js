var db = require('../database/models/index')
const { Logger } = require('../utils/logger');

const databaseController = async (req, res, next) => {
    Logger.info('database endpoint running')
    let result = await db.sequelize.query('SELECT ciudad, mes, SUM(venta) as venta FROM VentaMes GROUP BY ciudad, mes', { raw: true }).then(([ventas, metadata]) => ventas)
    res.payload = result;
    return next();
}

module.exports = {
    databaseController
};