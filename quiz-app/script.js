const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "HighText Machine Language"
    ],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    correct: 2
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correct: 0
  }
];

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;

// Load question
function loadQuestion() {
  resetState();
  let q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  answerBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.onclick = () => selectAnswer(index);
  });
}

function resetState() {
  nextBtn.style.display = "none";
}

// Handle answer selection
function selectAnswer(index) {
  let q = quizData[currentQuestion];
  if (index === q.correct) {
    score++;
  }
  nextBtn.style.display = "block";
}

// Move to next question
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

// Show final score
function showScore() {
  quizContainer.innerHTML = `
    <h2>You scored ${score} out of ${quizData.length}</h2>
    <button onclick="location.reload()">Restart</button>
  `;
}

// Start quiz
loadQuestion();

