import express from "express";
import cors from "cors";

const app = express();

const port = 2306;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "Olá, Mundo!" });
});

let market = [
  { name: "Feijão", value: 7.5 },
  { name: "Arroz", value: 6.5 },
  { name: "Macarrão", value: 4.0 },
  { name: "Biscoito", value: 3.5 },
  { name: "Água", value: 2.5 },
];

app.get("/products", (req, res) => {
  return res.json(market);
});

app.post("/products", (req, res) => {
  const name = req.body.name;
  const value = req.body.value;

  if (!name || !value) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios" });
  }

  const newObject = { name, value };

  market.push(newObject);

  return res.status(201).json({ message: "OK" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
