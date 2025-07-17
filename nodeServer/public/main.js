window.addEventListener("load", main);

let market = [
  {
    name: "Feijão",
    value: 7.5,
  },
  {
    name: "Arroz",
    value: 6.5,
  },
  {
    name: "Macarrão",
    value: 4.0,
  },
  {
    name: "Biscoito",
    value: 3.5,
  },
  {
    name: "Água",
    value: 2.5,
  },
];

let total = 0;

function main(event) {
  event.preventDefault();

  const products = document.getElementById("products");

  products.style.display = "flex";

  for (let i = 0; i < market.length; i++) {
    const div = document.createElement("div");
    const name = document.createElement("p");
    const value = document.createElement("p");
    const button = document.createElement("button");

    div.style.margin = "0 10px";

    name.innerHTML = `${market[i]["name"]}`;
    value.innerHTML = `R$${market[i]["value"].toFixed(2).replace(".", ",")}`;
    button.innerHTML = "Adicionar";
    button.id = i;
    button.addEventListener("click", addCart);

    div.appendChild(name);
    div.appendChild(value);
    div.appendChild(button);

    products.appendChild(div);
  }
}

function addCart(event) {
  const product = market[event.target.id];

  const cart = document.getElementById("carrinho");
  const totalText = document.getElementById("total");

  const div = document.createElement("div");
  const name = document.createElement("p");
  const value = document.createElement("p");
  const remove = document.createElement("button");

  name.innerHTML = `${product.name}`;
  value.innerHTML = `R$${product.value.toFixed(2).replace(".", ",")}`;
  remove.innerHTML = "x";
  remove.addEventListener("click", removeCart);

  div.appendChild(name);
  div.appendChild(value);
  div.appendChild(remove);

  cart.appendChild(div);

  total += product.value;
  totalText.innerHTML = `Total: R$${total.toFixed(2).replace(".", ",")}`;
}

function removeCart(event) {
  const price = event.target.parentNode.children[1].innerHTML
    .replace("R$", "")
    .replace(",", ".");

  total -= price;

  const totalP = document.getElementById("total");

  totalP.innerHTML = `Total: R$${total.toFixed(2).replace(".", ",")}`;

  event.target.parentNode.remove();
}
