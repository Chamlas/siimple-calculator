const display = document.getElementById("display");

let firstNumber = null;
let operator = null;
let waitForSecondNumber = false;

//function to show number on a display
function appendNumber(number) {
  if (waitForSecondNumber) {
    display.value = number;
    waitForSecondNumber = false;
  } else {
    display.value = display.value === "0" ? number : display.value + number;
  }
}

//function for operator
function appendOperator(selectedOperator) {
  if (display.value === "") return;

  if (operator !== null && !waitForSecondNumber) {
    calculalte();
  }

  firstNumber = Number(display.value);
  operator = selectedOperator;
  waitForSecondNumber = true;
}

//function to calculate
function calculate() {
  if (firstNumber === null || operator === null || waitForSecondNumber) {
    return;
  }

  const secondNumber = Number(display.value);
  let result;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === "0") {
        display.value = "Error";
        firstNumber = null;
        operator = null;
        waitForSecondNumber = true;
        return;
      }
      result = firstNumber / secondNumber;
  }

  display.value = result;
  firstNumber = result;
  operator = null;
  waitForSecondNumber = true;
}

//function to clear calculator
function clearDisplay() {
  display.value = "";
  firstNumber = null;
  operator = null;
  waitForSecondNumber = false;
}

//function to delete Last digit
function deleteLast() {
  if (waitForSecondNumber) return;
  display.value = display.value.slice(0, -1);
}

//function to append decimal
function appendDecimal() {
  if (waitForSecondNumber) {
    display.value = "0.";
    waitForSecondNumber = false;
    return;
  }

  if (!display.value.includes(".")) {
    display.value = display.value === "" ? "0." : display.value + ".";
  }
}
