const express = require('express')
const { postItem, getItems, getItem, deleteItem, updateItem } = require('../controllers/itemControllers')

const router = express.Router()

router.post('/', postItem)

router.get('/', getItems)

router.get('/:id', getItem)

router.delete('/:id', deleteItem)

router.patch('/:id', updateItem)

module.exports = router