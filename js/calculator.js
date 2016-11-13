var calculator = (function () {
  let _cache = 0.00;
  let _total = 0.00;

  function _validations(x){
    if (typeof x !== 'number'){
     throw new Error(`Invalid input type: ${x} is not a number`);
    }
  //return null;
  }

  function _load(x) {
    _validations(x);
    _total = x;
    return _total;
  }

  function _getTotal(x) {
    return _total;
  }

  function _add(x) {
    _validations(x);
    _total += x;
  }

  function _subtract(x) {
    _validations(x);
    _total -= x;
  }

  function _multiply(x) {
    _validations(x);
    _total *= x;
  }

  function _divide(x) {
    _validations(x);
    _total /= x;
  }

  function _recallCache(x) {
    return _cache;
  }

  function _saveCache(x) {
    _cache = _total;
  }

  function _clearCache(x) {
    _cache = 0;
    return _cache;
  }

return {
  load: _load,
  getTotal: _getTotal,
  add: _add,
  subtract: _subtract,
  multiply: _multiply,
  divide: _divide,
  recallCache: _recallCache,
  saveCache: _saveCache,
  clearCache: _clearCache
};

})();