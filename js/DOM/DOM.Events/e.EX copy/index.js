const container = document.getElementById("container");

const btn = document.createElement("button");
btn.innerText = "Hey";

for (let i = 1; i <= 100; i++) {
  const btn = document.createElement("button");
  btn.innerText = "Hey";
  container.appendChild(btn);
}
