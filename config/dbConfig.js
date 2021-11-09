module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "biblioteca",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 60000,
  },
};
