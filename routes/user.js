const express = require('express')
const router = express.Router()
const {handleCreateUser,handleLogin} = require('../controllers/user_controller')

router.post('/',handleCreateUser)

router.post('/auth',handleLogin)

module.exports = router