const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", () => {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  if (r <= 25 || g <= 20 || b <= 15) {
    h1.style.color = "white";
  } else {
    h1.style.color = "black";
  }
  return `rgb(${r},${g},${b})`;
};

function colorize() {
  this.style.backgroundColor = makeRandColor();
}
