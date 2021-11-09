module.exports = (app) => {
  const livros = require("../controler/livro.controler");

  app.post("/livros", livros.create);

  app.get("/livros", livros.findAll);

  app.get("/livros/:id", livros.findOne);

  app.put("/livros/:id", livros.update);

  app.delete("/livros/:id", livros.delete);
};
