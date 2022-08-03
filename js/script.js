// variable declaration part
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let mark = document.querySelectorAll("#mark");
let scoreBoard = document.querySelector(".overCard");
let startNew = document.querySelector(".start");
let winnerText = document.getElementById("sym");
let win = document.getElementById("wins");
let turn = document.querySelector(".turn");
let sound = document.getElementById("sound");
let playerO = "O";
let playerX = "X";
let currPlayer = playerX;
let winner;
let gameOver = 0;
let game = false;

//coding parts
//game start sound
sound.src = "music/start.wav";
//reset function start the game from first
reset.addEventListener("click", () => {
    location.reload();
});
//giving border for boxes
boxes[3].style.borderTop = "solid 2px var(--mildBlue)";
boxes[4].style.borderTop = "solid 2px var(--mildBlue)";
boxes[5].style.borderTop = "solid 2px var(--mildBlue)";
boxes[6].style.borderTop = "solid 2px var(--mildBlue)";
boxes[7].style.borderTop = "solid 2px var(--mildBlue)";
boxes[8].style.borderTop = "solid 2px var(--mildBlue)";
boxes[1].style.borderLeft = "solid 2px var(--mildBlue)";
boxes[4].style.borderLeft = "solid 2px var(--mildBlue)";
boxes[7].style.borderLeft = "solid 2px var(--mildBlue)";
boxes[2].style.borderLeft = "solid 2px var(--mildBlue)";
boxes[5].style.borderLeft = "solid 2px var(--mildBlue)";
boxes[8].style.borderLeft = "solid 2px var(--mildBlue)";

//add event listener to each boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        setVal(i);
    });
}
function setVal(index) {
    //display the symbol in that game board
    if (mark[index].innerHTML == "") {
        // it play a small music when the box is clicked
        sound.src = "music/touch.wav";
        //this line tell who's turn to play
        if (currPlayer == playerX) {
            turn.innerHTML = playerO;
            turn.style.color = "var(--tomato)";
        } else {
            turn.innerHTML = playerX;
            turn.style.color = "var(--green)";
        }
        // changing the mark Symbol color
        if (currPlayer == playerX) mark[index].style.color = "var(--green)";
        else mark[index].style.color = "var(--tomato)";
        mark[index].innerHTML = currPlayer;
        //change the next symbol
        if (currPlayer == playerO) currPlayer = playerX;
        else currPlayer = playerO;
        //increment the gameOver value to find the game is draw or not
        gameOver++;
    }
    checkIsGameOver();
}
function gameFinish() {
    //it play winning sound
    sound.src = "music/over.wav";
    // this function show the score board
    scoreBoard.style.opacity = "1";
    scoreBoard.style.top = "50%";
    winnerText.innerHTML = winner;
    setTimeout(() => {
        sound.src = "music/win.wav";
    }, 1500);
    //this codes disable the div tag
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.pointerEvents = "none";
    }
}
function checkIsGameOver() {
    //this function check the game logic to wins the match
    //this first 3 control statement check the win in row order
    if (
        mark[1].innerHTML == mark[0].innerHTML &&
        mark[2].innerHTML == mark[1].innerHTML &&
        mark[0].innerHTML != ""
    ) {
        game = true;
        winner = mark[1].innerHTML;
        gameFinish();
    } else if (
        mark[4].innerHTML == mark[3].innerHTML &&
        mark[5].innerHTML == mark[4].innerHTML &&
        mark[3].innerHTML != ""
    ) {
        game = true;
        winner = mark[4].innerHTML;
        gameFinish();
    } else if (
        mark[7].innerHTML == mark[6].innerHTML &&
        mark[8].innerHTML == mark[7].innerHTML &&
        mark[6].innerHTML != ""
    ) {
        game = true;
        winner = mark[7].innerHTML;
        gameFinish();
    }
    //the next 3 control statement check the wins in col order
    else if (
        mark[3].innerHTML == mark[0].innerHTML &&
        mark[6].innerHTML == mark[3].innerHTML &&
        mark[0].innerHTML != ""
    ) {
        game = true;
        winner = mark[3].innerHTML;
        gameFinish();
    } else if (
        mark[4].innerHTML == mark[1].innerHTML &&
        mark[7].innerHTML == mark[4].innerHTML &&
        mark[1].innerHTML != ""
    ) {
        game = true;
        winner = mark[4].innerHTML;
        gameFinish();
    } else if (
        mark[5].innerHTML == mark[2].innerHTML &&
        mark[8].innerHTML == mark[5].innerHTML &&
        mark[2].innerHTML != ""
    ) {
        game = true;
        winner = mark[5].innerHTML;
        gameFinish();
    }
    //and the last two control statement check the win in diagonal order
    else if (
        mark[4].innerHTML == mark[0].innerHTML &&
        mark[8].innerHTML == mark[4].innerHTML &&
        mark[0].innerHTML != ""
    ) {
        game = true;
        winner = mark[4].innerHTML;
        gameFinish();
    } else if (
        mark[4].innerHTML == mark[2].innerHTML &&
        mark[6].innerHTML == mark[4].innerHTML &&
        mark[2].innerHTML != ""
    ) {
        game = true;
        winner = mark[4].innerHTML;
        gameFinish();
    }
    //this control statement check the game whether it is draw or not
    if (gameOver == 9 && game == false) {
        sound.src = "music/draw.wav";
        scoreBoard.style.opacity = "1";
        scoreBoard.style.top = "45%";
        win.innerHTML = "match draw";
    }
}
startNew.addEventListener("click", () => {
    location.reload();
});
