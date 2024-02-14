function getComputerChoice() {
    return Math.floor(Math.random()*3)
}

function playRound(playerSelection, computerSelection) {
    /* 0 = rock; 1=paper, 2=scissor
    */
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
    return 0;
   } else if (playerValue == 0 && computerSelection == 2) {
    console.log("Player wins, rock beats scissor");
    return 1;
   } else if (playerValue == 1 && computerSelection == 0) {
    console.log("Player wins, paper beats rock");
    return 1;
   } else if (playerValue == 1 && computerSelection == 2) {
    console.log("Computer wins, scissor beat paper");
    return 0;
   } else if (playerValue == 2 && computerSelection == 0) {
    console.log("Computer wins, rock beats scissor");
    return 0;
   } else if (playerValue == 2 && computerSelection == 1) {
    console.log("Player wins, scissor beat paper");
    return 1;
   }
}

let count = 5;
let scorePlayer = 0;
let scoreComputer = 0;
while (count > 0) {
    const playerSelection = prompt("Please input your choice");
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == 1) {
        scorePlayer++;
    } else if (result == 0) {
        scoreComputer++;
    }
    count--;
}
if (scorePlayer > scoreComputer) {
    console.log("player wins")
} else if (scorePlayer < scoreComputer) {
    console.log("player loses")
} else {
    console.log("equal")
}



