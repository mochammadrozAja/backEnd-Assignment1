const router = require("express").Router();
const { getBooksById, getAllBooks, getBooksTable } = require("../controllers");

router.get("/books", getAllBooks);
router.get("/books/:id", getBooksById);
router.get("/ejs/books", getBooksTable);

module.exports = router;