'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuario.belongsTo(models.tipo_usuario, {
        foreignKey: 'tipo_usuario'
      })

      usuario.hasMany(models.estudante, {
        foreignKey: 'usuario'
      })

      usuario.hasMany(models.emprestimo, {
        foreignKey: 'usuario'
      })
    }
  };
  usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};