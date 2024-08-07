const dataBooks = require("../models");
const path = require('path');

exports.getAllBooks = (req, res) => {
  const book = dataBooks.getAllBooks();
  res.send(book);
};

exports.getBooksById = (req, res) => {
  const { id } = req.params;
  const book = dataBooks.getBookById(id);

  if (!book) {
    res.status(404).send(`<h1>Book id ${id} Not Found</h1>`);
  } else {
    res.status(200).json(book);
  }
};

exports.getBooksTable = (req, res) => {
  const books = dataBooks.getAllBooks();
  res.render('books', { books });
};
