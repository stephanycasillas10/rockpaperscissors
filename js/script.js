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
        var userChoice=$('#input').val()
        $('#userChoice').text(userChoice);

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

        
        
    });
});


