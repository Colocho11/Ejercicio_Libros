const { DataTypes } = require('sequelize'); // Asegúrate de importar DataTypes

module.exports = (sequelize) => {
  const Book = sequelize.define('Book', { // Usa 'Book' con primera letra en mayúscula para seguir las convenciones
    Codigo_Libro: {
      type: DataTypes.INTEGER, // Usa DataTypes en lugar de Sequelize
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Nombre_libro: {
      type: DataTypes.STRING, // Usa DataTypes en lugar de Sequelize
      allowNull: false,
    },
    Editorial: {
      type: DataTypes.STRING, // Usa DataTypes en lugar de Sequelize
      allowNull: false,
    },
    Autor: {
      type: DataTypes.STRING, // Usa DataTypes en lugar de Sequelize
      allowNull: false,
    },
    Genero: {
      type: DataTypes.STRING, // Usa DataTypes en lugar de Sequelize
      allowNull: false,
    },
    Pais: {
      type: DataTypes.STRING, // Usa DataTypes en lugar de Sequelize
      allowNull: false,
    },
    No_Pag: {
      type: DataTypes.INTEGER, // Usa DataTypes en lugar de Sequelize
      allowNull: false,
    },
    Anio: {
      type: DataTypes.DATE, // Usa DataTypes en lugar de Sequelize
      allowNull: false,
    },
    Precio: {
      type: DataTypes.INTEGER, // Usa DataTypes en lugar de Sequelize
      allowNull: false,
    }
  }, {
    timestamps: false // No usar timestamps (createdAt y updatedAt)
  });

  return Book;
};
