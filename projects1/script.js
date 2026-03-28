const answer = document.querySelectorAll(".answer");
const resultElement = document.querySelector(".result");
let selectedAnswer = null;

answer.forEach((answer) => {
    answer.addEventListener("click", () => {
        if (selectedAnswer) {
            selectedAnswer.style.backgroundColor = "#f0f0f0";
            selectedAnswer.style.color = "#000"
        }
        answer.style.backgroundColor = "#007bff";
        answer.style.color = "#fff";

        if (answer.innerText === '"12"') {
            resultElement.innerText = "Верно !!!"
        } else {
            resultElement.innerText = "Неверно ((("
        }
        selectedAnswer = answer;
    });
});




