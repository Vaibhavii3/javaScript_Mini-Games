let hitCounts = 0;
    let isGameStarted = false;
    function startGame(){
        document.getElementById('gameStatus').innerText = "Game Started !!";
        hitCounts = 0;
        isGameStarted = true;
        let alien = document.getElementById('alien');
        let time = setInterval(() => {
            let i = Math.floor(Math.random()*500)+1;
            let j = Math.floor(Math.random()*420)+1;
            alien.style.left = i + "px"
            alien.style.top = j + "px"
        },1000);
        setTimeout(() =>{
            clearTimeout(time);
            isGameStarted = false;
            document.getElementById('gameStatus').innerText = "Game Over !!";
        }, 30000)
    }

    function hitAlien(){
        if(isGameStarted){

            hitCounts++;
            document.getElementById('totalHits').innerText = hitCounts;
        }
    }