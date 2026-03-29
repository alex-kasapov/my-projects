
let firstNumber = "";
let secondNumber = "";
let waitingForSecondNumber = false;
let currentOperator = "";


const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalOperator = document.getElementById("equal");
const clearButton = document.querySelector(".clear");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

function appendNumber(number) {
  if (waitingForSecondNumber) {
    display.value = number;
    waitingForSecondNumber = false;
    secondNumber = number;
  } else {
    display.value += number;
    secondNumber += number;
  }


  console.log(secondNumber);
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    waitingForSecondNumber = true;
    setOperator(operator.innerText);
  });
});

function setOperator(operator) {
  if (firstNumber === "") firstNumber = display.value;
  currentOperator = operator;
}

equalOperator.addEventListener("click", () => {
  if (secondNumber && currentOperator) {
    calculate()
  }
});

function calculate() {
  let result;
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if(num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Ошибка: на ноль делить нельзя";
      }
      break;
  }
  display.value = result;
  firstNumber = result.toString();
  secondNumber = "";
  currentOperator = ""
}

clearButton.addEventListener("click", () => {
  clearDisplay();
});

function clearDisplay() {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  waitingForSecondNumber = false;
}