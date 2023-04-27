// This file contains code for the timer and score features
// Variables to get the highScores from local storage and parse them
const highScoresJSON = localStorage.getItem('highScores');
const highScores = $.parseJSON(highScoresJSON);

//Function to display high scores
const displayHighScores = () => {
    if (!highScoresJSON) {
        localStorage.setItem('highScores', JSON.stringify([{initials: 'BM', correctAnswers: '0'}]));
    }
if (highScores.length > 10){
    for (let i = 0; i <= highScores.length; i++){
        const row = $("<tr>");
        const initials = $("<td>").text(highScores[i].initials);
        const scoreCell = $("<td>").text(highScores[i].correctAnswers);
        row.append(initials);
        row.append(scoreCell);
        tBody.append(row);
}}else{
    for (let i = 0; i <= 10; i++){
        const row = $("<tr>");
        const initials = $("<td>").text(highScores[i].initials);
        const scoreCell = $("<td>").text(highScores[i].correctAnswers);
        row.append(initials);
        row.append(scoreCell);
        tBody.append(row);
}}};






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














