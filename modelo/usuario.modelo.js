const Sequelize = require("sequelize");
const sequelize = require("./db");

const Usuario = () => {
   return sequelize.define("usuario", {
      descricao: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      email: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      tipoUsuarioId: {
         type: Sequelize.INTEGER,
         references: {
            model: "TipoUsuario",
            key: "id",
         },
      },
   });
};

module.exports = Usuario;
