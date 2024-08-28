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
    },
    {
        question: "Em qual região a Mata Atlântica predomina?",
        options: [
            "Litoral",
            "Interior",
            "Centro-oeste",
            "Noroeste"
        ],
        answer: "Litoral"
    },
    {
        question: "Qual o principal clima da Mata Atlântica?",
        options: [
            "Tropical úmido",
            "Temperado",
            "Semiárido",
            "Equatorial"
        ],
        answer: "Tropical úmido"
    },
    {
        question: "Qual a árvore símbolo da Mata Atlântica?",
        options: [
            "Pau-Brasil",
            "Jequitibá",
            "Castanheira",
            "Ipê"
        ],
        answer: "Pau-Brasil"
    },
    {
        question: "Qual o animal símbolo da Mata Atlântica?",
        options: [
            "Mico-leão-dourado",
            "Onça-pintada",
            "Arara-azul",
            "Tamanduá-bandeira"
        ],
        answer: "Mico-leão-dourado"
    },
    {
        question: "O que contribuiu para a extinção da biodiversidade da Mata Atlântica?",
        options: [
            "Tráfico ilegal e desmatamento",
            "Erosão",
            "Invasão de espécies exóticas",
            "Mudanças climáticas"
        ],
        answer: "Tráfico ilegal e desmatamento"
    },
    {
        question: "Qual a área que a Mata Atlântica ocupa?",
        options: [
            "7% do território brasileiro",
            "10% do território brasileiro",
            "15% do território brasileiro",
            "5% do território brasileiro"
        ],
        answer: "7% do território brasileiro"
    },
    {
        question: "Quantas pessoas vivem na Mata Atlântica?",
        options: [
            "140 milhões",
            "100 milhões",
            "200 milhões",
            "50 milhões"
        ],
        answer: "140 milhões"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    optionsContainer.innerHTML = '';

    // Embaralha as opções antes de exibi-las
    const shuffledOptions = shuffleArray([...currentQuestion.options]);

    shuffledOptions.forEach(option => {
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
