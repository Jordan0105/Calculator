let mathOperation = 0, numPressed = "", click = 0;

const output = document.getElementById("result");
const element = document.getElementById("alertMessage");
const alertMessage = window.getComputedStyle(element);

const numberButtons = document.getElementsByClassName("numberButtons");
const operators = document.getElementsByClassName("operators");

let option = undefined;
let savedValue = null;
let num1 = null, num2 = null;

//All clear function

function ac() {

  output.innerHTML = "";
  num1 = null;
  num2 = null;
  savedValue = null;
  numPressed = "";
  option = 0;

  element.style.display = "none";

  click = 0;
}


// If the number of digits exceeds the output

function amountDigits(result) {

  let resultString = result.toString();

  if (resultString.length > 15 && mathOperation == 4) {

    resultString = resultString.slice(0, 15);

  }
  else if (resultString.length > 15 && !(mathOperation == 4)) {
    resultString = result.toExponential(9);
  }

  savedValue = result;
  output.innerHTML = resultString;
}

//Equal Button Function

const equalResult = () => {

  element.style.display = "none";
  click = 0;

  switch (mathOperation) {
    case 1:
      num1 = parseInt(numPressed);
      if (isNaN(num1) === true || isNaN(num2) === true) {
        result = "Syntax Error";
        output.innerHTML = result;
      }
      else {
        result = num1 + num2;
        amountDigits(result);
      }
      break;

    case 2:
      num1 = parseInt(numPressed);
      if (isNaN(num1) === true || isNaN(num2) === true) {
        result = "Syntax Error";
        output.innerHTML = result;
      }

      else {
        result = num2 - num1;
        amountDigits(result);
      }
      break;

    case 3:
      num1 = parseInt(numPressed);
      if (isNaN(num1) === true || isNaN(num2) === true) {
        result = "Syntax Error";
        output.innerHTML = result;
      }
      else {

        result = num2 * num1;
        amountDigits(result);
      }
      break;

    case 4:
      num1 = parseInt(numPressed);

      if (isNaN(num1) === true || isNaN(num2) === true) {
        result = "Syntax Error";
        output.innerHTML = result;
      }
      else if (num1 === 0) {
        result = "Divition by 0 not allowed";
        output.innerHTML = result;
      }
      else {
        result = num2 / num1;
        amountDigits(result);
      }
      break;

    default:
      return;
  }

}

const numberPressed = iterator => {

  if (click === 0 && option === "=") {
    ac();
  }

  option = (iterator.innerHTML).trim();
  switch (option) {
    case '0':
      clickedButtons('0');
      break;
    case '1':
      clickedButtons('1');
      break;
    case '2':
      clickedButtons('2');
      break;
    case '3':
      clickedButtons('3');
      break;
    case '4':
      clickedButtons('4');
      break;
    case '5':
      clickedButtons('5');
      break;
    case '6':
      clickedButtons('6');
      break;
    case '7':
      clickedButtons('7');
      break;
    case '8':
      clickedButtons('8');
      break;
    case '9':
      clickedButtons('9');
      break;
    default:
      return;
  }
}

// This function does the different mathematical operations.

const toDoOperation = (numMathOp, sign) => {

  if (savedValue === null) {

    num1 = parseInt(numPressed);

    if (num1 != null) {

      num2 = num1;
      mathOperation = numMathOp;
      numPressed = "";
      output.innerHTML = sign;
      element.style.display = "none";
      click = 0;
    }
  }
  else {
    num2 = savedValue;
    mathOperation = numMathOp;
    numPressed = "";
    output.innerHTML = sign;
    element.style.display = "none";
    click = 0;
  }
}

const operatorPressed = iterator => {
  option = (iterator.innerHTML).trim();

  switch (option) {

    case '+':
      toDoOperation(1, option);
      break;

    //TODO: If output.innerHTML == "" then - is part of the number

    case '-':

      toDoOperation(2, option);
      break;

    case '×':

      toDoOperation(3, option)
      break;


    case '÷':
      toDoOperation(4, option);
      break;

    case '=':
      equalResult();
      break;

    case 'AC':
      ac();
      break;

  }
}

//This function detects if the user has exceeded 
//the total number of digits per operation

const clickedButtons = num => {


  if (click < 12) {
    numPressed += num;
    output.innerHTML = numPressed;
  }
  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}


//Button Event Listeners
for (const iterator of numberButtons) {
  iterator.addEventListener("click", () => {
    numberPressed(iterator)
  });
}

for (const iterator of operators) {
  iterator.addEventListener("click", () => {
    operatorPressed(iterator)
  });
}