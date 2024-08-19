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





module.exports = {
  getAllBooks,
};
