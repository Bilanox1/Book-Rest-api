const mongose = require("mongoose");

const BookSchema = new mongose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "description is required"],
    },
    price: {
      type: Number,
      trim: true,
      required: [true, "Price is required"],
    },
  },
  {
    timestamps: true,
  }
);

const BookModel = mongose.model("Book", BookSchema);

module.exports = BookModel;
