const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const TipoUsuario = sequelize.define("tipo_usuario", {
    descricao: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });

  return TipoUsuario;
};
