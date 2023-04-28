import { questions } from "./questions.js";

console.log(questions);

//variables to select elements from the DOM
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//counters for questions and score
let currentQuestionIndex = 0;
let score =0;

//function to start the quiz
const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
};
//function to show the quiz questions
const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    //displays answer choices
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);        
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
};

//function to reset the answer choices
const resetState = () => {
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

//function to handle the selected answers
const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        console.log('correct')
        score ++;
    }else{
        selectedBtn.classList.add("incorrect");
        console.log("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        });
        nextButton.style.display = "block";    
};

// function to show score at end of quiz
const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 


// function to move to the next question or display the score if there are no more questions in the quiz
const handleNextButton = () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

//next button functionality
nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

//begins quiz
startQuiz()