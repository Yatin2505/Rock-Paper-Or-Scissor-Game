const choices = ["Rock", "Paper", "Scissors"];

let playerScore=0;
let computerScore=0;

function playGame(player, computer) {
    document.getElementById("computerScore").innerText=`Computer Score : ${computerScore}`
     document.getElementById("playerScore").innerText=`Player Score : ${playerScore}`
    
    document.getElementById("playerChoice").innerText=`Player Choice : ${player}`;
    document.getElementById("computerChoice").innerText=`Computer Choice : ${computer}`;

    if(player===computer){
        document.getElementById("result").innerText="Draw"
    }  
    else if( (player==="Rock" && computer==="Paper") ||
              ( player==="Paper" && computer==="Scissors") ||
            (player==="Scissors"&& computer==="Rock")
        ){
         
             document.getElementById("result").innerText="Computer Win !"
             computerScore++;
             
    }
    else{
         document.getElementById("result").innerText=" Player Win !"
            playerScore++;
           
    }
}

document.getElementById("Rock").addEventListener("click", function () {

    let computerChoice=choices[Math.floor(Math.random()*choices.length)];
    playGame("Rock", computerChoice)
    
})

document.getElementById("Paper").addEventListener("click", function () {

    let computerChoice=choices[Math.floor(Math.random()*choices.length)];
    playGame("Paper", computerChoice)
    
})

document.getElementById("Scissors").addEventListener("click", function () {

    let computerChoice=choices[Math.floor(Math.random()*choices.length)];
    playGame("Scissors", computerChoice)
    
})


document.getElementById("restart").addEventListener("click", function () {

    playerScore=0;
    computerScore=0;
    document.getElementById("playerScore").innerText=`Player Score : ${playerScore}`;
    document.getElementById("computerScore").innerText=`Computer Score : ${computerScore}`;
    document.getElementById("playerChoice").innerText=`Player Choice : `;
    document.getElementById("computerChoice").innerText=`Computer Choice : `;
    document.getElementById("result").innerText="";
    
})