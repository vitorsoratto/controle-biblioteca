'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estudante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      estudante.belongsTo(models.usuario, {
        foreignKey: 'usuario'
      })
    }
  };
  estudante.init({
    matricula: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'estudante',
  });
  return estudante;
};