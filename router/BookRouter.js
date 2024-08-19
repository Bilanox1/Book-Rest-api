const express = require("express");

const router = express.Router();

const {
  getAllBooks,
} = require("../controller/BookController");


router.get("/", getAllBooks);

module.exports = router;
