let result = undefined;
let op = 0;
let id = document.getElementById("result");
let x = "";
let num1 = -1,
  num2 = -1;

function ac() {
  id.innerHTML = "";
  num1 = -1;
  num2 = -1;
  x = "";
}

function one() {
  x += "1";
  id.innerHTML = x;
}

function two() {
  x += "2";
  id.innerHTML = x;
}

function three() {
  x += "3";
  id.innerHTML = x;
}

function four() {
  x += "4";
  id.innerHTML = x;
}

function five() {
  x += "5";
  id.innerHTML = x;
}

function six() {
  x += "6";
  id.innerHTML = x;
}

function seven() {
  x += "7";
  id.innerHTML = x;
}

function eigth() {
  x += "8";
  id.innerHTML = x;
}

function nine() {
  x += "9";
  id.innerHTML = x;
}

function zero() {
  x += "0";
  id.innerHTML = x;
}

function add() {

  num1 = parseInt(x);
  let check = isNaN(num1);

  if (check != true && num1 != -1) {

    num2 = num1;
    x = "";
    op = 1;
    id.innerHTML = "+";
  }


}

function sustr() {

  num1 = parseInt(x);
  let check = isNaN(num1);
  if (check != true && num1 != -1) {

    num2 = num1;
    x = "";
    op = 2;
    id.innerHTML = "-";
  }
}

function mult() {
  num1 = parseInt(x);
  let check = isNaN(num1);
  if (check != true && num1 != -1) {

    num2 = num1;
    x = "";
    op = 3;
    id.innerHTML = "x";
  }
}

function divition() {
  num1 = parseInt(x);
  let check = isNaN(num1);
  if (check != true && num1 != -1) {

    num2 = num1;
    x = "";
    op = 4;
    id.innerHTML = "÷";

  }
}


function equal() {

  if (op == 1) {

    num1 = parseInt(x);
    if (num1 != -1 && num2 != -1) {

      result = num1 + num2;
      id.innerHTML = result;

    }
  } else if (op == 2) {
    num1 = parseInt(x);
    if (num1 != -1 && num2 != -1) {

      result = num2 - num1;
      id.innerHTML = result;

    }
  } else if (op == 3) {
    num1 = parseInt(x);
    if (num1 != -1 && num2 != -1) {

      result = num1 * num2;
      id.innerHTML = result;
     
    }
  } else if (op == 4) {

    num1 = parseInt(x);

    if (num1 != 0 && num1 != -1 && num2 != -1) {

      
      result = num2 / num1;
      let digits = result.toString();

      if(digits.length >= 14){
        let nDigits = result.toFixed(14);
        id.innerHTML = nDigits + "e";
      }
      else{
        id.innerHTML = digits;
      }

    } else if (num1 == 0) {

      result = "Divition by 0 not allowed";
      id.style.fontSize = "15px";
      id.style.fontWeight = "bold";
      id.innerHTML = result;

    }
  }


}