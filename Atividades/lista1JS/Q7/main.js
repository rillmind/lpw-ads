window.addEventListener("load", main);

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", fatorial);
}

function fatorial(event) {
  event.preventDefault();

  const number = document.getElementById("number");
  const result = document.getElementById("result");

  result.innerHTML = "";

  const div = document.createElement("div");
  const msg = document.createElement("p");

  let fatoral = Number(number.value);
  for (let i = 1; i < Number(number.value); i++) {
    fatoral *= i;
  }

  msg.innerHTML = fatoral;

  div.appendChild(msg);
  result.appendChild(div);

  number.value = "";
}
