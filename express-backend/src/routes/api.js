const express = require('express');
const endpoints = require('../config/endpoints')
const { statusController } = require('../controllers/status');
const { uploadController } = require('../controllers/upload');
const { transactions, saveTransactions } = require('../controllers/transactions');
const { databaseController } = require('../controllers/database')


const router = express.Router();

router.get(endpoints.status, statusController);
router.post(endpoints.upload, uploadController)
router.get(endpoints.transactions, transactions);
router.post(endpoints.savetransaction, saveTransactions);
router.get(endpoints.getsum, databaseController);

module.exports = router;