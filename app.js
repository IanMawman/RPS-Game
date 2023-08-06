const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerChoice = document.querySelectorAll(".buttons");
let player;
let computer;
let result;


playerChoice.forEach(button => button.addEventListener("click", () => {
  player = button.textContent;
  computerChoice();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();

}));


function computerChoice (){
const choices = Math.random(); //this determines the computers choice by selecting a random number between 0 and 1 
console.log('choices is:', choices)
//if the number is less than or equal 0.33 the computer selects rock
  if (choices <= 0.33)   {
   computer = "rock";
    //else if the number is less than or equal 0.66 the computer selects paper
 } else if (choices <= 0.66) {
    computer = "paper";
    //else it returns scissors
 } else {
   computer = "scissors";
 }
   
}

function checkWinner (){
 if (player == computer){
  return "Tie!"; //if inputs are the same it is a tie 
 }
 else if ( //notes condition for player to win 
  (player == "rock" && computer == "scissors") ||
  (player == "scissors" && computer == "paper") ||
  (player == "paper" && computer == "rock")
 ){
  return "You Win!";
  }
  else { //if conditions for the player to win are not met it the computer wins 
  return "Computer Wins!";
  }
}