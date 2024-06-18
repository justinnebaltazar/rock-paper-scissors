function playGame() {

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

    // do i need this ? 
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
        
        let displayMessage;
        if (humanChoice === computerChoice) {
            displayMessage = "Tie. No winner.";

        } else if (humanChoice === 'rock') {

            if (computerChoice === 'paper') {
                displayMessage = "You lose! Paper beats rock."; 
                computerScore += 1;
            } else if (computerChoice === 'scissors') {
                displayMessage =  "Winner! Rock beats scissors.";
                humanScore += 1; 
            } 

        } else if (humanChoice === 'paper') {

            if (computerChoice === 'rock') {
                displayMessage = "Winner! Paper beats rock.";
                humanScore += 1; 
            } else if (computerChoice === 'scissors') {
                displayMessage = "Loser alert! Scissors beats paper.";
                computerScore += 1;
            }

        } else if (humanChoice === 'scissors') {

            if (computerChoice === 'rock') {
                displayMessage = "Loser! Rock beats scissors.";
                computerScore += 1; 
            } else if (computerChoice === 'paper') {
                displayMessage = "Winner! Scissors beats paper.";
                computerChoice += 1;
            }
        }

        let resultsDiv = document.createElement('div');
        resultsDiv.textContent = displayMessage;
        resultsDiv.style.padding = '8px';
        document.body.appendChild(resultsDiv);

        let compPara = document.createElement('p');
        compPara.textContent = `Computer Score: ${computerScore}`;
        compPara.style.color = 'red';
        resultsDiv.appendChild(compPara);

        let humanPara = document.createElement('p'); 
        humanPara.textContent = `Your Score: ${humanScore}`;
        humanPara.style.color = 'blue'; 
        resultsDiv.appendChild(humanPara);

    }; 
    let rock = document.createElement('button');
    rock.textContent = 'Rock'; 
    rock.id = 'rock';
    document.body.appendChild(rock);

    let paper = document.createElement('button');
    paper.textContent = 'Paper'; 
    paper.id = 'paper';
    document.body.appendChild(paper);

    let scissors = document.createElement('button');
    scissors.textContent = 'Scissors';
    scissors.id = 'scissors';
    document.body.appendChild(scissors);


 
    let buttons = document.querySelectorAll('button');

    let rounds = 0;
    let winnerMessage;
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            if (rounds < 5) {
                let playerSelection = event.target.id; 
                playRound(playerSelection, getComputerChoice());    
                rounds++;
            }

            if (rounds === 5) {
                if (humanScore > computerScore) {
                    winnerMessage = "Winner! You won " + humanScore + " out of 5 rounds.";
                    
                } else if (humanScore === computerScore) {
                    winnerMessage = "After 5 rounds, there was a tie.";
            
                } else {
                    winnerMessage = "You lost. Your final score was " + humanScore + ".";
                }

                let results = document.createElement('div');
                results.textContent = winnerMessage;
                document.body.appendChild(results);
            
            }
        });
    });
};

playGame();