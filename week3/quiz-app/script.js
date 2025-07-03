
const questionEl= document.getElementById("question");
const a_text= document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text= document.getElementById("d_text");
const form= document.getElementById("quizform");
const resultEl = document.getElementById("result");

let currentQuiz=0;
let score = 0;

loadQuiz();
function loadQuiz(){
    deselectAnswers();
     const currentData = quizData[currentQuiz];
  questionEl.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
}

function getSelected(){
    const answers = document.getElementsByName("answer");
    let selectedAnswer;
    answers.forEach(answer =>{
              if (answer.checked) selectedAnswer = answer.value;
    })
      return selectedAnswer;
}
function deselectAnswers() {
  document.querySelectorAll('input[name="answer"]').forEach(el => el.checked = false);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      form.style.display = "none";
      questionEl.innerText = "You answered " + score + " out of " + quizData.length + " correctly.";
    }
  }
});