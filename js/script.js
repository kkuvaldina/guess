var randomNumber;
var results = [];
var audio1 = new Audio('Blop-Mark_DiAngelo.mp3');
var audio2 = new Audio('Woosh-Mark_DiAngelo.mp3');
var audio3 = new Audio('cheering.mp3');
var audio4 = new Audio('Sad_Trombone-Joe_Lamb.mp3');
var audio5 = new Audio('error.mp3');

function resetGame() {
    randomNumber = Math.ceil(Math.random() * 99);
    document.getElementById("start-again").className="hide";
    document.getElementById("submit-number").className="show";
    document.getElementById("image").src = "img/start.jpg";
    document.getElementById("header").innerText = "Let's Play! You have 6 attempts to guess the number! Good Luck!";
    document.getElementById("userGuess").value = "";
    results = [];
    document.getElementById("result").innerText = "";
}

function guessNumber() {

    var userGuess = document.getElementById("userGuess").value;
    event.preventDefault();

   
    if (userGuess >= randomNumber + 25 ) { changeDisplay("tooHigh");}
    else if (userGuess >= randomNumber + 12 && userGuess < randomNumber + 25) { 
        changeDisplay("high");
    }
    else if (userGuess >= randomNumber + 1 && userGuess < randomNumber + 12) { 
        changeDisplay("littleHigh");
    }
    else if (userGuess <= randomNumber - 1 && userGuess > randomNumber - 12) {
        changeDisplay("littleLow");
    }
    else if (userGuess <= randomNumber - 12 && userGuess > randomNumber - 25) {
        changeDisplay("low");
    }
    else if (userGuess <= randomNumber - 25) { changeDisplay("tooLow");}
    else if (userGuess == randomNumber) changeDisplay("correct");
    else changeDisplay("error");

    results.push(userGuess);
    document.getElementById("result").innerText = "Your guesses: " + results.join();
    
    if (results.length > 5 && userGuess != randomNumber) {
        changeDisplay("lose");
    }
}




function changeDisplay(status) {
    var message;
    var image;

    switch(status) {
        case "tooHigh":
            message = "You're WAY too High";
            image = "img/high.jpg"; 
            audio1.play('Blop-Mark_DiAngelo.mp3');
            break;
        case "high": 
            message = "You're High";
            image = "img/high.jpg"; 
            audio1.play('Blop-Mark_DiAngelo.mp3');
            break;
        case "littleHigh": 
            message = "You're just a little Bit High";
            image = "img/high.jpg"; 
            audio1.play('Blop-Mark_DiAngelo.mp3');
            break;
        case "littleLow": 
            message = "You're just a little Bit Low";
            image = "img/low.jpg"; 
            audio2.play('Woosh-Mark_DiAngelo.mp3');
            break;
        case "low": 
            message = "You're Low";
            image = "img/low.jpg"; 
            audio2.play('Woosh-Mark_DiAngelo.mp3');
            break;
        case "tooLow": 
            message = "You're WAY too Low";
            image = "img/low.jpg"; 
            audio2.play('Woosh-Mark_DiAngelo.mp3');
            break;
        case "correct":
            message = "Yahoo! You win!";
            image = "img/win.jpg"; 
            document.getElementById("start-again").className="show";
            document.getElementById("submit-number").className="hide";
            audio3.play('cheering.mp3');
            break;
        case "lose":
            message = "Oh No! You lose! Try again!";
            image = "img/lose.jpg"; 
            document.getElementById("start-again").className="show";
            document.getElementById("submit-number").className="hide";
            audio4.play('Sad_Trombone-Joe_Lamb.mp3');
            break;
        default:
            message = "That looks wrong, Try again!";
            image = "img/error.jpg"; 
            audio5.play('error.mp3');
    }
    document.getElementById("header").innerText = message;
    document.getElementById("image").src = image;
}






