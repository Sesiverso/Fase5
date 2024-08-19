const questions = [
    {
        question: "Qual é o principal bioma da Mata Atlântica?",
        options: [
            "Floresta Tropical",
            "Cerrado",
            "Pampas",
            "Caatinga"
        ],
        answer: "Floresta Tropical"
    },
    {
        question: "Qual animal é típico da Mata Atlântica?",
        options: [
            "Jaguatirica",
            "Leão",
            "Elefante",
            "Camelo"
        ],
        answer: "Jaguatirica"
    },
    {
        question: "Qual é uma das principais ameaças à Mata Atlântica?",
        options: [
            "Desmatamento",
            "Vulcões",
            "Seca",
            "Terremotos"
        ],
        answer: "Desmatamento"
    },
    {
        question: "Qual planta é endêmica da Mata Atlântica?",
        options: [
            "Jequitibá",
            "Cactos",
            "Eucalipto",
            "Pau-brasil"
        ],
        answer: "Jequitibá"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
        showFeedback(true);
    } else {
        showFeedback(false);
    }
}

function showFeedback(isCorrect) {
    const feedback = document.createElement('div');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedback.innerText = isCorrect ? 'Correto!' : 'Incorreto! A resposta correta é ' + questions[currentQuestionIndex].answer;
    optionsContainer.appendChild(feedback);
    nextButton.style.display = 'block';
}

function showResult() {
    questionContainer.innerHTML = '';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
    resultContainer.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`;
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
});

showQuestion();
