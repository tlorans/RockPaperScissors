
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

function playRound(computerSelection, playerSelection){
    playerSelection = capitalize(playerSelection)
    let playerScore = 0
    let computerScore = 0

    if (computerSelection === "Rock" && playerSelection == "Paper"){
        console.log("You WIN! Paper beats Rock")
        playerScore = 1
        return [playerScore, computerScore]
    } else if (computerSelection === "Paper" && playerSelection == "Paper"){
        console.log("Equality")
        return [playerScore, computerScore]
    } else if (computerSelection === "Scissors" && playerSelection == "Paper"){
        console.log("You LOSE! Scissors beats Paper")
        computerScore = 1
        return [playerScore, computerScore]
    } else if (computerSelection === "Rock" && playerSelection == "Rock"){
        console.log("Equality")
        return [playerScore, computerScore]
    } else if (computerSelection === "Paper" && playerSelection == "Rock"){
        console.log("You LOSE! Paper beats Rock")
        computerScore = 1
        return [playerScore, computerScore]
    } else if (computerSelection === "Scissors" && playerSelection == "Rock"){
        console.log("You WIN! Rock beats Scissors")
        playerScore = 1
        return [playerScore, computerScore]
    } else if (computerSelection === "Rock" && playerSelection == "Scissors"){
        console.log("You LOSE! Rock beats Scissors")
        computerScore = 1
        return [playerScore, computerScore]
    } else if (computerSelection === "Paper" && playerSelection == "Scissors"){
        console.log("You WIN! Scissors beats Paper")
        playerScore = 1
        return [playerScore, computerScore]
    } else if (computerSelection === "Scissors" && playerSelection == "Scissors"){
        console.log("Equality")
        return [playerScore, computerScore]
    }
}


function game(){

    let playerScoreTotal = 0;
    let computerScoreTotal = 0;

    

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose Rock/Paper/Scissors");
        let computerSelection = computerPlay();
        let results = playRound(computerSelection, playerSelection);
        playerScoreTotal +=  results[0];
        computerScoreTotal +=  results[1];
        console.log(`The score is Player: ${playerScoreTotal} vs. Computer: ${computerScoreTotal}`);
    }

    if (computerScoreTotal > playerScoreTotal){
        console.log("The Winner is the Computer!");
    } else {
        console.log("YOU WIN!!");
    }
}

game()




