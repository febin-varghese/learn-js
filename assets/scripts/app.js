let currentResult = 0;

function add(){
    const inputNumber = parseInt(userInput.value);
    const description = `${currentResult} + ${inputNumber}`;
    currentResult = currentResult + inputNumber;
    outputResult(currentResult, description);
}

function subtract(){
    const inputNumber = parseInt(userInput.value);
    const description = `${currentResult} - ${inputNumber}`;
    currentResult = currentResult - inputNumber;
    outputResult(currentResult, description);
}

function multiply(){
    const inputNumber = parseInt(userInput.value);
    const description = `${currentResult} * ${inputNumber}`;
    currentResult = currentResult * inputNumber;
    outputResult(currentResult, description);
}

function divide(){
    const inputNumber = parseInt(userInput.value);
    const description = `${currentResult} / ${inputNumber}`;
    currentResult = currentResult / inputNumber;
    outputResult(currentResult, description);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
