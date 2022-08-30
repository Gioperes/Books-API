const express = require('express')
// const books = express.Router()
// const books = require('../models/books.js')

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});