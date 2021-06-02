let currentResult = 0;
let logEntries = [];
function writeLog(operator, previousValue, inputValue, newValue) {
  const newEntry = {
    operation: operator,
    previousResult: previousValue,
    enteredNumber: inputValue,
    result: newValue,
  };
  logEntries.push(newEntry);
  console.log(logEntries);
}

function add() {
  const inputNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  const description = `${initialResult} + ${inputNumber}`;
  currentResult = currentResult + inputNumber;
  outputResult(currentResult, description);
  writeLog("ADD", initialResult, inputNumber, currentResult);
}

function subtract() {
  const inputNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  const description = `${initialResult} - ${inputNumber}`;
  currentResult = currentResult - inputNumber;
  outputResult(currentResult, description);
  writeLog("SUBTRACT", initialResult, inputNumber, currentResult);
}

function multiply() {
  const inputNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  const description = `${initialResult} * ${inputNumber}`;
  currentResult = currentResult * inputNumber;
  outputResult(currentResult, description);
  writeLog("MULTIPY", initialResult, inputNumber, currentResult);
}

function divide() {
  const inputNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  const description = `${initialResult} / ${inputNumber}`;
  currentResult = currentResult / inputNumber;
  outputResult(currentResult, description);
  writeLog("DIVIDE", initialResult, inputNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
