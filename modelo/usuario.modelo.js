const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Usuario = sequelize.define("usuario", {
    descricao: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });


  const TipoUsuario = require('./tipoUsuario.modelo')(sequelize);
  Usuario.belongsTo(TipoUsuario);

  return Usuario;
};
