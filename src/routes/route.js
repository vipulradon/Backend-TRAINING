const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/getBooksInYear", BookController.publishedYear  )

router.post("/getParticularBooks", BookController.particularBook)
router.get("/getXINRBooks",BookController.getINRBooks)
router.post("/createBook", BookController.createBook  )
router.get("/getRandomBooks",BookController.randomBooks)
router.get("/bookList", BookController.getBooks)

module.exports = router;