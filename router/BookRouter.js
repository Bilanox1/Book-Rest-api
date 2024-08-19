const express = require("express");

const router = express.Router();

const {
  createBook,
  getAllBooks,
  upditBookById,
  deleteBookById,
} = require("../controller/BookController");

router.delete("/:id", deleteBookById);
router.put("/:id", upditBookById);
router.get("/", getAllBooks);
router.post("/", createBook);

module.exports = router;
