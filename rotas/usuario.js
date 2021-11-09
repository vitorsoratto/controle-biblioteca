module.exports = (app) => {
  const usuario = require("../controler/usuario.controler");

  app.post("/usuarios", usuario.create);

  app.get("/usuarios", usuario.findAll);

  app.get("/usuarios/:id", usuario.findOne);

  app.put("/usuarios/:id", usuario.update);

  app.delete("/usuarios/:id", usuario.delete);
};
