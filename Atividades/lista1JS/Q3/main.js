window.addEventListener("load", main);

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", nota);
}

function nota(event) {
  event.preventDefault();

  const nota = document.getElementById("nota");
  const result = document.getElementById("result");

  result.innerHTML = "";

  const div = document.createElement("div");
  const msg = document.createElement("p");

  if (Number(nota.value) >= 90) {
    msg.innerHTML = "A";
  } else if (Number(nota.value) >= 80) {
    msg.innerHTML = "B";
  } else if (Number(nota.value) >= 70) {
    msg.innerHTML = "C";
  } else if (Number(nota.value) >= 60) {
    msg.innerHTML = "D";
  } else if (Number(nota.value) < 60) {
    msg.innerHTML = "F";
  }

  div.appendChild(msg);
  result.appendChild(div);

  nota.value = "";
}
