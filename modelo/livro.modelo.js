const Sequelize = require("sequelize");
const sequelize = require("./db");

const Livro = () => {
   return sequelize.define("livro", {
      titulo: {
         type: Sequelize.STRING,
      },
      autor: {
         type: Sequelize.STRING,
      },
      editora: {
         type: Sequelize.STRING,
      },
      anoLancamento: {
         type: Sequelize.INTEGER,
      },
   });
};

module.exports = Livro;
