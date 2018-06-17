
$(document).ready(function(){
//player will guess numbers

function playerNumberInt(){
    return parseInt(Math.random()*(120-19) + 19);
}


//crystals number

function crystalNumbers(){
    return parseInt(Math.random()*(12-1) + 1);
}

var playerNumb =  playerNumberInt();   //player random number 
var inputNumber = 0;
var wins = 0;
var losses = 0;
var red  = crystalNumbers();          //red crystal
var blue = crystalNumbers();     //blue crystal
var yellow = crystalNumbers();       //yellow crystal
var green = crystalNumbers(); 

function displayUpdate(){
    inputNumber = 0;
    playerNumb =  playerNumberInt();
    $("#player").text(playerNumb);
    $("#total").text(inputNumber);//displays the number that is adding the gems
    $("#stats").html('<p>Wins: ' + wins + '</p>' + '<p>Losses: ' + losses +'</p>');
}


       //green crystal

    $("#player").text(playerNumb);
    displayUpdate()

 //-----------------------------------------------------------------------
 //on click  events for the crystals

    $("#red").on("click", function(){
        inputNumber += red;
        $("#total").text(inputNumber);//displays the number that is adding the gems
        if(inputNumber === playerNumb){
            wins++;
            displayUpdate();
        }
        console.log(playerNumb);
        if(inputNumber > playerNumb){
            losses++;
            displayUpdate();
        }
        
    });

    $("#blue").on("click", function(){
        inputNumber += blue;
        $("#total").text(inputNumber);//displays the number that is adding the gems
        if(inputNumber === playerNumb){
            wins++;
            displayUpdate();
        }
        console.log(playerNumb);
        if(inputNumber > playerNumb){
            losses++;
            displayUpdate();
        }
        
    });

    $("#yellow").on("click", function(){
        inputNumber += yellow;
        $("#total").text(inputNumber);//displays the number that is adding the gems 
         if(inputNumber === playerNumb){
            wins++;
            displayUpdate();
        }
        console.log(playerNumb);
        if(inputNumber > playerNumb){
            losses++;
            displayUpdate();
        }
        
    });

    $("#green").on("click", function(){
        inputNumber += green;
        $("#total").text(inputNumber);//displays the number that is adding the gems 
        if(inputNumber === playerNumb){
            wins++;
            displayUpdate();
        }
        console.log(playerNumb);
        if(inputNumber > playerNumb){
            losses++;
            displayUpdate();
        }
        
    });
   
})

