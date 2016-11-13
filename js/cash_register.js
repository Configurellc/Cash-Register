var cashRegister = (function () {

  function _validations(x){
    if (typeof x !== 'number'){
     throw new Error(`Invalid input type: ${x} is not a Number`);
    }
  //return null;
  }

  function _clear(x){
    _total = 0;
  }











})();

document.getElementById('buttonSeven').addEventListener('click', seven)

function seven() {
  console.log('7.00');
}

