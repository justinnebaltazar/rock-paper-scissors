function getComputerChoice() {

    let choice;
    let number = Math.random();

    if (number >= 0 && number < 0.33) {
        choice = 'rock';
    } else if (number >= 0.33 && number < 0.67) {
        choice = 'scissors';
    } else {
        choice = 'paper';
    }

    return choice;
};

function getHumanChoice() {

    let choice = prompt("Rock, Paper, or Scissors: ")
    if (choice.toLowerCase() === "rock") {
        choice = 'rock';
    } else if (choice.toLowerCase() === "paper") {
        choice = 'paper';
    } else if (choice.toLowerCase() === "scissors") {
        choice = 'scissors';
    }
    return choice;

};

console.log(getHumanChoice()); 


