'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VentaMes', [{
      ciudad: 'Medellin',
      almacen: 'La 30',
      mes: 'Enero',
      venta: 1000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ciudad: 'Medellin',
      almacen: 'La 30',
      mes: 'Febrero',
      venta: 800,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ciudad: 'Medellin',
      almacen: 'Los Alpes',
      mes: 'Enero',
      venta: 1200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ciudad: 'Medellin',
      almacen: 'Los Alpes',
      mes: 'Febrero',
      venta: 1000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ciudad: 'Medellin',
      almacen: 'Los Alpes',
      mes: 'Marzo',
      venta: 2000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ciudad: 'Cali',
      almacen: 'La 30',
      mes: 'Enero',
      venta: 500,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ciudad: 'Cali',
      almacen: 'La 30',
      mes: 'Febrero',
      venta: 400,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ciudad: 'Cali',
      almacen: 'Los Alpes',
      mes: 'Enero',
      venta: 800,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ciudad: 'Cali',
      almacen: 'Los Alpes',
      mes: 'Febrero',
      venta: 700,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ciudad: 'Cali',
      almacen: 'Los Alpes',
      mes: 'Marzo',
      venta: 600,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VentaMes', null, {});
  }
};
