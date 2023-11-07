// Questions 
// 1 - What tag is used to link a JS file in HTML?
// <body> / <meta> / <link> / <script> / <footer>
// 2 - What can be stored in an array?
// strings / numbers / boolean values / objects / all of the above
// 3 - What must each object value have?
// a key / a boolean statement / ; / matching values / a shelf
// 4 - What would be the best way to store multiple related variables?
// in an array / in an object / as a function / as a json / an eventlistener
// _____________________________________________________________

//Start
var start = document.querySelector("#start");
var wrapper = document.querySelector(".wrapper");


// Question Variables Linked to HTML
var questionsDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var answer1 = document.querySelector("#btn1");
var answer2 = document.querySelector("btn2");
var answer3 = document.querySelector("#btn3");
var answer4 = document.querySelector("#btn4");
var answer5 = document.querySelector("#btn5");
// let these answes and buttons = the correct values

// object of questions
var AllQuestions = {
    Title: questionsDiv,
    Options: allanswers
}
console.log(AllQuestions);

// questions object
var questionsDiv = {
    question1: "What tag is used to link a JS file in HTML?",
    question2: "What can be stored in an array?",
    question3: "What must each object value have?",
    question4: "What would be the best way to store multiple related variables?"
}
console.log(questions)


var allanswers = {
    anstoq1: ["<body>", "<meta>", "<link>", "<script>", "<footer>"],
    anstoq2: ["strings", "numbers", "boolean values", "objects", "all of the above"],
    anstoq3: ["a key", "a boolean statement", ";", "matching values", "a shelf"],
    anstoq4: ["in an array", "in an object", "as a function", "as a json", "as an Event.Listener"]
}
console.log(allanswers)
console.log(allanswers.ans4)

// correct question and answer object
var correct = {
    question1: allanswers.anstoq1[3],
    question2: allanswers.anstoq2[4],
    question3: allanswers.anstoq3[0],
    question4: allanswers.anstoq4[1]
}
console.log(correct)


function startQuiz(event) {
    console.log("Quiz Started");
    wrapper.innerHTML = "";
    showQuestion1();
}
    // when button is clicked
    // hide start section
    // input new section and answers
    // add event listener === the correct ans within the object then display correct
    // points++
    // else time - 5 seconds and display wrong
    // would it be worth only using if statement for if they answer wrong because then it would only take time off if answered wrong therefore no else would be required?


function showQuestion1(){
    let questionTitle = questionsDiv.question1;
    console.log(questionTitle);
    questionTitle

}

start.addEventListener("click", startQuiz);



