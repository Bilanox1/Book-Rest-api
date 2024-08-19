const BookModel = require("../model/BookModel");

const getAllBooks = async (req, res) => {
  try {
    const limit = 10;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const allBooks = await BookModel.find()
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip);

    return res.status(200).json({
      length: allBooks.length,
      page,
      Books: allBooks,
    });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    Book = await BookModel.create(req.body);
    return res
      .status(201)
      .json({ data: Book, message: "Book creeted avec succsufule" });
  } catch (error) {
    return res.status(404).json(error);
  }
};

const upditBookById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!book) {
      throw `book not fond `;
    }

    return res.status(200).json({ book });
  } catch (error) {
    return res.status(404).json({ "err ": error });
  }
};

const deleteBookById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookModel.findByIdAndDelete({ _id: id });
    if (!book) {
      throw `book not fond `;
    }

    return res.status(203).json({ message: "Book is deleted" });
  } catch (error) {
    return res.status(404).json({ "err ": error });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  upditBookById,
  deleteBookById,
};
