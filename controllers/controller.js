const db = require('../config/db.config.js');
const Book = db.book;
exports.create = async (req, res) => {
    try {
      const { Codigo_Libro, Nombre_libro, Editorial, Autor, Genero, Pais, No_Pag, Anio, Precio } = req.body;
  
      if (!Codigo_Libro || !Nombre_libro || !Editorial || !Autor || !Genero || !Pais || !No_Pag || !Anio || !Precio) {
        return res.status(400).json({
          message: "Missing required fields",
        });
      }
  
      const newbooks = { Codigo_Libro, Nombre_libro, Editorial, Autor, Genero, Pais, No_Pag, Anio, Precio };
      const result = await Book.create(newbooks);
  
      res.status(201).json({
        message: "Exito libro creado con el id = " + result.Codigo_Libro,
        libro: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error :c",
        error: error.message,
      });
    }
  };
  exports.delete = async (req, res) => {
    try {
      // Obtener el ID desde los parámetros de la URL
      const { Codigo_Libro } = req.params;
  
      // Eliminar el libro con el ID especificado
      const result = await Book.destroy({ where: { Codigo_Libro } });
  
      if (result === 0) {
        // Si no se encontró ningún libro con ese ID
        return res.status(404).json({
          message: "Libro no encontrado",
        });
      }
  
      // Si la eliminación fue exitosa
      res.status(200).json({
        message: "Libro eliminado con éxito",
      });
    } catch (error) {
      // Manejo de errores
      res.status(500).json({
        message: "Error al eliminar el libro",
        error: error.message,
      });
    }
  };
  

exports.findOne = async (req, res) => {
    try {
        const { Codigo_Libro } = req.params;

        const book = await book.findOne({ where: { Codigo_Libro } });

        if (!book) {
            return res.status(404).json({
                message: "Libro no encontrado",
            });
        }

        res.status(200).json({
            message: "Libro encontrado",
            libro: book,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al buscar el libro",
            error: error.message,
        });
    }
};
exports.findAll = async (req, res) => {
    try {
        const allBook = await book.findAll();

        res.status(200).json({
            message: "Libros encontrados",
            libros: allBook,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al buscar los libros",
            error: error.message,
        });
    }
};

  