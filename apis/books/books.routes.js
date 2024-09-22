const express = require("express");
const booksRoutes = express();

const {
  getAllBooks,
  createBook,
  getOneBook,
  deleteBook,
  updateBook,
} = require("./books.controllers");

booksRoutes.get("/books", getAllBooks);
booksRoutes.post("/books", createBook);
booksRoutes.get("/books/:bookId", getOneBook);
booksRoutes.delete("/books/:bookId", deleteBook);
booksRoutes.put("/books/:bookId", updateBook);

module.exports = booksRoutes;
