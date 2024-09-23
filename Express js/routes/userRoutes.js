const express = require('express')
const router = express.Router()

let {signup, login} = require('../controllers/userController.js')

router.post('/signup', signup)

router.post('/login', login)

module.exports = router