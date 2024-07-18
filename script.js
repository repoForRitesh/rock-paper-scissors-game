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
        msg.style.backgroundColor="#2D7311";
    }
    else{
        cpuScore++;
        cpuScorePara.innerText = cpuScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor="#BB4D00";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        msg.innerText = "Draw";
        msg.style.backgroundColor = "#32373B";
        msg.style.color = "#FAFAFF";
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