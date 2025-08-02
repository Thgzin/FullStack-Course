const form = document.querySelector("form");
const productLabel = document.querySelector("#product");
const productQuantity = document.querySelector("#qty");
const productList = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = productLabel.value;
  const quantity = productQuantity.value;

  const li = document.createElement("li");
  li.textContent = `${quantity} ${product}`;
  productList.appendChild(li);
  form.reset();
});
