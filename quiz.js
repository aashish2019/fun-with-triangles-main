const quizForm = document.querySelector(".quiz-form");
const submitFormBtn = document.querySelector("#submit-form-btn");
const outputBox = document.querySelector("#output");
const correctAnswers = ["Equilateral" , "30" , "obtuse" , "18", "equilateral triangle"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    outputBox.innerText = "your score is " + score;
}
submitFormBtn.addEventListener("click", calculateScore);

