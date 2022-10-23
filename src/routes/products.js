const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')

router.get('/', productController.getData)
router.post('/', productController.insert)
router.put('/:id', productController.update)
router.delete('/:id', productController.delete)

module.exports = router