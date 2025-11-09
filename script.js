// Question data
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Madrid", "Rome"],
    answer: 0
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Syntax"
    ],
    answer: 2
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    answer: 1
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "2001", "1989", "1999"],
    answer: 0
  }
];

let current = 0;
let selected = null;

const quizDiv = document.getElementById('quiz');
const resultDiv = document.getElementById('result');
const nextBtn = document.getElementById('nextBtn');

function showQuestion() {
  const q = quizQuestions[current];
  quizDiv.innerHTML = `
    <div class="question">${q.question}</div>
    <form id="optionsForm" class="options">
      ${q.options.map((opt, i) => `
        <label class="option">
          <input type="radio" name="option" value="${i}">
          ${opt}
        </label>
      `).join('')}
      <button id="submitBtn">Submit Answer</button>
    </form>
  `;
  resultDiv.textContent = '';
  nextBtn.style.display = 'none';

  document.getElementById('optionsForm').onsubmit = function(e) {
    e.preventDefault();
    const radios = document.querySelectorAll('input[name="option"]');
    let picked = null;
    radios.forEach(radio => {
      if (radio.checked) picked = parseInt(radio.value);
    });

    if (picked === null) {
      resultDiv.textContent = "Please select an option.";
      resultDiv.style.color = "#c0392b";
      return;
    }

    selected = picked;
    if (selected === q.answer) {
      resultDiv.textContent = "Correct!";
      resultDiv.style.color = "#43a047";
    } else {
      resultDiv.textContent = `Wrong! Correct answer: ${q.options[q.answer]}`;
      resultDiv.style.color = "#c0392b";
    }
    // Disable options
    radios.forEach(radio => radio.disabled = true);
    document.getElementById('submitBtn').disabled = true;
    nextBtn.style.display = current < quizQuestions.length - 1 ? 'block' : 'none';
    if (current === quizQuestions.length - 1) {
      nextBtn.textContent = "Restart Quiz";
    }
  };
}

nextBtn.onclick = function() {
  if (current < quizQuestions.length - 1) {
    current++;
    showQuestion();
  } else {
    current = 0;
    showQuestion();
  }
};

showQuestion();