let express = require('express');
let router = express.Router();
const Book = require('../controllers/controller.js');

// Ruta para crear un nuevo libro
router.post('/api/create', Book.create);

// Ruta para eliminar un libro por ID
router.delete('/api/delete/:id', Book.delete);

// Ruta para buscar un libro por ID
router.get('/api/book/:id', Book.findOne);

// Ruta para buscar todos los libros
router.get('/api/books', Book.findAll);

module.exports = router;
