const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function playGame(player, computer) {
  document.getElementById("playerChoice").innerText = `Player Choice: ${player}`;
  document.getElementById("computerChoice").innerText = `Computer Choice: ${computer}`;

  let resultText = "";

  if (player === computer) {
    resultText = "😐 It's a Draw!";
  } else if (
    (player === "Rock" && computer === "Paper") ||
    (player === "Paper" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Rock")
  ) {
    resultText = "💻 Computer Wins!";
    computerScore++;
  } else {
    resultText = "🧑 Player Wins!";
    playerScore++;
  }

  document.getElementById("result").innerText = resultText;
  document.getElementById("result").classList.add("winner");

  setTimeout(() => {
    document.getElementById("result").classList.remove("winner");
  }, 600);

  document.getElementById("playerScore").innerText = `Player Score: ${playerScore}`;
  document.getElementById("computerScore").innerText = `Computer Score: ${computerScore}`;
}

document.getElementById("Rock").addEventListener("click", () => {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  playGame("Rock", computerChoice);
});

document.getElementById("Paper").addEventListener("click", () => {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  playGame("Paper", computerChoice);
});

document.getElementById("Scissors").addEventListener("click", () => {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  playGame("Scissors", computerChoice);
});

document.getElementById("restart").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").innerText = `Player Score: ${playerScore}`;
  document.getElementById("computerScore").innerText = `Computer Score: ${computerScore}`;
  document.getElementById("playerChoice").innerText = `Player Choice: —`;
  document.getElementById("computerChoice").innerText = `Computer Choice: —`;
  document.getElementById("result").innerText = "";
});
