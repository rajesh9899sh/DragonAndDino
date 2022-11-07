score=0;
cross= true;

audio = new Audio('play.mp3');
audiogo =new Audio('die.mp3');
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==38 || e.keyCode==32){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino'); 
        }, 700);
    }
    if(e.keyCode==39 ){
        dino = document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left= (dinoX + 112)+"px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left= (dinoX - 112)+"px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offSetX= Math.abs(dx-ox);
    offSetY= Math.abs(dy-oy);
    // console.log(offSetX,offSetY);
    if(offSetX<150 && offSetY< 40){
        gameOver.style.visibility= 'visible';
        obstacle.classList.remove('obstacleAni');
    } 
    else if(offSetX<50 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            aniDur =parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.15 ;  // here we will control the speed of obstacle
        obstacle.style.animationDuration = newDur +'s';
        }, 500);
    }
}, 10);

function updateScore(score){
    scoreCount.innerHTML ="Your Score: "+ score;
}