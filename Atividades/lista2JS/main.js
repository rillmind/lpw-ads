window.addEventListener("load", main);

function main(event) {
  event.preventDefault();

  let market = [
    {
      nome: "Feijão",
      valor: 7.5,
    },
    {
      nome: "Arroz",
      valor: 6.5,
    },
    {
      nome: "Macarrão",
      valor: 4.0,
    },
    {
      nome: "Biscoito",
      valor: 3.5,
    },
    {
      nome: "Água",
      valor: 2.5,
    },
  ];

  const result = document.getElementById("result");

  result.innerHTML = "";

  const div = document.createElement("div");

  for (let i = 0; i < market.length; i++) {
    const nome = document.createElement("p");
    const valor = document.createElement("p");
    const botao = document.createElement("button");

    nome.innerHTML = market[i]["nome"];
    valor.innerHTML = market[i]["valor"];
    botao.innerHTML = "Enviar";

    div.appendChild(nome);
    div.appendChild(valor);
    div.appendChild(botao);
  }

  result.appendChild(div);
}
