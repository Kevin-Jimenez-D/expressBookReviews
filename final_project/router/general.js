const express = require('express');
let books = require("./booksdb.js");  //The books are there
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  //return res.status(300).json({message: "Yet to be implemented"});

  //Send a JSON response containing the users array, formatted with an indentation of 4 spaces for readability
  res.send(JSON.stringify({books}, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  //return res.status(300).json({message: "Yet to be implemented"});

  //Con un email especifico sin utilizar filtro
  //res.send(friends[req.params.email]);
  // Retrieve the email parameter from the request URL and send the corresponding friend's details
  //const isbn = req.params.isbn;
  //res.send({books}[isbn]);
  res.send(books[req.params.isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  //return res.status(300).json({message: "Yet to be implemented"});

  // const author = req.params.author;
  // let filtered_books = books.filter((book) => book.author === author);
  // res.send(filtered_books);

  //Obtenga todas las claves para el objeto "libros"
  let keys = Object.keys(books);
  //Recorra la matriz "libros" y verifique que el autor coincida con el proporcionado en los parámetros de la solicitud.
  let filtered_books = [];
  keys.forEach((key) => {
    if (books[key].author === req.params.author) {
      filtered_books.push(books[key]);
    }
  });
  res.send(filtered_books);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  //return res.status(300).json({message: "Yet to be implemented"});

  //Complete el código para obtener los detalles del libro según el título a continuación
  //Obtenga todas las claves para el objeto "libros"
  let keys = Object.keys(books);
  //Recorra la matriz "libros" y verifique que el titulo coincida con el proporcionado en los parámetros de la solicitud.
  let filtered_books = [];
  keys.forEach((key) => {
    if (books[key].title === req.params.title) {
      filtered_books.push(books[key]);
    }
  });
  res.send(filtered_books);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  //return res.status(300).json({message: "Yet to be implemented"});

  //Complete el código para obtener reseñas de libros
  //Sugerencia: Obtenga las reseñas de libros según el ISBN proporcionado en los parámetros de solicitud.
  const isbn = req.params.isbn;
  res.send(books[isbn].reviews);

});

module.exports.general = public_users;
