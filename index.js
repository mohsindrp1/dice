
let player1 = prompt("Enter player1 name");
let player2 = prompt("Enter player2 name");

var randomNumber1 = Math.floor(Math.random()*6+1);

var randomDiceImg = "dice" +  randomNumber1 + ".png ";

var randomImageSource = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" ,randomImageSource);





var randomNumber2 =Math.floor(Math.random() * 6 + 1);

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImg2;

var image2 =document.querySelectorAll("img")[1];

image2.setAttribute("src" ,randomImageSource2);



if(randomNumber1 > randomNumber2){
    document.querySelector("#winner").innerHTML =`🏆congrats  ${player1}  you won `;
    document.querySelector('#winner' .container).style.backgroundColor = "lightgreen";
        document.querySelector('#winner').style.color = "green";
}
else{
    document.querySelector("#winner").innerHTML =`🏆congrats  ${player2} you won `;
}





