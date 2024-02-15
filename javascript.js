function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection) {
    /* 0 = rock; 1=paper, 2=scissor
    */
    const computerSelection = getComputerChoice();
    let playerValue = 0;
    if (playerSelection.toLowerCase() == "rock") {
        playerValue = 0;
    } else if (playerSelection.toLowerCase() == "paper") {
        playerValue = 1;
    } else {
        playerValue = 2;
    }

    if (playerValue == computerSelection) {
        console.log(`Equal, Both used ${playerSelection}`);
        return -1;
    } else if (playerValue == 0 && computerSelection == 1) {
        console.log("Computer wins, paper beats rock");
        scoreComputer++;
    } else if (playerValue == 0 && computerSelection == 2) {
        console.log("Player wins, rock beats scissor");
        scorePlayer++;
    } else if (playerValue == 1 && computerSelection == 0) {
        console.log("Player wins, paper beats rock");
        scorePlayer++;
    } else if (playerValue == 1 && computerSelection == 2) {
        console.log("Computer wins, scissor beat paper");
        scoreComputer++;
    } else if (playerValue == 2 && computerSelection == 0) {
        console.log("Computer wins, rock beats scissor");
        scoreComputer++;
    } else if (playerValue == 2 && computerSelection == 1) {
        console.log("Player wins, scissor beat paper");
        scorePlayer++;
    }
    count--;
    if (count == 0) {
        if (scorePlayer > scoreComputer) {
            console.log("player wins")
        } else if (scorePlayer < scoreComputer) {
            console.log("player loses")
        } else {
            console.log("equal")
        }
    }
}

let count = 5;
let scorePlayer = 0;
let scoreComputer = 0;


const buttons = document.querySelectorAll('button');
const text = document.querySelector('#score');

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        switch(e.target.textContent)  {
            case "Paper" :
                playRound("Paper");
                break;
            case "Rock" :
                playRound("Rock");
                break;
            default :
                playRound("Scissor");
                break;
        }
    })
})

