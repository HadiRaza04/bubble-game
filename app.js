var timer = 60;
var score = 0;
var randomValues;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}
function makeBubble(){
    let element = "";
    for(let i = 1; i <= 102; i++) {
        element += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector("#panelbottom").innerHTML = element;
}
function runTimer() {
    var timerInterval = setInterval(() => {
        if(timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#panelbottom").innerHTML = 
            `<div id="gameOver">
                <h1>Game Over</h1> 
                Your Score is ${score}
                <a onclick="location.reload()">Replay</a>
            </div>`
        }
    }, 1000);
}
function hitValue() {
    randomValues = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = randomValues;
}
document.querySelector("#panelbottom").addEventListener("click", function(e) {
    console.log(Number(e.target.textContent));
    if(randomValues === Number(e.target.textContent)){
        increaseScore();
        makeBubble();
        hitValue();
    }

})
runTimer();
makeBubble();
hitValue();