const form = document.forms.quiz;
let answerField = form.answerField;
let questionTwoChoiceOne = document.getElementById("question-2-choice-1");
let questionTwoChoiceTwo = document.getElementById("question-2-choice-2");
let questionTwoChoiceThree = document.getElementById("question-2-choice-3");
let questionThreeChoiceOne = document.getElementById("question-3-choice-1");
let questionThreeChoiceTwo = document.getElementById("question-3-choice-2");
let questionThreeChoiceThree = document.getElementById("question-3-choice-3");
let questionThreeChoiceFour = document.getElementById("question-3-choice-4");
let correctAnswer1 = document.getElementById("result-question-1");
let correctAnswer2 = document.getElementById("result-question-2");
let correctAnswer3 = document.getElementById("result-question-3");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkQuestion1();
    checkQuestion2();
    checkQuestion3();
});

form.addEventListener('reset', (event) => {
    event.preventDefault();

    answerField.value = "";
    questionTwoChoiceOne.checked = false;
    questionTwoChoiceTwo.checked = false;
    questionTwoChoiceThree.checked = false;
    questionThreeChoiceOne.checked = false;
    questionThreeChoiceTwo.checked = false;
    questionThreeChoiceThree.checked = false;
    questionThreeChoiceFour.checked = false;
    correctAnswer1.innerText = "";
    correctAnswer2.innerText = "";
    correctAnswer3.innerText = "";
});

function checkQuestion1() {
    if (answerField.value == "Manila") {
        correctAnswer1.style.display = "block"
        correctAnswer1.innerHTML = "Question 1 answer is correct!"
        correctAnswer1.classList.remove("invalid");
        correctAnswer1.classList.add("valid");
    } else {
        correctAnswer1.style.display = "block"
        correctAnswer1.innerHTML = "Question 1 answer is incorrect!"
        correctAnswer1.classList.remove("valid");
        correctAnswer1.classList.add("invalid");
    }

};

function checkQuestion2() {
    if 
    (
        questionTwoChoiceTwo.checked == true
    ) {
        correctAnswer1.style.display = "block"
        correctAnswer2.innerHTML = "Question 2 answer is correct!"
        correctAnswer2.classList.remove("invalid");
        correctAnswer2.classList.add("valid");
    } else {
        correctAnswer2.style.display = "block"
        correctAnswer2.innerHTML = "Question 2 answer is incorrect!"
        correctAnswer2.classList.remove("valid");
        correctAnswer2.classList.add("invalid");
    }
};

function checkQuestion3() {
    if (
        questionThreeChoiceOne.checked == true &&
        questionThreeChoiceTwo.checked == true &&
        questionThreeChoiceFour.checked == true
        ) {
            correctAnswer3.style.display = "block"
            correctAnswer3.innerHTML = "Question 3 answer is correct!"
            correctAnswer3.classList.remove("invalid");
            correctAnswer3.classList.add("valid");
        } else {
            correctAnswer3.style.display = "block"
            correctAnswer3.innerHTML = "Question 3 answer is incorrect!"
            correctAnswer3.classList.remove("valid");
            correctAnswer3.classList.add("invalid");
        }
};
