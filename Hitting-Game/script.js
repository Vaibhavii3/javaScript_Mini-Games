// let hitCounts = 0;

//     let isGameStarted = false;
//     function startGame(){
//         document.getElementById('gameStatus').innerText = "Game Started !!";
//         hitCounts = 0;
        
//         let alien = document.getElementById('alien');
//         let time = setInterval(() => {
//             let i = Math.floor(Math.random()*500)+1;
//             let j = Math.floor(Math.random()*420)+1;
//             alien.style.left = i + "px"
//             alien.style.top = j + "px"
//         },1000);

//         setTimeout(() =>{
//             clearTimeout(time);
//             isGameStarted = false;
//             document.getElementById('gameStatus').innerText = "Game Over !!";
//         }, 30000)
//     }

//     function hitAlien(){
//         if(isGameStarted){

//             hitCounts++;
//             document.getElementById('totalHits').innerText = hitCounts;
//         }
//     }

let hitCounts = 0;
let isGameStarted = false;

function startGame(){
    if(isGameStarted) return;

    isGameStarted = true;
    hitCounts = 0;
    document.getElementById('totalHits').innerText = hitCounts;
    document.getElementById('gameStatus').innerText = "Game Started !!";
    document.getElementById('timeLeft').innerText = 30;

    let alien = document.getElementById('alien');
    let timeLeft = 30;

    let moveAlienInterval = setInterval(() => {
        let i = Math.floor(Math.random() * 500) + 1;
        let j = Math.floor(Math.random() * 420) + 1;
        alien.style.left = i + "px";
        alien.style.top = j + "px";
    }, 1000);

    let countdownInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timeLeft').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(moveAlienInterval);
            clearInterval(countdownInterval);
            isGameStarted = false;
            document.getElementById('gameStatus').innerText = "Game Over !!";
        }
    }, 1000);

}

function hitAlien(){
    if(isGameStarted){
        hitCounts++;
        document.getElementById('totalHits').innerText = hitCounts;
    }
}