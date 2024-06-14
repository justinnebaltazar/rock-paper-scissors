function playGame() {
    alert("Welcome to Rock-Paper-Scissors! The round's winner will be announced. After 5 rounds, a winner will be decided.")
    
    let humanScore = 0;
    let computerScore = 0;

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
        playRound(getHumanChoice(), getComputerChoice());
        round = round + 1;
    }

    if (humanScore > computerScore) {
        console.log("Winner! You won " + humanScore + " out of 5 rounds.")
    } else {
        console.log("You lost. Your final score was " + humanScore + ".")
    }
    
}

playGame();