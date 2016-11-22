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
  var myJoin = myArray.join('')

  document.getElementById("buttonSeven").addEventListener("click", seven);
    function seven() {

      myArray.push('7');
      myJoin = myArray.join('');
      console.log('seven', myJoin);
      document.getElementById("display").innerHTML = myJoin;
    }

  document.getElementById("buttonEight").addEventListener("click", eight);
    function eight() {

      myArray.push('8');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;

    }

  document.getElementById("buttonNine").addEventListener("click", nine);
    function nine() {

      document.getElementById("display").innerHTML = "9";
      myArray.push('9');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;
    }

    document.getElementById("buttonDivide").addEventListener("click", divide);
    function divide() {

     document.getElementById("display").innerHTML = "/";
    }

  document.getElementById("buttonClear").addEventListener("click", clear);
    function clear() {
      myArray = [];
      myJoin = myArray;
      document.getElementById("display").innerHTML = '0';
    }

  document.getElementById("buttonFour").addEventListener("click", four);
    function four() {
      myArray.push('4');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;
    }

  document.getElementById("buttonFive").addEventListener("click", five);
    function five() {
      myArray.push('5');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;
    }

  document.getElementById("buttonSix").addEventListener("click", six);
    function six() {
      myArray.push('6');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;
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
      myArray.push('1');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;
    }

  document.getElementById('buttonTwo').addEventListener("click", two);
    function two() {
      myArray.push('2');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;
    }

  document.getElementById("buttonThree").addEventListener("click", three);
    function three() {
      myArray.push('3');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;
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
      myArray.push('0');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;
      }

  document.getElementById("buttonDoubleZero").addEventListener("click", doubleZero);
    function doubleZero() {
      myArray.push('00');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;

    }

  document.getElementById("buttonDecimal").addEventListener("click", decimal);
    function decimal() {
      myArray.push('.');
      myJoin = myArray.join('');
      document.getElementById("display").innerHTML = myJoin;
    }

  document.getElementById("buttonAdd").addEventListener("click", plus);
    function plus() {
      document.getElementById("display").innerHTML = "+";
    }

  document.getElementById("buttonWithdrawCash").addEventListener("click", withdraw);
    function withdraw() {
      document.getElementById("display").innerHTML = "Fix code";
    }





})();

