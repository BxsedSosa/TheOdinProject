function gameLogic(playerChoice, cpuChoice){

  var playerScore = 0
  var cpuScore = 0

  if (playerChoice === 'rock') {

    if (cpuChoice === 'scissors') {
      return playerScore++;
    } else if (cpuChoice === 'paper') {
      return cpuScore++;
    } else if (cpuChoice === 'rock'){
      return "It's a Tie!";
    }
  } else if (playerChoice === 'paper') {

      if (cpuChoice === 'scissors') {
        return cpuScore++;
      } else if (cpuChoice === 'paper') {
        return "It's a Tie!";
      } else if (cpuChoice === 'rock'){
        return playerScore++;
      }
  } else if (playerChoice === 'scissors') {

      if (cpuChoice === 'scissors') {
        return "It's a Tie!";
      } else if (cpuChoice === 'paper') {
        return playerScore++;
      } else if (cpuChoice === 'rock'){
        return cpuScore++;
      }
  updateScore(playerScore, cpuScore)
  }
}

let result = gameLogic('scissors', 'rock');

function updateScore(playerScore, cpuScore) {

  document.querySelector('gameResult').innerHTML = `Player Wins: ${playerScore} | Cpu Wins: ${cpuScore}`
}