const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category')

router.get('/', categoryController.get)
router.post('/', categoryController.insert)
router.put('/:id', categoryController.update)
router.delete('/:id', categoryController.deleteData)

module.exports = router