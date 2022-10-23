const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactions')

router.get('/', transactionsController.getData)
router.post('/', transactionsController.insert)
router.delete('/:id', transactionsController.delete)
router.put('/:id', transactionsController.update)

module.exports = router