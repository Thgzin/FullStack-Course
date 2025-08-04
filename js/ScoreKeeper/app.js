const p1 = document.querySelector("#p1Button");
const p2 = document.querySelector("#p2Button");
const p1display = document.querySelector("#p1Display");
const p2display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const playingTo = document.querySelector("#playto");

const handleSum = () => {
  p1.addEventListener("click", () => {
    let p1Score = Number(p1display.textContent);
    p1Score++;
    p1display.textContent = p1Score;
    checkVictory();
  });

  p2.addEventListener("click", () => {
    let p2Score = Number(p2display.textContent);
    p2Score++;
    p2display.textContent = p2Score;
    checkVictory();
  });
};
handleSum();

const handleReset = () => {
  resetButton.addEventListener("click", () => {
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1.disabled = false;
    p2.disabled = false;
  });
};
handleReset();

const checkVictory = () => {
  if (Number(p1display.textContent) === Number(playingTo.value)) {
    p1.disabled = true;
    p2.disabled = true;
  }
  if (Number(p2display.textContent) === Number(playingTo.value)) {
    p1.disabled = true;
    p2.disabled = true;
  }
};

const playingToEvents = () => {
  playingTo.addEventListener("change", checkVictory);

  playingTo.addEventListener("change", () => {
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1.disabled = false;
    p2.disabled = false;
  });
};

playingToEvents();
