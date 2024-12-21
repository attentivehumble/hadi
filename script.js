let currentQuestion = 0;
const questions = [
    {
        title: "Выбери котика 🐾",
        options: ["cat.jpg", "dog.jpg", "cow.jpg", "lion.jpg"],
        correctIndex: 0
    },
    {
        title: "Выбери Менди 🥊",
        options: ["fighter1.jpg", "mendi.jpg", "fighter2.jpg", "fighter3.jpg"],
        correctIndex: 1
    },
    {
        title: "Выбери Майота 🎵",
        options: ["rapper1.jpg", "rapper2.jpg", "mayot.jpg", "rapper3.jpg"],
        correctIndex: 2
    },
    {
        title: "Выбери волейбол 🏐",
        options: ["basketball.jpg", "football.jpg", "volleyball.jpg", "tennis.jpg"],
        correctIndex: 2
    }
];

function startTest() {
    document.getElementById('welcome').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').style.display = 'block';
    document.getElementById('question-title').innerText = question.title;
    const imgElements = document.querySelectorAll('.options img');
    question.options.forEach((src, index) => {
        imgElements[index].src = src;
        imgElements[index].onclick = () => checkAnswer(index === question.correctIndex);
    });
}

function checkAnswer(isCorrect) {
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.innerText = "Правильно! 🌟";
        feedback.style.color = "#00ff00";
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }, 1000);
    } else {
        feedback.innerText = "Упс, попробуй ещё раз! 😅";
        feedback.style.color = "#ff0000";
    }
}

function showResult() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
