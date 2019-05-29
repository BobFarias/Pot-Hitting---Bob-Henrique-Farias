const canvas = document.getElementById('canvas').getContext('2d');

var WIDTH = 500;
var HEIGHT = 600;
canvas.font = '20px Calibri';


drawComponent = function() {
    canvas.save();
    canvas.fillStyle = component.color;
    canvas.fillRect(component.x, component.y, component.width, component.height);
    canvas.restore();
}


Distance = function(xClick, yClick, xPot, yPot) {
    const distance = Math.sqrt(Math.pow((xPot - xClick), 2) +
        Math.pow((yPot - yClick), 2));
    return distance;
}

startGame = function() {
    var component = {
        width: 20,
        height: 20,
        color: "white",
        x : Math.floor((Math.random() * 480) + 1),
        y : Math.floor((Math.random() * 580) + 1),
    };

    let counter = 0;
    var score = 0;
    var ScoreWin = document.getElementById("score")
    var countTry = document.getElementById("counter");
    var message = document.getElementById("location");
    var win = document.getElementById("win");
    let attempts = [600];

    document.addEventListener('click', function (event) {
        counter++;
        let distance = Distance(event.x, event.y, component.x, component.y);
        console.log(distance);
        attempts.push(distance);
        // console.log(attempts);

        if (distance < 20) {
            win.innerHTML = 'You Won!';
            counter = 0;
            score += 1;
            ScoreWin.innerHTML = 'Score: '+score;
            canvas.fillStyle = "red";
            canvas.fillRect(component.x, component.y, component.width, component.height);
            setInterval(NewGame, 5000);         
        
        }
        // console.log(attempts.length);
        if (attempts.length < 3) {
            message.innerHTML = '';
        }

        if ( 300 < distance && distance < 400){
            message.innerHTML = 'Cold';
        } else if  ( 401 < distance && distance < 499) {
            message.innerHTML = 'Super Cold';
        } else if  ( 501 < distance && distance < 599) {
            message.innerHTML = 'Winter is here my friend';
        } else if  ( 201 < distance && distance < 299) {
            message.innerHTML = 'Hot';
        } else if  ( 101 < distance && distance < 199) {
            message.innerHTML = 'Super Hot';
        } else if  ( 01 < distance && distance < 99) {
            message.innerHTML = 'Super Super Hot! You are so close, keep going!';
        }
        
        countTry.innerHTML = counter;
    }, false);
}

NewGame = function() {
    canvas.clearRect(0, 40, WIDTH, HEIGHT);
}

startGame();

