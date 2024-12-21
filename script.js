const questions = [
  {
    text: "Выбери котика 🐾",
    options: ["cat.jpg", "dog.jpg", "cow.jpg", "lion.jpg"],
    correct: "cat.jpg",
  },
  {
    text: "Выбери Менди 🥋",
    options: ["mendi.jpg", "fighter1.jpg", "fighter2.jpg", "fighter3.jpg"],
    correct: "mendi.jpg",
  },
  {
    text: "Выбери Майота 🎤",
    options: ["mayot.jpg", "rapper1.jpg", "rapper2.jpg", "rapper3.jpg"],
    correct: "mayot.jpg",
  },
  {
    text: "Выбери волейбол 🏐",
    options: ["volleyball.jpg", "basketball.jpg", "football.jpg", "tennis.jpg"],
    correct: "volleyball.jpg",
  },
];

const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const finalMessage = document.getElementById("final-message");
const finalImages = document.getElementById("final-images");

let currentQuestion = 0;
let correctAnswers = [];

startButton.addEventListener("click", () => {
  startButton.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
});

function loadQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.text;

  optionsContainer.innerHTML = "";
  question.options.forEach((option) => {
    const img = document.createElement("img");
    img.src = option;
    img.alt = "Option";
    img.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(img);
  });

  feedback.classList.add("hidden");
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestion];

  if (selectedOption === question.correct) {
    feedback.textContent = "Правильно! 🎉";
    feedback.style.color = "green";
    correctAnswers.push(question.correct); // Сохраняем правильный ответ
    currentQuestion++;

    if (currentQuestion < questions.length) {
      setTimeout(() => {
        loadQuestion();
      }, 1000);
    } else {
      showFinalMessage();
    }
  } else {
    feedback.textContent = "Неправильно 😔 Попробуй ещё раз!";
    feedback.style.color = "red";
  }

  feedback.classList.remove("hidden");
}

function showFinalMessage() {
  quizContainer.classList.add("hidden");
  finalMessage.classList.remove("hidden");

  // Добавляем правильные картинки в финальное сообщение
  finalImages.innerHTML = "";
  correctAnswers.forEach((answer) => {
    const img = document.createElement("img");
    img.src = answer;
    img.alt = "Правильный ответ";
    finalImages.appendChild(img);
  });
}
