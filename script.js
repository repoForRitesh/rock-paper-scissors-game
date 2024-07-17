let userScore=0;
let cpuScore=0;

const choice = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const cpuScorePara = document.querySelector("#cpu-score");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
    }
    else{
        cpuScore++;
        cpuScorePara.innerText = cpuScore;
        msg.innerText = "You lose";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        msg.innerText = "Draw";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }
        else{
            userWin = compChoice === "rock" ? false:true;
        }

        showWinner(userWin);
    }
};

choice.forEach((choices) => {
    choices.addEventListener(("click"), () => {
        const userChoice=choices.getAttribute("id");
        playGame(userChoice);
    });
});