const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultsContainer = document.querySelector('#results')



// function game(){

//     let playerScoreTotal = 0;
//     let computerScoreTotal = 0;

    

//     for (let i = 0; i < 1; i++){
//         let results = playRound(playerSelection);
//         playerScoreTotal +=  results[0];
//         computerScoreTotal +=  results[1];
//         console.log(`The score is Player: ${playerScoreTotal} vs. Computer: ${computerScoreTotal}`);
//     }

//     if (computerScoreTotal > playerScoreTotal){
//         console.log("The Winner is the Computer!");
//     } else if (computerScoreTotal === playerScoreTotal){
//         console.log("Equality");
//     }
//     else {
//         console.log("YOU WIN!!");
//     }
// }

const game = () => {
    let playerScoreTotal = 0;
    let computerScoreTotal = 0;
    
    rockButton.addEventListener("click", () => {
        resultsContainer.innerText = "";
        const resultRound = playRound("Rock");
        playerScoreTotal += resultRound[0];
        computerScoreTotal +=  resultRound[1];
        console.log(playerScoreTotal);
    });

    paperButton.addEventListener("click", () => {
        resultsContainer.innerText = "";
        const resultRound = playRound("Paper");
        playerScoreTotal = playerScoreTotal + resultRound[0];
        computerScoreTotal = computerScoreTotal + resultRound[1];
    });

    scissorsButton.addEventListener("click", () => {
        resultsContainer.innerText = "";
        const resultRound = playRound("Scissors");
        playerScoreTotal = playerScoreTotal + resultRound[0];
        computerScoreTotal = computerScoreTotal + resultRound[1];
    });

    return [playerScoreTotal, computerScoreTotal]
}


/**
 * Run a random choice of computer between Rock, paper and scissors
 * @returns play
 */
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    let play = ""
    
    if (randomNumber === 1){
        play = "Rock"
    } else if (randomNumber === 2){
        play = "Paper"
    } else {
        play = "Scissors"
    }

    return play
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection){
    playerSelection = capitalize(playerSelection)
    computerSelection = computerPlay()
    let playerScore = 0
    let computerScore = 0

    if (computerSelection === "Rock" && playerSelection == "Paper"){
        addResult("You WIN! Paper beats Rock");
        playerScore = 1;
        return [playerScore, computerScore];
    } else if (computerSelection === "Paper" && playerSelection == "Paper"){
        addResult("Equality")
        return [playerScore, computerScore];
    } else if (computerSelection === "Scissors" && playerSelection == "Paper"){
        addResult("You LOSE! Scissors beats Paper");
        computerScore = 1;
        return [playerScore, computerScore];
    } else if (computerSelection === "Rock" && playerSelection == "Rock"){
        addResult("Equality");
        return [playerScore, computerScore];
    } else if (computerSelection === "Paper" && playerSelection == "Rock"){
        addResult("You LOSE! Paper beats Rock");
        computerScore = 1;
        return [playerScore, computerScore];
    } else if (computerSelection === "Scissors" && playerSelection == "Rock"){
        addResult("You WIN! Rock beats Scissors");
        playerScore = 1;
        return [playerScore, computerScore];
    } else if (computerSelection === "Rock" && playerSelection == "Scissors"){
        addResult("You LOSE! Rock beats Scissors");
        computerScore = 1;
        return [playerScore, computerScore];
    } else if (computerSelection === "Paper" && playerSelection == "Scissors"){
        addResult("You WIN! Scissors beats Paper");
        playerScore = 1;
        return [playerScore, computerScore];
    } else if (computerSelection === "Scissors" && playerSelection == "Scissors"){
        addResult("Equality");
        return [playerScore, computerScore];
    }
}

const addResult = (strg) => {
    const newB = document.createElement("b");
    newB.innerText = strg;
    resultsContainer.append(newB);
};

// The player click on a button and run the round
// According to the button clicked, the playerSelection change
// The function playRound() is ran with the playerSelection as an input
// In the function playRound(), a random computerSelection is chosen.

const runGame = () => {
    let playerScoreTotal = 0;
    let computerScoreTotal = 0;
    let resultsRound = [];

    if (playerScoreTotal <= 5 && computerScoreTotal <= 5){
        resultsRound = game();
        playerScoreTotal += resultsRound[0];
        computerScoreTotal += resultsRound[1];    
    } else {
        console.log("meeeeeh");
    }

}

runGame()