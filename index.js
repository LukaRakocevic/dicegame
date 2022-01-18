//rng funkcija
function randomIntFromInterval(min, max) { // min and max included 
     return Math.floor(Math.random() * (max - min + 1) + min)
  }
//dva rng-a
 var randomNumber1 = randomIntFromInterval(1, 6);
 var randomNumber2 = randomIntFromInterval(1, 6);

//generacija imena slike
 var randomDiceImage1 = "dice" + randomNumber1 + ".png"; 
 var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 

 //pravljenje adrese za image
var imgSource1 = "images/" + randomDiceImage1;
var imgSource2 = "images/" + randomDiceImage2;


//editor img-a
//pravi var, selektuje element 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgSource1);



var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imgSource2);


//ne radi jebeno??
//var image1 = document.getElementById(d1);
//image1.setAttribute("src", imgSource1);


//winner winner chicken dinner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Igrač 1 pobeđuje!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Igrač 2 pobeđuje! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Izjednačeno!";
  }
