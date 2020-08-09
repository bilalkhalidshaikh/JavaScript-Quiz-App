// import'./Quiz';

// Quiz Object
var quiz = {
  JS: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: [
        "&lt;script&gt;",
        "&lt;javascript&gt;",
        "&lt;scripting&gt;",
        "&lt;js&gt;",
      ],
      answer: "&lt;script&gt;",
      score: 0,
      status: "",
    },
    {
      id: 2,
      question: "How do you write &quot;Hello World&quot; in an alert box?",
      options: [
        "alertBox(&quot;Hello World&quot;);",
        "msg(&quot;Hello World&quot;);",
        "alert(&quot;Hello World&quot;);",
        "msgBox(&quot;Hello World&quot;);",
      ],
      answer: "alert(&quot;Hello World&quot;);",
      score: 0,
      status: "",
    },
    {
      id: 3,
      question: "How do you create a function in JavaScript?",
      options: [
        "function myFunction()",
        "function:myFunction()",
        "function = myFunction()",
      ],
      answer: "function myFunction()",
      score: 0,
      status: "",
    },
    {
      id: 4,
      question: "How do you call a function named &quot;myFunction&quot;?",
      options: [
        "call function myFunction()",
        "call myFunction()",
        "myFunction()",
      ],
      answer: "myFunction()",
      score: 0,
      status: "",
    },
    {
      id: 5,
      question: "How to write an IF statement in JavaScript?",
      options: [
        "if i = 5 then",
        "if i == 5 then",
        "if (i === 5){}",
        " if i = 5",
      ],
      answer: "if (i === 5){}",
      score: 0,
      status: "",
    },
    {
      id: 6,
      question: "How can you add a comment in a JavaScript?",
      options: [
        "//This is a comment",
        "&sbquo;This is a comment",
        "&lt;!--This is a comment--&gt;",
      ],
      answer: "//This is a comment",
      score: 0,
      status: "",
    },
    {
      id: 7,
      question: "JavaScript is the same as Java.",
      options: ["true", "false", "Absolutely"],
      answer: "false",
      score: 0,
      status: "",
    },
    {
      id: 8,
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
      answer: "onclick",
      score: 0,
      status: "",
    },
    {
      id: 9,
      question: "How do you declare a JavaScript variable?",
      options: ["var carName;", "variable carName;", "v carName;"],
      answer: "var carName;",
      score: 0,
      status: "",
    },
    {
      id: 10,
      question: "Is JavaScript case-sensitive?",
      options: ["No", "Yes", "Nore"],
      answer: "Yes",
      score: 0,
      status: "",
    },
  ],
};
// Quiz Object

// Quiz Script
var totalQues = document.getElementById("totalQues");
var count = 0;
var qId = 1;
var score = 0;
var quisId = document.getElementById("qid");
var questionTitle = document.getElementById("question");
var previous = document.getElementById("previous");
previous.disabled = true;
var next = document.getElementById("next");
var nextText = document.createTextNode("Next");
next.appendChild(nextText);
var previousText = document.createTextNode("Previous");
previous.appendChild(previousText);
var sumbit = document.createTextNode("Submit");
function displayQuiz(e) {
  var totalQuestions = quiz.JS.length;
  totalQues.innerText = totalQuestions;
  var questionOptions = document.getElementsByClassName(
    "option-block-container"
  );

  questionTitle.innerHTML = quiz.JS[e].question;
  for (var i = 0; i < questionOptions.length; i++) {
    questionOptions[i].innerHTML = quiz.JS[e].options[i];
  }
  result();
}
next.onclick = () => {
  count++;
  qId++;
  quisId.innerHTML = qId + ".";
  displayQuiz(count);
  finalResult(count);
  removeActive();
};
previous.onclick = () => {
  count--;
  displayQuiz(count);
  qId--;
  quisId.innerHTML = qId + ".";
};
function addActive(e) {
  removeActive();
  e.classList.add("activate");
}
function removeActive() {
  var active = document.getElementsByClassName("activate");
  for (var i = 0; i < active.length; i++) {
    active[i].classList.remove("activate");
  }
}
function finalResult(e) {
  var active = document.getElementsByClassName("activate");
  if (active[0].innerHTML == quiz.JS[e].answer) {
    score += 10;
  }
}
function result() {
  if (qId === quiz.JS.length) {
    qId--
    qId = 0;
    nextText.appendChild(sumbit);
    next.onclick=  ()=>{
      location.href = "../Result.html"
    }
  }
}
// Quiz Script
