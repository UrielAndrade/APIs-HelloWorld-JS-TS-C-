// importa o express dos modulos;
const express = require("express");
const app = express();

//defini a porta para o server;
const PORT = process.env.PORT || 3000;
//rota get;
app.get("/", (req, res) => {
  res.send("Uriel lhe deu um Hello World!");
});
//exibe a porta;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
