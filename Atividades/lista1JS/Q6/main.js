window.addEventListener("load", main);

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", tabuada);
}

function tabuada(event) {
  event.preventDefault();

  const number = document.getElementById("number");
  const result = document.getElementById("result");

  result.innerHTML = "";

  const div = document.createElement("div");

  for (var i = 1; i <= 10; i++) {
    const msg = document.createElement("p");

    msg.innerHTML = `${number.value} * ${i} = ${Number(number.value) * i}`;

    div.appendChild(msg);
    result.appendChild(div);
  }

  number.value = "";
}
