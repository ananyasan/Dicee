var randomNumber1;
randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage1= "images/"+"dice"+ randomNumber1+ ".png";
var Image1= document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomDiceImage1);
var randomNumber2;
randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage2= "images/"+"dice"+ randomNumber2+ ".png";
var Image2= document.querySelectorAll("img")[1];
Image2.setAttribute("src", randomDiceImage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 WINS!!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 WINS!!";
}
else{
  document.querySelector("h1").innerHTML="IT'S A TIE!!";
}