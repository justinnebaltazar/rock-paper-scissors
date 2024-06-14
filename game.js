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

const humanChoice = getHumanChoice(); 
const computerChoice = getComputerChoice();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie. No winner.");

        } else if (humanChoice === 'rock') {

            if (computerChoice === 'paper') {
                console.log("You lose! Paper beats rock."); 
                computerScore += 1;
            } else if (computerChoice === 'scissors') {
                console.log("Winner! Rock beats scissors.");
                humanScore += 1; 
            } 

        } else if (humanChoice === 'paper') {

            if (computerChoice === 'rock') {
                console.log("Winner! Paper beats rock.");
                humanScore += 1; 
            } else if (computerChoice === 'scissors') {
                console.log("Loser alert! Scissors beats paper.");
                computerScore += 1;
            }

        } else if (humanChoice === 'scissors') {

            if (computerChoice === 'rock') {
                console.log("Loser! Rock beats scissors.");
                computerScore += 1; 
            } else if (computerChoice === 'paper') {
                console.log("Winner! Scissors beats paper.");
                computerChoice += 1;
            }
        }
    }; 

    let round = 0; 
    while (round < 5) {

    }
}

