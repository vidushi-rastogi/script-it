
$("#game-over-pop").hide();

//initial variables

var gamePattern = []; //to store game created patterns
var userPattern = []; //to store user patterns
var colorButtons = ["red", "blue", "green", "yellow"]; //button stored acc. their ids
var start = false;
var level = 0;

//initial key press sequence

$(document).keypress(function () {

  if(!start) {
    $("#title2").text("Level "+level); //changing h2 heading as game level
    nextSequence(); //random sequence generator
    start = true;
  }

});

//user response to the generated sequence

$(".btn").click(function() {

  var buttonClicked = $(this).attr("id"); //getting id of button clicked
  userPattern.push(buttonClicked); //storing id into userPattern
  playSound(buttonClicked);  //sound clip player for the button
  animatePressed(buttonClicked); //adding animation to the pressed button
  checkSequence(userPattern.length-1); //checking the last entry of userPattern
                                      //as it's the latest entry to the sequence.

});

//function to check sequence input by user

function checkSequence(latestEntry) {

  if(gamePattern[latestEntry] === userPattern[latestEntry]) //checking last user input with
                                                          //gamePattern last input
  {
    if(userPattern.length === gamePattern.length) //another check for list length of both
    {
      setTimeout(function() //if check successful
      { nextSequence(); },  //nextSequence call to generate new pattern
        1000);
    }
  }
  else
  {
    //manipulating page for game over.
    playSound("game-over");
    //$("#game-over-pop").addClass("pop-up");
    $("#game-over-pop").show().fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);

    setTimeout(function ()
    { $("#game-over-pop").hide(); },
    4000);

    $("#title2").text("Game Over! Press Any Key to Restart");
    startOver(); //start over call to re initialise the data.
  }
}

//nextSequence function to regenerate random pattern

function nextSequence() {

    userPattern = []; //empty user pattern entry

    level++;


    $("#title2").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4); //random number generated 0-4 to denote 4 colors


    var randomChosenColour = colorButtons[randomNumber]; //taking out color name with generated random index


    gamePattern.push(randomChosenColour); //adding random choosen color to game pattern


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

//function to play sound

function playSound(sound) {
  var audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();
}

//funciton to add animation to pressed button

function animatePressed(currentbutton) {

  $("#" + currentbutton).addClass("pressed"); //'pressed' class added to selected button

  setTimeout(function ()
  { $("#" + currentbutton).removeClass("pressed"); },
  100);

}

//funciton to start over the game

function startOver() {
  start = false;
  gamePattern = [];
  level = 0;
}
