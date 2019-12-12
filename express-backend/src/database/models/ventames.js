'use strict';
module.exports = (sequelize, DataTypes) => {
  const VentaMes = sequelize.define('VentaMes', {
    ciudad: DataTypes.STRING,
    almacen: DataTypes.STRING,
    mes: DataTypes.STRING,
    venta: DataTypes.INTEGER
  }, {});
  VentaMes.associate = function(models) {
    // associations can be defined here
  };
  return VentaMes;
};