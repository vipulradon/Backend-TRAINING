const express = require('express');
const router = express.Router();
const productController= require("../controllers/productController");
const mid1 = require("../middlewares/middleware");
const userController= require("../controllers/userController");
const orderController= require("../controllers/orderController");

router.post("/createProduct",productController.createProduct);
router.post("/createUser", mid1.mid1 , userController.createUser);
router.post("/createOrder",mid1.mid1, orderController.createOrder);



module.exports = router;