//por algum motivo que nao sei, caso nao importo o express deste modo abaixo ele da erro na rota get `res.send`
// => metodo anterior que usei => `import express from 'express';`
import express, { Request, Response } from "express";
const app = express();

const PORT = process.env.PORT || 3000;
//rota get
app.get("/", (req: Request, res: Response) => {
  res.send("Uriel enviou lhe um hello world!");
});
//exibe a porta
app.listen(PORT, () => {
  console.log(`porta ${PORT}`);
});

//!Rode o server com este cmd, devido o recurso `Type Stripping` nao estar presente no node;
//npx ts-node-dev --respawn app.ts
