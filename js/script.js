// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$( "document" ).ready(function() {

    var computerChoice;
    var winner;
    var randomNumber;

    $('#shoot').click(function(){
        var userChoice=$('#input').val().toLowerCase()
        console.log(userChoice)
        $('#userChoice').text(userChoice);

        $('#input').val("");

        randomNumber=Math.floor((Math.random()*3)+1);

        if (randomNumber===1){
        $("#computerChoice").text("rock");
        var computerChoice="rock"
        }

        else if(randomNumber===2){
        $("#computerChoice").text("paper");
        var computerChoice="paper"
        }

        else if(randomNumber===3){
        $("#computerChoice").text("scissors");
        var computerChoice="scissors"
        }
        
        if ((computerChoice==="rock" && userChoice==="rock")||(computerChoice==="paper"&& userChoice==="paper")
        ||(computerChoice==="scissors"&& userChoice==="scissors")){
            $('#Result').text("Tie");
        }

        else if ((computerChoice==="rock"&& userChoice==="paper")
        ||(computerChoice==="paper"&& userChoice==="scissors")||(computerChoice==="scissors"&& userChoice==="rock")){
            $('#Result').text("You Won!")
        }

        else if ((computerChoice==="rock"&& userChoice==="scissors")||
        (computerChoice==="paper"&& userChoice==="rock")||(computerChoice==="scissors"&& userChoice==="paper")){
            $("#Result").text("You Lost")
        }
        
        
    });
});


