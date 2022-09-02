const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const middleware= require("../middlewares/auth")

router.post("/users",userController.createUser)
router.post("/login",userController.userLogin)
router.get("/users/:userId",middleware.authenticationMidd,middleware.authorizationMiddleware,userController.userDetails)
router.put("/users/:userId",middleware.authenticationMidd,middleware.authorizationMiddleware,userController.updateUser)
router.delete("/deleteUser/:userId",middleware.authenticationMidd,middleware.authorizationMiddleware,userController.deleteUser)
module.exports = router;