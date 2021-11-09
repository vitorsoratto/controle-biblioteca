module.exports = (app) => {
  const tiposUsuario = require("../controler/tipoUsuario.controler");

  app.post("/tipos-usuario", tiposUsuario.create);

  app.get("/tipos-usuario", tiposUsuario.findAll);

  app.get("/tipos-usuario/:id", tiposUsuario.findOne);

  app.put("/tipos-usuario/:id", tiposUsuario.update);

  app.delete("/tipos-usuario/:id", tiposUsuario.delete);
};
