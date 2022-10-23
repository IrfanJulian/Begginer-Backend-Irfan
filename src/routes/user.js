const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/', userController.getData)
router.post('/', userController.insertData)
router.put('/:id', userController.updateData)
router.delete('/:id', userController.deleteData)

module.exports = router