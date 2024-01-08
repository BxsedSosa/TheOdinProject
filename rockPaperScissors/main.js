let rockBtn = document.getElementById('btn-rock');
let paperBtn = document.getElementById('btn-paper');
let scissorBtn = document.getElementById('btn-scissors');
let recordText = document.getElementById('game-record');
let resetText = document.getElementById('btn-reset');
rockBtn.addEventListener('click', gameLogic);
paperBtn.addEventListener('click', gameLogic);
scissorBtn.addEventListener('click', gameLogic);
resetText.addEventListener('click', resetScore);

let score = {
  wins: 0,
  loses: 0,
  ties: 0,
}

function gameLogic(event) {
  let cpu = cpuRandomizer();
  let player = event.target.innerText
  let result = ''

  
  if (player === 'Rock') {

    if (cpu === 'scissors') {
      result = 'win';
    } else if (cpu === 'paper') {
      result = 'lose';
    } else {
      result = 'tie';
    }
  }

  if (player === 'Paper') {

    if (cpu === 'scissors') {
      result = 'lose';
    } else if (cpu === 'paper') {
      result = 'tie';
    } else {
      result = 'win';
    }
  }

  if (player === 'Scissors') {
    
    if (cpu === 'scissors') {
      result = 'tie';
    } else if (cpu === 'paper') {
      result = 'win';
    } else {
      result = 'lose';
    }
  }

    result === 'win' ? score.wins += 1 
    : result === 'lose' ? score.loses += 1
    : score.ties += 1

  winLoss()
}

function winLoss() {
  recordText.innerHTML = `Wins: ${score.wins} | Losses: ${score.loses} | Ties: ${score.ties}`;
}

function cpuRandomizer() {
  let cpuRandom = Math.random().toFixed(2);

  const cpuPick = (cpuRandom <= 0.33) ? 'rock':
  (cpuRandom <= 0.66) ? 'paper' : 'scissors';

  return cpuPick;
}

function resetScore() {
  score.wins = score.loses = score.ties = 0
  
  recordText.innerHTML = `Wins: ${score.wins} | Losses: ${score.loses} | Ties: ${score.ties}`;

}