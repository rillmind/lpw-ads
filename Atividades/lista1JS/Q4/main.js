window.addEventListener("load", main);

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", tradutor);
}

function tradutor(event) {
  event.preventDefault();

  const cor = document.getElementById("cor");
  const result = document.getElementById("result");

  result.innerHTML = "";

  const div = document.createElement("div");
  const msg = document.createElement("p");

  switch (cor.value) {
    case "red":
      msg.innerHTML = "vermelho";
      break;

    case "orange":
      msg.innerHTML = "laranja";
      break;

    case "yellow":
      msg.innerHTML = "amarelo";
      break;

    case "green":
      msg.innerHTML = "verde";
      break;

    case "blue":
      msg.innerHTML = "azul";
      break;

    default:
      msg.innerHTML = "Cor desconhecida";
      break;
  }

  div.appendChild(msg);
  result.appendChild(div);

  cor.value = "";
}
