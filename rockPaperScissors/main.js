let rockBtn = document.getElementById('btn-rock');
let paperBtn = document.getElementById('btn-paper');
let scissorBtn = document.getElementById('btn-scissors');
rockBtn.addEventListener('click', gameLogic);
paperBtn.addEventListener('click', gameLogic);
scissorBtn.addEventListener('click', gameLogic);

function gameLogic(event) {
  let cpu = cpuRandomizer();
  let player = event.innerText
  console.log(player)

  if (event === 'rock') {

    if (cpu === 'scissors') {
      return 'win';
    } else if (cpu === 'paper') {
      return 'lose';
    } else {
      return 'tie';
    }
  }

  if (event === 'paper') {

    if (cpu === 'scissors') {
      return 'lose';
    } else if (cpu === 'paper') {
      return 'tie';
    } else {
      return 'win';
    }
  }

  if (event === 'scissor') {
    
    if (cpu === 'scissors') {
      return 'tie';
    } else if (cpu === 'paper') {
      return 'win';
    } else {
      return 'lose';
    }
  }
}

function cpuRandomizer() {
  let cpuRandom = Math.random().toFixed(2);

  const cpuPick = (cpuRandom <= 0.33) ? 'rock':
  (cpuRandom <= 0.66) ? 'paper' : 'scissors';

  return cpuPick;
}