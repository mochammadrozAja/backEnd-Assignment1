const books = require("../datas/data.json");

class dataBook {
  static getAllBooks() { 
    return books;
  }

  static getBookById(id) {
    return books.find((el) => el.id === Number(id));
  }
}

module.exports = dataBook;
