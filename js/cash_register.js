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

var myButtons = (function() {
  var myArray = [];

  document.getElementById("buttonSeven").addEventListener("click", seven);
    function seven() {
     document.getElementById("display").innerHTML = "7";
     // var myArray = [];
      myArray.push('7');
      console.log('seven', myArray);

    }

  document.getElementById("buttonEight").addEventListener("click", eight);
    function eight() {
     document.getElementById("display").innerHTML = "8";
     myArray.push('8');
    }

  document.getElementById("buttonNine").addEventListener("click", nine);
    function nine() {
     document.getElementById("display").innerHTML = "9";
      myArray.push('9');
    }

  document.getElementById("buttonDivide").addEventListener("click", divide);
    function divide() {
     document.getElementById("display").innerHTML = "/";
    }

  document.getElementById("buttonClear").addEventListener("click", clear);
    function clear() {
     document.getElementById("display").innerHTML = "0";
      myArray.push('0');
    }

  document.getElementById("buttonFour").addEventListener("click", four);
    function four() {
     document.getElementById("display").innerHTML = "4";
      myArray.push('4');
    }

  document.getElementById("buttonFive").addEventListener("click", five);
    function five() {
     document.getElementById("display").innerHTML = "5";
      myArray.push('5');
    }

  document.getElementById("buttonSix").addEventListener("click", six);
    function six() {
     document.getElementById("display").innerHTML = "6";
      myArray.push('6');
    }

  document.getElementById("buttonMultiply").addEventListener("click", multiply);
    function multiply() {
     document.getElementById("display").innerHTML = "*";
    }

  document.getElementById("buttonGetBalance").addEventListener("click", getBalance);
    function getBalance() {
     document.getElementById("display").innerHTML = " ";
    }

  document.getElementById('buttonOne').addEventListener("click", one);
    function one() {
      document.getElementById("display").innerHTML = "1";
       myArray.push('1');
    }

  document.getElementById('buttonTwo').addEventListener("click", two);
    function two() {
      document.getElementById("display").innerHTML = "2";
       myArray.push('2');
    }

  document.getElementById("buttonThree").addEventListener("click", three);
    function three() {
      document.getElementById("display").innerHTML = "3";
       myArray.push('3');
    }

  document.getElementById("buttonSubtract").addEventListener("click", subtract);
    function subtract() {
      document.getElementById("display").innerHTML = " correct code";
    }

  document.getElementById("buttonDepositCash").addEventListener("click", deposit);
    function deposit() {
      document.getElementById("display").innerHTML = "Correct code";
    }

  document.getElementById("buttonZero").addEventListener("click", zero);
    function zero() {
      document.getElementById("display").innerHTML = "0";
       myArray.push('0');
      }

  document.getElementById("buttonDoubleZero").addEventListener("click", doubleZero);
    function doubleZero() {
      document.getElementById("display").innerHTML = "00";
       myArray.push('00');
       console.log('second', myArray);
    }

  document.getElementById("buttonDecimal").addEventListener("click", decimal);
    function decimal() {
      document.getElementById("display").innerHTML = ".";
    }

  document.getElementById("buttonAdd").addEventListener("click", plus);
    function plus() {
      document.getElementById("display").innerHTML = "+";
    }

  document.getElementById("buttonWithdrawCash").addEventListener("click", withdraw);
    function withdraw() {
      document.getElementById("display").innerHTML = "Fix code";
    }
    document.getElementById('display').addEventListener('click', displayConcat);
     function displayConcat() {
       var mycon = myArray.join('');
       document.getElementById('display').innerHTML = mycon;
       console.log("three", mycon);
      }





})();

