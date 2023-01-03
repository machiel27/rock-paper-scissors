let playerScore = 0;
let computerScore = 0;

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

    console.log(playerChoice);
    
    if(playerChoice == "rock"){
        if(computerChoice == "rock"){
            return "It's a tie! You both chose Rock";
        }
        else if(computerChoice == "paper"){
            computerScore++;
            return "You lose! Paper beats Rock";
        }
        else{
            playerScore++;
            return "You win! Rock beats Scissors";
        }
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            playerScore++;
            return "You win! Paper beats Rock";
        }
        else if(computerChoice == "paper"){
            return "It's a tie! You both chose Paper";
        }
        else{
            computerScore++;
            return "You lose! Scissors beats Paper";
        }
    }
    else if(playerChoice == "scissors"){
        if(computerChoice == "rock"){
            computerScore++;
            return "You lose! Rock beats Scissors";
        }
        else if(computerChoice == "paper"){
            playerScore++;
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

//console.log(playRound(playerSelection, computerSelection));

function game() {
    let computerSelection = "";
    let playerSelection = "";
    let roundResult = "";
    // for (let i=0; i<5; i++){
    //     playerSelection = prompt("What is your play?");
    //     computerSelection = getComputerChoice();
    //     roundResult = playRound(playerSelection, computerSelection);
    //     console.log(roundResult);
    // }
    console.log("Player: ", playerScore);
    console.log("Computer: ", computerScore);

    if(playerScore > computerScore){
        console.log("Congratulations, you win!");
    }
    else if(computerScore > playerScore){
        console.log("Oh no!, the Computer won!");
    }
    else{
        console.log("It's an overall tie");
    }
    

}

let playerOptions = document.querySelectorAll('button');

playerOptions.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        playRound(button.id, getComputerChoice());
    })
});

game();