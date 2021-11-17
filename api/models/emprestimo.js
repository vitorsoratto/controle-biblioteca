'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class emprestimo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      emprestimo.hasMany(models.livro_emprestimo, {
        foreignKey: 'emprestimo'
      })

      emprestimo.belongsTo(models.usuario, {
        foreignKey: 'usuario'
      })
    }
  };
  emprestimo.init({
    data_retirada: DataTypes.DATE,
    data_entrega: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'emprestimo',
  });
  return emprestimo;
};