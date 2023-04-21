// This file contains code for the timer and score features












// Selects the #timeLeft html element and give the time it's functionality
let timeLeft = parseInt($('#timeLeft').html());
const timerInterval = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      $('timeLeft').html(60);
      alert("Time's up!!");
    //   saveHighScore(initials.value, correctAnswers);
    } else {
      timeLeft --;
      $('timeLeft').html(timeLeft)
    }
  }, 1000);














  //export functions: timerInterval
  // export variables: timeLeft