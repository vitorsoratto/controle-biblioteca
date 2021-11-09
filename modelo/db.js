const dbConfig = require("../config/dbConfig");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  tipoUsuario: require("./tipoUsuario.modelo")(sequelize),
  livro: require("./livro.modelo")(sequelize),
  usuario: require("./usuario.modelo")(sequelize),
};

module.exports = db;
