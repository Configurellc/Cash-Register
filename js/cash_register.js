var cashRegister = (function () {

  function _validations(x){
    if (typeof x !== 'number'){
     throw new Error(`Invalid input type: ${x} is not a number`);
    }
  //return null;
  }

  document.getElementById("buttonSeven").addEventListener("click", seven());

  function seven(){
    console.log("7.00");
  }

  function _clear(x){
    _total = 0.00;
  }

  function _getBalance(x){

  }

  function _depositCash(x){

  }

  function _withdrawCash(x){

  }

})();

document.getElementById('buttonSeven').addEventListener('click', seven);

function seven() {
  console.log('7.00');
}

