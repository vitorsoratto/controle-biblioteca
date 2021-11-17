'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      livro.hasMany(models.livro_emprestimo, {
        foreignKey: 'livro'
      })
    }
  };
  livro.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    editora: DataTypes.STRING,
    ano_lancamento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'livro',
  });
  return livro;
};