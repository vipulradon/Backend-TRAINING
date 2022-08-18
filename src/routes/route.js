const express = require('express');
const router = express.Router();

const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

router.post("/createBook",BookController.createBook)
router.post("/createAuthor",AuthorController.createAuthor)
router.get("/booksByChetanBhagat",BookController.booksByChetanBhagat);
router.get("/authorOfTwoStates",AuthorController.twoStatesAuthor);
router.get("/authorOfBooks50to100",BookController.authorOfbooks50to100);
module.exports = router;