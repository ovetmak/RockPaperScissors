// Initialize score variables for PLayer and Computer
let scorePlayer = 0
let scoreComputer = 0

// Function which get random number from 0 to 3 and then use this number as a index to make a random choice from Computer
function getComputerChoice() {
  const getRandomNumber = Math.floor(Math.random() * 3)
  const variants = ['rock', 'paper', 'scissors']
  return variants[getRandomNumber]
}

// Function that accept two parameters:
// 1) Player choice is a prompt that will be invoked in next game() function
// 2) Computer choice that has been previously generated in getComputerChoice() function
// After each round either Player or Computer get a point
// At the end score of both Player and Computer is returned
function playRound(playerChoice, computersChoice) {
  //   console.log(`Computer choose: ${computersChoice}`)
  //   console.log(`You choose: ${playerChoice}`)

  if (playerChoice === computersChoice) {
    console.log('Tie!')
  } else if (playerChoice === 'rock' && computersChoice === 'paper') {
    scoreComputer = scoreComputer + 1
    console.log('You lose! Paper covered the rock')
  } else if (playerChoice === 'rock' && computersChoice === 'scissors') {
    scorePlayer = scorePlayer + 1
    console.log('You won! Rock destroyed the scissors')
  } else if (playerChoice === 'paper' && computersChoice === 'rock') {
    scorePlayer = scorePlayer + 1
    console.log('You won! Paper covered the rock')
  } else if (playerChoice === 'paper' && computersChoice === 'scissors') {
    scoreComputer = scoreComputer + 1
    console.log('You lose! Scissors cut the paper')
  } else if (playerChoice === 'scissors' && computersChoice === 'rock') {
    scoreComputer = scoreComputer + 1
    console.log('You lose! Rock destroyed the scissors')
  } else if (playerChoice === 'scissors' && computersChoice === 'paper') {
    scorePlayer = scorePlayer + 1
    console.log('You won! Scissors cut the paper')
  }
  return scoreComputer, scorePlayer
}

// Function that iterates five times, each time:
//      1) Prompt players choice
//      2) Generate new Computers choice
//      3) Play a round
//      4) After all 5 rounds played logging total score in the console
function game() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt('Rock Paper or Scissors?').toLowerCase()
    const computersChoice = getComputerChoice()
    playRound(playerChoice, computersChoice)
  }
  console.log(
    `Total score is: You - ${scorePlayer} vs Computer - ${scoreComputer}`
  )
}

game()
