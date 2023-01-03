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

let playerOptions = document.querySelectorAll('button');

playerOptions.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        const resultText = document.querySelector('.resultText');
        const playerDisplay = document.querySelector('.playerScore');
        const computerDisplay = document.querySelector('.computerScore');
        const finalDisplay = document.querySelector('.finalResult');
        if(playerScore < 5 && computerScore < 5){
            resultText.textContent = playRound(button.id, getComputerChoice());
            playerDisplay.textContent = playerScore;
            computerDisplay.textContent = computerScore;
            if(playerScore == 5 || computerScore == 5){
                if(playerScore > computerScore){
                    finalDisplay.textContent = "Congratulations, you win the round! Reload the page to try again";
                }
                else if(computerScore > playerScore){
                    finalDisplay.textContent = "Oh no!, the Computer won the round! Reload the page to try again";
                }
                else{
                    finalDisplay.textContent = "It's an overall tie! Reload the page to try again";
                }
            }
        }
    })
});