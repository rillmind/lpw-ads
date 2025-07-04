window.addEventListener("load", main);

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", descobrir);
}

function descobrir(event) {
  event.preventDefault();

  const number = document.getElementById("number");
  const result = document.getElementById("result");

  result.innerHTML = "";

  const div = document.createElement("div");
  const numberElement = document.createElement("p");

  if (number.value % 2 == 0) {
    numberElement.innerHTML = "Pár";
  } else {
    numberElement.innerHTML = "Ímpar";
  }

  div.appendChild(numberElement);

  result.appendChild(div);

  number.value = "";
}
