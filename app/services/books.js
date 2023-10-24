const Book = require("../models/book");

const createBooks = async () => {
  const jane = await Book.create({
    title: "Jane Eyre",
    authorId: 1,
  });
};
