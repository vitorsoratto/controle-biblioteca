'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class livro_emprestimo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      livro_emprestimo.belongsTo(models.livro, {
        foreignKey: "livro"
      })

      livro_emprestimo.belongsTo(models.emprestimo, {
        foreignKey: 'emprestimo'
      })
    }
  };
  livro_emprestimo.init({
    
  }, {
    sequelize,
    modelName: 'livro_emprestimo',
  });
  return livro_emprestimo;
};