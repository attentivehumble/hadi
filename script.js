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
let correctAnswers = 0;
const correctAnswersCount = 4;

function checkAnswer(selected) {
  const answers = {
    'cat': 'cat',
    'mendi': 'mendi',
    'mayot': 'mayot',
    'volleyball': 'volleyball'
  };

  if (selected === answers[Object.keys(answers)[correctAnswers]]) {
    correctAnswers++;
    if (correctAnswers === correctAnswersCount) {
      document.getElementById('final-message').style.display = 'block';
      document.getElementById('final-images').style.display = 'flex';
    }
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
}

