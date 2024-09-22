const express = require("express");
const app = express();
const connectDB = require("./database");
const booksRoutes = require("./apis/books/books.routes");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
connectDB();
app.use(express.json());
app.use(booksRoutes);
app.listen(PORT, () => {
  console.log(`Express is working fine on  port ${PORT}`);
});
