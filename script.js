function getNumber(num) {
  var input_int = document.getElementById("input");
  switch (num) {
    case 1:
      input_int.value += "1";
      break;
    case 2:
      input_int.value += "2";
      break;
    case 3:
      input_int.value += "3";
      break;
    case 4:
      input_int.value += "4";
      break;
    case 5:
      input_int.value += "5";
      break;
    case 6:
      input_int.value += "6";
      break;
    case 7:
      input_int.value += "7";
      break;
    case 8:
      input_int.value += "8";
      break;
    case 9:
      input_int.value += "9";
      break;
    case 0:
      input_int.value += "0";
      break;
    default:
      break;
  }
}

function getOperand(operand) {
  var input_int = document.getElementById("input");
  switch (operand) {
    case "+":
      input_int.value += "+";
      break;
    case "-":
      input_int.value += "-";
      break;
    case "*":
      input_int.value += "*";
      break;
    case "/":
      input_int.value += "/";
      break;
    case "%":
      input_int.value += "%";
      break;
  }
}

function calculate() {
  var input_int = document.getElementById("input");
  result = Math.floor(+eval(input_int.value));
  document.getElementById("answer").value = +result;
}

function clearScreen() {
  document.getElementById("input").value = "";
  document.getElementById("answer").value = "";
}
