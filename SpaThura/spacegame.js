var container = $('#container');
var rocket = $('#rocket');
var beam = $('#beam');
var alienship = $('#alienship');
var score = $('#score');
var speed_span = $('#speed');
var restart_btn = $('#restart_btn');


var container_width = parseInt(container.width());
var container_height = parseInt(container.height());
var beam_initial_position = parseInt(beam.css('right'));
// var alienship_speed = parseInt(alienship.css('animation-duration'));
var rocket_left = parseInt(rocket.css('left'));
var rocket_height = parseInt(rocket.height());
var speed = 10;

var go_up = false;
var score_updated = false;
var game_over = false;

// console.log(alienship_speed);
// console.log(beam_initial_position);
// beam.css('right', beam_initial_position + speed);



//for desktop

$(document).keypress(function (ek) {


  var k = ek.keyCode;

  if(k === 13) {

    var the_game = setInterval(function () {
        alienship.show();

        if (collision(rocket, beam) || parseInt(rocket.css('top')) <= 0 || parseInt(rocket.css('top')) > container_height - rocket_height) {

            stop_the_game();

        }
        else {
              var beam_current_position = parseInt(beam.css('right'));

              //update the score when the beam has passed the rocket successfully
              if (beam_current_position > container_width - rocket_left) {
                  if (score_updated === false) {
                      score.text(parseInt(score.text()) + 1);
                      score_updated = true;
                  }

              }


            //check if beam is outta the container_width
            if(beam_current_position > container_width) {



                  //increase speed
                  speed = speed + 1;
                  speed_span.text(speed);

                  score_updated = false;

                  beam_current_position = beam_initial_position;

            }
            //move the beam
            beam.css('right', beam_current_position + speed);

            if(go_up == false) {
              go_down();
            }
      }

    }, 30);

    $(document).on('keydown', function (e) {
      var key = e.keyCode;
      if(key === 16 && go_up === false && game_over === false) {
        go_up = setInterval(up, 50);
      }
    });

    $(document).on('keyup', function (e) {
        var key = e.keyCode;
        if (key === 16) {
            clearInterval(go_up);
            go_up = false;
        }
    });

    function go_down() {
      rocket.css('top', parseInt(rocket.css('top')) + 5);
    }

    function up() {
      rocket.css('top', parseInt(rocket.css('top')) - 10);
    }

    function stop_the_game() {
        clearInterval(the_game);
        var audio = new Audio("game-over.mp3");
        audio.play();
        game_over = true;
        restart_btn.show().fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        alienship.hide();

    }

    restart_btn.click(function () {
        location.reload();
    });

    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }


  }

});



//for Mobile

$("#game-start").on("click", function () {

  var the_game = setInterval(function () {
      alienship.show();

      if (collision(rocket, beam) || parseInt(rocket.css('top')) <= 0 || parseInt(rocket.css('top')) > container_height - rocket_height) {

          stop_the_game();

      }
      else {
            var beam_current_position = parseInt(beam.css('right'));

            //update the score when the beam has passed the rocket successfully
            if (beam_current_position > container_width - rocket_left) {
                if (score_updated === false) {
                    score.text(parseInt(score.text()) + 1);
                    score_updated = true;
                }

            }


          //check if beam is outta the container_width
          if(beam_current_position > container_width) {



                //increase speed
                speed = speed + 1;
                speed_span.text(speed);

                score_updated = false;

                beam_current_position = beam_initial_position;

          }
          //move the beam
          beam.css('right', beam_current_position + speed);

          if(go_up == false) {
            go_down();
          }
    }

  }, 30);

  $(document).on("touchstart", function (e) {

    if(go_up === false && game_over === false) {
      go_up = setInterval(up, 50);
    }
  });

  $(document).on("touchend", function (e) {

      clearInterval(go_up);
      go_up = false;

  });

  function go_down() {
    rocket.css('top', parseInt(rocket.css('top')) + 5);
  }

  function up() {
    rocket.css('top', parseInt(rocket.css('top')) - 10);
  }

  function stop_the_game() {
      clearInterval(the_game);
      var audio = new Audio("game-over.mp3");
      audio.play();
      game_over = true;
      restart_btn.show().fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      alienship.hide();

  }

  restart_btn.click(function () {
      location.reload();
  });

  function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;

    }


});



$('#a-go-back').click(function () {
  $('#a-go-back').attr("href", "../index.html#spacegame");
})
