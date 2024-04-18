let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const comScorePara = document.querySelector("#comScore");

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";  
}

const showWinner = (userWin, userChoice, comChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats com ${comChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        comScorePara.innerText = compScore;
        msg.innerText = `you lose! com ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {

    //generate computer choice
    const comChoice = genComChoice();
    
    if(userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissor, paper
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //scissor, rock
            userWin = comChoice === "scissor" ? false : true;
        } else {
            //paper, rock
            userWin = comChoice === "rock" ? false : true;
        }
        
        showWinner(userWin, userChoice, comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 