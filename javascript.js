function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function NumToString (value) {
    let string = ""; 
    switch (value) {
        case 0:
            string = string.concat("Rock");
            break;
        case 1:
            string = string.concat("Paper");
            break;
        case 2:
            string = string.concat("Scissor");
            break;
    }
    return string;
}


function changeUI(result, pvalue, cvalue) {
    let string = ""
    if (result == -1) {
        switch (pvalue) {
            case 0:
                string = string.concat("Equal: Rock and Rock");
                break;
            case 1:
                string = string.concat("Equal: Paper and Paper");
                break;
            case 2:
                string = string.concat("Equal: Scissor and Scissor");
                break;
        }
    }
    if (result == 0) {
        let winning = NumToString(cvalue);
        let losing = NumToString(pvalue);
        string = string.concat(`Computer wins: ${winning} beat ${losing}`)
    } else if (result == 1) {
        let losing = NumToString(cvalue);
        let winning = NumToString(pvalue);
        string = string.concat(`You win: ${winning} beat ${losing}`)
    }
    const roundText = document.createElement('p');
    roundText.textContent = string;
    console.log(scoreContainer.children.length);
    if (scoreContainer.children.length == 3) {
        scoreContainer.removeChild(scoreContainer.lastChild);
    }
    scoreContainer.appendChild(roundText);
    playerScore.textContent = `Player score ${scorePlayer}`
    computerScore.textContent= `Computer score: ${scoreComputer}`
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
    let result = 0;
    if (playerValue == computerSelection) {
        console.log(`Equal, Both used ${playerSelection}`);
        result = -1;
    } else if (playerValue == 0 && computerSelection == 1) {
        console.log("Computer wins, paper beats rock");
        scoreComputer++;
        result = 0;
    } else if (playerValue == 0 && computerSelection == 2) {
        console.log("Player wins, rock beats scissor");
        scorePlayer++;
        result = 1;
    } else if (playerValue == 1 && computerSelection == 0) {
        console.log("Player wins, paper beats rock");
        scorePlayer++;
        result = 1;
    } else if (playerValue == 1 && computerSelection == 2) {
        console.log("Computer wins, scissor beat paper");
        scoreComputer++;
        result = 0;
    } else if (playerValue == 2 && computerSelection == 0) {
        console.log("Computer wins, rock beats scissor");
        scoreComputer++;
        result = 0;
    } else if (playerValue == 2 && computerSelection == 1) {
        console.log("Player wins, scissor beat paper");
        scorePlayer++;
        result = 1;
    }
    count--;
    changeUI(result, playerValue, computerSelection, count);
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
const playerScore = document.querySelector('#p-score');
const computerScore = document.querySelector('#c-score');
const scoreContainer = document.querySelector('#ScoreContainer');
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

