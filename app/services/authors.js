const Author = require("../models/author");

const createAuthors = async ({ firstName, lastName }) => {
  console.log("MADE UAHTO");
  //   Author.create({
  //     firstName: firstName,
  //     lastName: lastName,
  //   });
};

module.exports = { createAuthors };
