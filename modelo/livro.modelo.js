const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Livro = sequelize.define("livro", {
    titulo: {
      type: DataTypes.STRING,
    },
    autor: {
      type: DataTypes.STRING,
    },
    editora: {
      type: DataTypes.STRING,
    },
    anoLancamento: {
      type: DataTypes.INTEGER,
    },
  });

  return Livro;
};
