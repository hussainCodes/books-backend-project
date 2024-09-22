const BookSchema = require("../../models/BookSchema");
const { request, response } = require("./books.routes");

const getAllBooks = async (request, response) => {
  try {
    const books = await BookSchema.find();
    return response.status(200).json({ data: books });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error });
  }
};

const createBook = async (request, response) => {
  try {
    const book = request.body;
    const newBook = await BookSchema.create(book);
    return response.status(201).json({ data: newBook });
  } catch (error) {
    return response.status(500).json({ error: error });
  }
};

const getOneBook = async (request, response) => {
  try {
    const bookId = request.params.bookId;
    const foundBook = await BookSchema.findById(bookId);
    return response.status(200).json({ data: foundBook });
  } catch (error) {
    return response.status(500).json({ error: error });
  }
};

const deleteBook = async (request, response) => {
  try {
    const bookId = request.params.bookId;
    const foundBook = await BookSchema.findById(bookId);
    if (foundBook) {
      await foundBook.deleteOne();
      return response
        .status(204)
        .json({ message: `Book ${foundBook.title} is deleted` });
    } else {
      return response.status(404).json({ message: "The Book does not exist!" });
    }
  } catch (error) {
    return response.status(500).json({ error: error });
  }
};

const updateBook = async (request, response) => {
  try {
    const bookId = request.params.bookId;
    const foundBook = await BookSchema.findByIdAndUpdate(bookId, request.body);
    if (foundBook) {
      // await foundBook.updateOne(
      //   { title: request.body.title },
      //   { author: request.body.author },
      //   { price: request.body.price },
      //   { image: request.body.image }
      // );
      return response.status(204).json({ data: foundBook });
    } else {
      return response.status(404).json({ message: "The Book does not exist!" });
    }
  } catch (error) {
    return response.status(500).json({ error: error });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getOneBook,
  deleteBook,
  updateBook,
};
