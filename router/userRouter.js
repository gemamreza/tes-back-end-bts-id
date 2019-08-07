const router = require('express').Router()
const userController = require('../controller/userController')

//user
router.post('/signup', userController.signUp)
router.get('/userdata/:id', userController.getUser)
router.get('/signin', userController.signIn)
router.get('/alluser', userController.allUser)


module.exports = router