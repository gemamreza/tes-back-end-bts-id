const router = require('express').Router()
const shoppingController = require('../controller/shoppingController')

// shopping
router.post('/addshopping', shoppingController.createShopping)
router.get('/getshoppingbyid/:id', shoppingController.getShoppingByID)
router.get('/allshopping', shoppingController.getAllShopping)
router.put('/editshooping/:id', shoppingController.updateShopping)
router.delete('/deleteshopping/:id', shoppingController.deleteShopping)


module.exports = router