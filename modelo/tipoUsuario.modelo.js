const Sequelize = require("sequelize");
const sequelize = require('./db');

const TipoUsuario = () => {

  return sequelize.define("tipo_usuario", {
    descricao: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
}

module.exports = TipoUsuario;
