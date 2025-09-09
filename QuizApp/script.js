const quizData =[
    {
        question:"What is the capital of France?",
        options:["Berlin", "Madrid", "Paris", "Lisbon"],
        answer:"Paris",
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: "HTML"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timeInterval;

const timerEl = document.getElementById('time');
const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const resultEl = document.querySelector('.result');
const scoreEl = document.getElementById('score');
const restartBtn = document.querySelector('.restart-btn');

function loadQuestion(){
    if (currentQuestion >= quizData.length){
        endQuiz();
        return;
    }

}

function checkAnswer(selectedOption){
    if (selectedOption ===)
}


function startTimer() {
    // Run this code every 1 second (1000ms)
    timerInterval = setInterval(() => {
        timeLeft = timeLeft - 1;       // subtract 1 second
        timerEl.textContent = timeLeft; // update the display

    // When time runs out
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // stop the timer
            endQuiz();                     // finish the quiz
        }
    }, 1000);
}
