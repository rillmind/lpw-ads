import express from "express";

const app = express();

const port = 2306;

app.use(express.static("public"));

app.get("/", (requisição, resposta) => {
  return resposta.json({ message: "Olá, Mundo!" });
});

app.get("/market", (req, res) => {
  let market = [
    { name: "Feijão", value: 7.5 },
    { name: "Arroz", value: 6.5 },
    { name: "Macarrão", value: 4.0 },
    { name: "Biscoito", value: 3.5 },
    { name: "Água", value: 2.5 },
  ];
  return res.json({ market });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
