function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    let message = prompt("Choose one between rock, paper, scissors!").toLowerCase();
    if (message === "rock" || message === "paper" || message === "scissors") {
        return message;
    } else {
        return "Invalid input. Check your spelling!";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return `It's a tie! Both chose ${humanChoice}`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        if (humanSelection === "Invalid input. Check your spelling!") {
            console.log(humanSelection);
            i--; // Retry the round
            continue;
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Computer chose: ${computerSelection}`);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, the computer wins this time!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Start the game
playGame();