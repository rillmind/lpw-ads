window.addEventListener("load", main);

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", media);
}

function media(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");

  const style = document.createElement("style");

  if (name.value == "" || email.value == "") {
    style.innerHTML = `
      #name,
      #email {
        outline: solid 2px red;
      }
    `;
  }

  document.head.appendChild(style);

  name.value = "";
  email.value = "";
}
