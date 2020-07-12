var tuneStack = [];

$(".tune").click(function() {
  var clickedButton = $(this).attr("id");
  tuneStack.push(clickedButton);
  playSound(clickedButton);
  animateButton(clickedButton);
});

// $("#play").click(function() {
//   var tuneLength = tuneStack.length;
//   for (var i = 0; i < tuneLength; i++) {
//       task(tuneStack[i]);
//   }
//   function task(tuneStack[i]) {
//       setTimeout(function () {
//           playSound(tuneStack[i]);
//         }, 2000);
//   }
// });
document.addEventListener("keypress", function(event) {
    tuneStack.push(event.key);
    playSound(event.key);
    animateButton(event.key);
  }
)

// function makeSound(key) {
//
//   switch (key) {
//     case "a":
//               tuneStack.push(key);
//               playSound(key);
//               break;
//     case "a":
//
//       break;
//     case "s":
//
//       break;
//     case "d":
//
//       break;
//     case "j":
//
//       break;
//     case "k":
//
//       break;
//
//     default: console.log(key);
//
//   }
// }


$("#play").click(function () {
  for (let i = 0; i < tuneStack.length; i++) {
    setTimeout( function timer(){
        playSound(tuneStack[i]);
    }, i*200 );
  }
});

function playSound(sound) {
  var audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();
};


function animateButton(currentbutton) {

  $("#" + currentbutton).addClass("pressed"); //'pressed' class added to selected button

  setTimeout(function ()
  { $("#" + currentbutton).removeClass("pressed"); },
  100);

}


$("#go-back").click(function(){
  $("#go-back").attr("href","../index.html#spacetune");
})
