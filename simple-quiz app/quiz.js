const questions = [
    {
        question: "which is the largest animal in the world?",
        answers: [
            {text:"Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false},

        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Zinc", correct: false }
        ]
    },
    {
        question: "What is the largest continent on Earth?",
        answers: [
            { text: "Africa", correct: false },
            { text: "North America", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false }
        ]
    },
    {
        question: "How many legs does a spider have?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            {text:"Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text:"Paris", correct: true},
            {text:"Rome", correct: false},

        ]
    },
    {
        question: "Which language is used to style web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water at sea level?",
        answers: [
            { text: "100°C", correct: true },
            { text: "90°C", correct: false },
            { text: "80°C", correct: false },
            { text: "120°C", correct: false }
        ]
    },
    {
        question: "In which year did the first man land on the moon?",
        answers: [
            { text: "1965", correct: false },
            { text: "1969", correct: true },
            { text: "1971", correct: false },
            { text: "1959", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text:"Earth", correct: false},
            {text: "Mars", correct: true},
            {text:"Jupiter", correct: false},
            {text:"Saturn", correct: false},

        ]
    },
]
   
    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");


    let currentQuestionIndex = 0;
    let score = 0;


    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = `${questionNo} ${currentQuestion.question}`;
    

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            button.addEventListener("click", () => selectAnswer(button,answer));
            answerButton.appendChild(button);
        } );

    }
    function resetState() {
        nextButton.style.display = "none";
        answerButton.innerHTML = "";
    }
    function selectAnswer(selectedBtn, answer) {
        const isCorrect = answer.correct;
    
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButton.children).forEach(button => {
            button.disabled = true;
            const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.correct).text;
            if (button.innerHTML === correctAnswer) {
                button.classList.add("correct");
            }
        });
        nextButton.style.display = "block";
    }
    
    function showScore() {
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    nextButton.addEventListener("click", () => {
        if (nextButton.innerHTML === "Play Again") {
            startQuiz();
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showScore();
            }
        }
    });
    
    
    startQuiz();

