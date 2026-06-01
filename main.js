console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const index = (Math.random()*3)
    return choices[Math.floor(index)]
}

function getHumanChoice() {
    return(prompt("Please choose rock, paper or scissors."))
}

console.log(getHumanChoice())

const humanScore = 0;
const computerScore = 0;