const express = require("express");
var cors = require('cors')
const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Autenticado." });
});

require("./rotas/livro")(app);
require("./rotas/tipoUsuario")(app);
require("./rotas/usuario")(app);

const db = require("./modelo/db");
db.sequelize.sync();

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
