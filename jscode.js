function getComputerChoice(){
    let randomn = Math.floor( Math.random() * 100 );
    if (0 <= randomn && randomn<33) {
        return "rock"
    }
    else if (33 <= randomn && randomn <66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function round(playerS,computerS) {
    if (playerS === computerS) {
        return "Its a tie !"
    }
    if (playerS == "rock" && computerS == "scissors" || playerS == "scissors" && computerS == "paper"){
        winner();
        return `You win !, ${playerS} beats ${computerS}`;
    }
    else {
        loser();
        return `You lose !, ${computerS} beats ${playerS}`
    }
}
let win = 0
let lose = 0 

function winner(){
    ++win
}
function loser(){
    ++lose
}
function game() {
    for (let i = 0; i <5; ++i ) {
        let playerSelection = prompt("enter your move: ");
        playerSelection = playerSelection.toLowerCase();
        let ComputerSelection = getComputerChoice();

        round(playerSelection,ComputerSelection)
        console.log(`you picked ${playerSelection} and computer : ${ComputerSelection}`)
    }
    console.log(`you won ${win} time(s), and lost ${lose} time(s), and the ties are ${5-lose-win} time(s)`)
}

game()