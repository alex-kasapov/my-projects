const answer = document.querySelectorAll(".answer");
const resultElement = document.querySelector(".result");

answer.forEach((answer, index) => {
    answer.addEventListener("click", () => {
        resetStyle();
        answer.style.backgroundColor = "#007bff";
        answer.style.color = "#fff";

let isCorrectByIndex;

if (index === 1) {
    isCorrectByIndex = true
} else {
    isCorrectByIndex = false
}



if (isCorrectByIndex) {
    resultElement.innerText = "Верно !!!"
} else {
    resultElement.innerText = "Неверно ((("
}
    });
});

function resetStyle() { 
    answer.forEach(answer => {
        answer.style.backgroundColor = "";
        answer.style.color = "";

    })
}


