function rollDice(){
    var dice1Img = document.getElementById("diceOne");
    var dice2Img = document.getElementById("diceTwo");
    var ranOne = Math.floor(Math.random() * 6) + 1;
    var ranTwo = Math.floor(Math.random() * 6) + 1;
    if(ranOne == 1){
        dice1Img.src = 'dice-1.svg';
    }
    else if(ranOne == 2){
        dice1Img.src = 'dice-2.svg';
    }
    else if(ranOne == 3){
        dice1Img.src = 'dice-3.svg';
    }
    else if(ranOne == 4){
        dice1Img.src = 'dice-4.svg';
    }
    else if(ranOne == 5){
        dice1Img.src = 'dice-5.svg';
    }
    else{
        dice1Img.src = 'dice-6.svg';
    }

    if(ranTwo == 1){
        dice2Img.src = 'dice-1.svg';
    }
    else if(ranTwo == 2){
        dice2Img.src = 'dice-2.svg';
    }
    else if(ranTwo == 3){
        dice2Img.src = 'dice-3.svg';
    }
    else if(ranTwo == 4){
        dice2Img.src = 'dice-4.svg';
    }
    else if(ranTwo == 5){
        dice2Img.src = 'dice-5.svg';
    }
    else{
        dice2Img.src = 'dice-6.svg';
    }

    var total = document.getElementById("total");
    var text = document.getElementById("winLoseText");
    // var lose = document.getElementById("less-than-10");
    var sum = ranOne + ranTwo;
    total.textContent = sum;
    if(sum >= 8){
        text.textContent = "You Win: Try Again!";
    }
    else{
        text.textContent = "You didn't win: Try Again!";
    }
}

function myClock(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = `${hrs}:${mins}:${secs}`;
    console.log(time);
}