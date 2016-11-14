var cashRegister = (function () {

  function _validations(x){
    if (typeof x !== 'number'){
     throw new Error(`Invalid input type: ${x} is not a number`);
    }
  //return null;
  }

  function _clear(x){
    _total = 0;
  }

  function _getBalance(operation, x, y){
    if(operation === "+"){
      return x + y;
    }
  }

  function _depositCash(x){

  }

  function _withdrawCash(x){

  }

})();

document.getElementById("buttonSeven").addEventListener("click", seven);

function seven() {
 document.getElementById("display").innerHTML = "7";
}

document.getElementById("buttonEight").addEventListener("click", eight);

function eight() {
 document.getElementById("display").innerHTML = "8";
}

document.getElementById("buttonNine").addEventListener("click", nine);

function nine() {
 document.getElementById("display").innerHTML = "9";
}

document.getElementById("buttonDivide").addEventListener("click", divide);

function divide() {
 document.getElementById("display").innerHTML = "/";
}

document.getElementById("buttonClear").addEventListener("click", clear);

function clear() {
 document.getElementById("display").innerHTML = "0";
}

document.getElementById("buttonFour").addEventListener("click", four);

function four() {
 document.getElementById("display").innerHTML = "4";
}

document.getElementById("buttonFive").addEventListener("click", five);

function five() {
 document.getElementById("display").innerHTML = "5";
}

document.getElementById("buttonSix").addEventListener("click", six);

function six() {
 document.getElementById("display").innerHTML = "6";
}

document.getElementById("buttonMultiply").addEventListener("click", multiply);

function multiply() {
 document.getElementById("display").innerHTML = "*";
}

document.getElementById("buttonGetBalance").addEventListener("click", getBalance);

function getBalance() {
 document.getElementById("display").innerHTML = " ";
}