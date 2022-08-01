function rollDice(){
  var randomNumber1=Math.random();
  randomNumber1=Math.floor(randomNumber1*6);
  var list=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
  var rimg1=list[randomNumber1];
  var randomNumber2=Math.random();
  randomNumber2=Math.floor(randomNumber2*6);
  var list=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
  var rimg2=list[randomNumber2];

  if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
  }else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
  }else{
    document.querySelector("h1").innerHTML="Draw!";
  }

  document.querySelector("img.img1").setAttribute("src","images/"+rimg1);
  document.querySelector("img.img2").setAttribute("src","images/"+rimg2);
}

if (window.performance.navigation.type===1) {
  rollDice();
}
