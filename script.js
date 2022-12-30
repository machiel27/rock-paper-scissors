function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let randomInt = getRandomInt(3);
    let choice = options[randomInt];
    //console.log("Computer Choice: ", choice);
    return choice;
}

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if(playerChoice == "rock"){
        if(computerChoice == "rock"){
            return "It's a tie! You both chose Rock";
        }
        else if(computerChoice == "paper"){
            return "You lose! Paper beats Rock";
        }
        else{
            return "You win! Rock beats Scissors";
        }
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            return "You win! Paper beats Rock";
        }
        else if(computerChoice == "paper"){
            return "It's a tie! You both chose Paper";
        }
        else{
            return "You lose! Rock beats Scissors";
        }
    }
    else if(playerChoice == "scissors"){
        if(computerChoice == "rock"){
            return "You lose! Rock beats Scissors";
        }
        else if(computerChoice == "paper"){
            return "You win! Scissors beats Paper";
        }
        else{
            return "It's a tie! You both chose Scissors";
        }
    }
    else{
        return "Invalid choice!";
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));