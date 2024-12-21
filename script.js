// Функция для создания снежинок
function createSnowflakes() {
  let snowflakesContainer = document.createElement("div");
  snowflakesContainer.classList.add('snowflakes');
  document.body.appendChild(snowflakesContainer);

  for (let i = 0; i < 50; i++) {
    let snowflake = document.createElement("span");
    snowflake.textContent = "❄️";  // Символ снежинки
    let size = Math.random() * 10 + 10;  // Размер снежинки
    let left = Math.random() * 100;  // Позиция по горизонтали
    let animationDelay = Math.random() * 5;  // Случайное время начала анимации

    snowflake.style.fontSize = `${size}px`;
    snowflake.style.left = `${left}%`;
    snowflake.style.animationDelay = `${animationDelay}s`;

    snowflakesContainer.appendChild(snowflake);
  }
}

createSnowflakes();  // Запускаем создание снежинок при загрузке страницы

// Логика для теста
let currentQuestion = 0;
const questions = [
  { question: "Выбери котика:", correctAnswer: "cat", options: ["cat", "dog", "cow", "lion"] },
  { question: "Выбери Менди:", correctAnswer: "mendi", options: ["mendi", "fighter1", "fighter2", "fighter3"] },
  { question: "Выбери Майота:", correctAnswer: "mayot", options: ["mayot", "rapper1", "rapper2", "rapper3"] },
  { question: "Выбери волейбол:", correctAnswer: "volleyball", options: ["volleyball", "basketball", "football", "tennis"] }
];
let correctAnswers = 0;

function loadQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('question-text').textContent = question.question;
  
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';  // очищаем контейнер перед загрузкой новых картинок

  question.options.forEach(option => {
    const img = document.createElement('img');
    img.src = `${option}.jpg`;
    img.alt = option;
    img.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(img);
  });
}

function checkAnswer(selected) {
  const correctAnswer = questions[currentQuestion].correctAnswer;
  
  if (selected === correctAnswer) {
    correctAnswers++;
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      // Показываем финальное сообщение с картинками
      document.getElementById('final-message').style.display = 'block';
      const finalImages = document.getElementById('final-images');
      finalImages.innerHTML = ''; 
