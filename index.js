let result = undefined;
let clicks = 0;

let mathOperation = 0, numPressed = "", click = 0;

const output = document.getElementById("result");
const element = document.getElementById("alertMessage");
const alertMessage = window.getComputedStyle(element);


let num1 = null, num2 = null;

function ac() {

  output.innerHTML = "";

  num1 = null;
  num2 = null;
  numPressed = "";

  element.style.display = "none";

  click = 0;
}

function one() {

  if (click < 12) {
    output.innerHTML = numPressed;
    numPressed += "1";
  }

  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;

}

function two() {

  if (click < 12) {
    numPressed += "2";
    output.innerHTML = numPressed;
  }
  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}

function three() {


  if (click < 12) {
    numPressed += "3";
    output.innerHTML = numPressed;
  }
  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}

function four() {


  if (click < 12) {
    numPressed += "4";
    output.innerHTML = numPressed;
  }

  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}

function five() {

  if (click < 12) {
    numPressed += "5";
    output.innerHTML = numPressed;
  }
  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}

function six() {

  if (click < 12) {
    numPressed += "6";
    output.innerHTML = numPressed;
  }
  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}

function seven() {

  if (click < 12) {
    numPressed += "7";
    output.innerHTML = numPressed;
  }
  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}

function eigth() {

  if (click < 12) {
    numPressed += "8";
    output.innerHTML = numPressed;
  }
  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}

function nine() {

  if (click < 12) {
    numPressed += "9";
    output.innerHTML = numPressed;
  }
  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}

function zero() {

  if (click < 12) {
    numPressed += "0";
    output.innerHTML = numPressed;
  }
  else if (click >= 12 && alertMessage.display === "none")
    element.style.display = "block";

  click++;
}

function add() {

  num1 = parseInt(numPressed);
  let check = isNaN(num1);

  if (check != true && num1 != null) {

    num2 = num1;
    numPressed = "";
    mathOperation = 1;
    output.innerHTML = "+";
    element.style.display = "none";
    click = 0;
  }


}

function sustr() {

  num1 = parseInt(numPressed);
  let check = isNaN(num1);
  if (check != true && num1 != null) {

    num2 = num1;
    numPressed = "";
    mathOperation = 2;
    element.style.display = "none";
    output.innerHTML = "-";
    click = 0;
  }
}

function mult() {
  num1 = parseInt(numPressed);
  let check = isNaN(num1);
  if (check != true && num1 != null) {

    num2 = num1;
    numPressed = "";
    mathOperation = 3;
    element.style.display = "none";
    output.innerHTML = "x";
    click = 0;
  }
}

function divition() {
  num1 = parseInt(numPressed);
  let check = isNaN(num1);
  if (check != true && num1 != null) {

    num2 = num1;
    numPressed = "";
    mathOperation = 4;
    output.innerHTML = "÷";
    element.style.display = "none";
    click = 0;

  }
}



function amountDigits(result) {
  let resultString = result.toString();

  if (resultString.length > 13) {

    //Convert the result in exponential notation

    resultString = result.toExponential(5);
  }
  output.innerHTML = resultString;
}

function equal() {

  //Addition

  click = 0;

  if (mathOperation == 1) {

    num1 = parseInt(numPressed);
    if (num1 != -1 && num2 != null) {

      result = num1 + num2;
      amountDigits(result);

    }


  }

  //Substraction

  else if (mathOperation == 2) {
    num1 = parseInt(numPressed);
    if (num1 != null && num2 != null) {

      result = num2 - num1;
      amountDigits(result);

    }
  }

  //Multiplication

  else if (mathOperation == 3) {
    num1 = parseInt(numPressed);
    if (num1 != null && num2 != null) {

      result = num1 * num2;
      amountDigits(result);


    }
  }

  //Divition

  else if (mathOperation == 4) {

    num1 = parseInt(numPressed);

    if (num1 != 0 && (num1 != null && num2 != null)) {

      result = num2 / num1;
      amountDigits(result);


    } else if (num1 == 0) {

      result = "Divition by 0 not allowed";
      output.innerHTML = result;
      output.style.fontSize = "90%";

    }
  }


}