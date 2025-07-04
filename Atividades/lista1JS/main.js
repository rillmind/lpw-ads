window.addEventListener("load", main);

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", media);
}

function media(event) {
  event.preventDefault();

  // TODO variaveis dos elementos
  const result = document.getElementById("result");

  result.innerHTML = "";

  const div = document.createElement("div");
  const msg = document.createElement("p");

  // TODO lógica

  div.appendChild(msg);
  result.appendChild(div);

  // TODO limpar campos
}
