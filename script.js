"use strict";
// // to select the document and class for dot and # id and textContent to get only the value

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let attempt = 5;
let score = (document.querySelector(".score").textContent = 0);
let highscore = (document.querySelector(".highscore").textContent = 10);

const heart = () => {
  if (attempt == 4) {
    return "🧡🧡🧡🧡";
  }
  if (attempt == 3) {
    return "🧡🧡🧡";
  }
  if (attempt == 2) {
    return "🧡🧡";
  }
  if (attempt == 1) {
    return "🧡";
  }
  //   for (let i = 0; i < attempt; i++) {
  //     return `icon ${i}`;
  //   }
};

const CheckHighScore = () => {
  if (score > highscore) {
    document.querySelector(".highscore").textContent = score;
  }
};

const CheckForAttempt = () => {
  if (attempt <= 0) {
    HideInputButton();
    document.querySelector("body").style.backgroundColor = "rgb(224, 75, 75)";
    document.querySelector(".message").textContent = `🙅‍♀️ 🙅 GAME OVER, 💔 `;
    ShowHiddenNumber();
  }
};

const ShowHiddenNumber = () => {
  document.querySelector(".number").textContent = secretNumber;
};

const HideInputButton = () => {
  document.querySelector(".left").style.display = "none";
  document.querySelector(".right").style.width = "auto";
};

const ClearNumber = () => {
  document.querySelector(".guess").value = "";
};

const displayMessage = (message) => {
  document.querySelector(".message").textContent = `${message}`;
};

document.querySelector(".again").addEventListener("click", function () {
  attempt = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".highscore").textContent = 10;
  document.querySelector(".score").textContent = 0;
  ClearNumber();
  document.querySelector(".left").style.display = "";
  document.querySelector(".right").style.width = "52rem";
});

document.querySelector(".check").addEventListener("click", function () {
  CheckForAttempt();
  const guess = Number(document.querySelector(".guess").value);

  // When guess is empty
  if (!guess) {
    displayMessage("⛔️ No number!");
  }

  // When player wins
  else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "rgb(69, 237, 51)";
    displayMessage(`Congratulations 🎉 Correct Number!`);
    ShowHiddenNumber();
    HideInputButton();
    document.querySelector(".score").textContent = score += secretNumber;
    CheckHighScore();
  } else if (guess !== secretNumber) {
    attempt--;
    displayMessage(
      guess > secretNumber
        ? `"📈 Too high!", You have ${heart()} lives remaining`
        : `"📉 Too low!", You have ${heart()} lives remaining`
    );
    CheckForAttempt();
  }
});
