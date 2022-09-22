

var array = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]


var randomNumber1 = Math.floor(Math.random()*array.length);
document.querySelector(".img1").src = array[randomNumber1];

var randomNumber2 = Math.floor(Math.random()*array.length);
document.querySelector(".img2").src = array[randomNumber2];

if(randomNumber2>randomNumber1)
 {
   document.querySelector("h1").innerHTML = "PLAYER 2 WINS "
 }
 else if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS "
  }
else{
    document.querySelector("h1").innerHTML = "draw"
}
