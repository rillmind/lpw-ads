window.addEventListener("load", main);

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", soma);
}

function soma(event) {
  event.preventDefault();

  const result = document.getElementById("result");

  result.innerHTML = "";

  const div = document.createElement("div");
  const msg = document.createElement("p");

  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      soma = soma + i;
    }
    msg.innerHTML = soma;
  }

  console.log(soma);

  div.appendChild(msg);
  result.appendChild(div);
}
