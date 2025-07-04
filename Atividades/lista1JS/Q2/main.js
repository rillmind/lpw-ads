window.addEventListener("load", main);

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", media);
}

function media(event) {
  event.preventDefault();

  const nota1 = document.getElementById("nota1");
  const nota2 = document.getElementById("nota2");
  const nota3 = document.getElementById("nota3");
  const nota4 = document.getElementById("nota4");
  const result = document.getElementById("result");

  result.innerHTML = "";

  const div = document.createElement("div");
  const msg = document.createElement("p");

  const media =
    (Number(nota1.value) +
      Number(nota2.value) +
      Number(nota3.value) +
      Number(nota4.value)) /
    4;

  if (media >= 7) {
    msg.innerHTML = "Aluno Aprovado!";
  } else {
    msg.innerHTML = "Aluno Reprovado!";
  }

  div.appendChild(msg);
  result.appendChild(div);

  nota1.value = "";
  nota2.value = "";
  nota3.value = "";
  nota4.value = "";
}
