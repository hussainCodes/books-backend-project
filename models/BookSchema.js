const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: {
    type: String,
    default:
      "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png",
  },
});

module.exports = model("Book", BookSchema);
