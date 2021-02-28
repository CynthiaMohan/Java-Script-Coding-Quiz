let startButtonClick = document.querySelector("#startBtn");
let startQuizBox = document.querySelector("#start-box");
let timer = document.querySelector("#timer");
let insertQn = document.querySelector(".question");
let insertchoices1 = document.querySelector("#choice1");
let insertchoices2 = document.querySelector("#choice2");
let insertchoices3 = document.querySelector("#choice3");
let insertchoices4 = document.querySelector("#choice4");
let clickedAns;

let questions = [
    {
        qn: "Commonly used datatypes do not include:",
        answer: "Alerts",
        choice1: "Strings",
        choice2: "Boolean",
        choice3: "Alerts",
        choice4: "numbers"
    },
    {
        qn: "Condition in an if-else statement is enclosed with ________.",
        answer: "Paranthesis",
        choice1: "quotes",
        choice2: "Paranthesis",
        choice3: "Curly brackets",
        choice4: "Square brackets"
    },
    {
        qn: "A very useful tool used during development and debugging for printing is ________.",
        answer: "console.log()",
        choice1: "Bash / Terminal",
        choice2: "Javascript",
        choice3: "For loops",
        choice4: "console.log()"
    },
    {
        qn: "Arrays in javascript can be used to store ______.",
        answer: "All of the above",
        choice1: "Numbers and Strings",
        choice2: "Other Arrays",
        choice3: "Boolean",
        choice4: "All of the above"
    },
    {
        qn: "String values must be enclosed within _______ when being assigned to variables.",
        answer: "Quotes",
        choice1: "Quotes",
        choice2: "Boolean",
        choice3: "Alerts",
        choice4: "numbers"
    }
];

let time = 60;
let qnId = 0;
let answer = " ";
//Countdown Timer
const displayTimer = function (time) {
    let countdownTimer = setInterval(function () {

        console.log("let the quiz begin");
        if (time > 1) {
            timer.textContent = time + " seconds";
        }
        else if (time === 1) {
            timer.textContent = time + " second";
        }
        else if (time < 1) {
            timer.textContent = " ";
            clearInterval(countdownTimer);
            console.log("The Quiz has timed out");
        }
        time--;
    }, 1000);
};
let nextQuestion = function () {
    qnId++;
}
//Check Answers
let checkAnswer = function (event) {
    clickedAns = event.target.textContent;
    console.log("answer=>" + clickedAns);

    if (clickedAns === questions[qnId].answer) {
        console.log("Correct!");
        questionnaire(nextQuestion());
    }

    else if (clickedAns !== questions[qnId].answer) {
        console.log("wrong");
        questionnaire(nextQuestion());
        clearInterval(countdownTimer)
        time -= 10;
        displayTimer(time);

    }

};
//Insert question
let questionnaire = function (qnId) {
    displayTimer(time);
    insertQn.textContent = questions[qnId].qn;
    insertchoices1.textContent = questions[qnId].choice1;
    insertchoices1.className = "choiceBtn";
    insertchoices2.textContent = questions[qnId].choice2;
    insertchoices2.className = "choiceBtn";
    insertchoices3.textContent = questions[qnId].choice3;
    insertchoices3.className = "choiceBtn";
    insertchoices4.textContent = questions[qnId].choice4;
    insertchoices4.className = "choiceBtn";

    document.querySelector(".answers").addEventListener("click", checkAnswer);
};


startButtonClick.addEventListener('click', function () {

    console.log("Start has been clicked");
    startQuizBox.classList.add("start-box");

    // Display Quiz questionaire
    questionnaire(qnId);
});