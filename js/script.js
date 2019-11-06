// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$('#shoot').click(function(){
    var inputValue=$('#input').val()
    $('#userChoice').text(inputValue);
});
 var userChoice=""
 var computerChoice=""
 var winner=""
 var randomNumber=Math.random();

