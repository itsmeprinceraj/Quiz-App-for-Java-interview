const questions = [
    {
        question: "What is the size of int in Java?",
        answers: [
            { text: "4 bytes", correct: true },
            { text: "2 bytes", correct: false },
            { text: "8 bytes", correct: false },
            { text: "1 byte", correct: false },
        ]
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "0", correct: false },
            { text: "null", correct: false },
        ]
    },
    {
        question: "Which company developed Java?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Apple", correct: false },
            { text: "Sun Microsystems", correct: true },
            { text: "Google", correct: false },
        ]
    },
    {
        question: "Which method is used to start a thread in Java?",
        answers: [
            { text: "start()", correct: true },
            { text: "run()", correct: false },
            { text: "init()", correct: false },
            { text: "main()", correct: false },
        ]
    },
    {
        question: "Which of the following is a reserved keyword in Java?",
        answers: [
            { text: "goto", correct: true },
            { text: "constant", correct: false },
            { text: "volatile", correct: true },
            { text: "instanceof", correct: true },
        ]
    },
    {
        question: "What is the parent class of all classes in Java?",
        answers: [
            { text: "Object", correct: true },
            { text: "Class", correct: false },
            { text: "System", correct: false },
            { text: "Runtime", correct: false },
        ]
    },
    {
        question: "Which package contains the Random class in Java?",
        answers: [
            { text: "java.util", correct: true },
            { text: "java.lang", correct: false },
            { text: "java.io", correct: false },
            { text: "java.net", correct: false },
        ]
    },
    {
        question: "What is the return type of the hashCode() method in Java?",
        answers: [
            { text: "int", correct: true },
            { text: "long", correct: false },
            { text: "float", correct: false },
            { text: "double", correct: false },
        ]
    },
    {
        question: "What is the keyword used to inherit a class in Java?",
        answers: [
            { text: "extend", correct: false },
            { text: "implements", correct: false },
            { text: "extends", correct: true },
            { text: "inherit", correct: false },
        ]
    },
    {
        question: "Which method is used to get the length of an array in Java?",
        answers: [
            { text: "length()", correct: false },
            { text: "size()", correct: false },
            { text: "getSize()", correct: false },
            { text: "length", correct: true },
        ]
    },
    {
        question: "Which interface is used to handle events in Java?",
        answers: [
            { text: "EventListener", correct: true },
            { text: "ActionListener", correct: false },
            { text: "Runnable", correct: false },
            { text: "Serializable", correct: false },
        ]
    },
    {
        question: "Which of the following is not a feature of Java?",
        answers: [
            { text: "Object-oriented", correct: false },
            { text: "Platform-independent", correct: false },
            { text: "Use of pointers", correct: true },
            { text: "Automatic garbage collection", correct: false },
        ]
    },
    {
        question: "What is the use of the 'final' keyword in Java?",
        answers: [
            { text: "To mark a variable as constant", correct: true },
            { text: "To prevent method overriding", correct: true },
            { text: "To prevent inheritance", correct: true },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "Which method is used to convert a string to a double in Java?",
        answers: [
            { text: "Double.valueOf()", correct: false },
            { text: "Double.parseDouble()", correct: true },
            { text: "Double.toDouble()", correct: false },
            { text: "Double.convert()", correct: false },
        ]
    },
    {
        question: "Which of these is not a primitive data type in Java?",
        answers: [
            { text: "int", correct: false },
            { text: "boolean", correct: false },
            { text: "String", correct: true },
            { text: "char", correct: false },
        ]
    },
    {
        question: "Which of these are valid statements in Java?",
        answers: [
            { text: "int x = 10;", correct: true },
            { text: "String y = 'hello';", correct: false },
            { text: "boolean z = 0;", correct: false },
            { text: "double a = 1.0;", correct: true },
        ]
    },
    {
        question: "Which of these are not valid access modifiers in Java?",
        answers: [
            { text: "public", correct: false },
            { text: "protected", correct: false },
            { text: "private", correct: false },
            { text: "default", correct: true },
        ]
    },
    {
        question: "Which method is called to create a new instance of a class in Java?",
        answers: [
            { text: "new()", correct: false },
            { text: "create()", correct: false },
            { text: "newInstance()", correct: true },
            { text: "instantiate()", correct: false },
        ]
    },
    {
        question: "Which keyword is used to create an instance of an object in Java?",
        answers: [
            { text: "new", correct: true },
            { text: "create", correct: false },
            { text: "instance", correct: false },
            { text: "object", correct: false },
        ]
    },
    {
        question: "Which method is used to compare two strings in Java?",
        answers: [
            { text: "equals()", correct: true },
            { text: "compareTo()", correct: true },
            { text: "==", correct: false },
            { text: "equalsIgnoreCase()", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-Buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleQuestions();
    showQuestion();
}

function shuffleQuestions() {
    selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 20);
}

function showQuestion() {
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${selectedQuestions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < selectedQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
