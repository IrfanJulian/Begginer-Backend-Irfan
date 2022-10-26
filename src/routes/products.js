const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
const {stock} = require('../middlewares/middle')

router.get('/', productController.getData)
router.post('/', stock, productController.insert)
router.put('/:id', productController.update)
router.delete('/:id', productController.delete)

module.exports = router