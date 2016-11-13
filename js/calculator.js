var calculator = (function () {
  let _cache = 0;
  let _total = 0;

  function _load(x) {
    _total = x;
    return _total;
  }

  function _getTotal(x) {
    return _total;
  }

  function _add(x) {
    _total += x;
  }

  function _subtract(x) {
    _total -= x;
  }

  function _multiply(x) {
    _total *= x;
  }

  function _divide(x) {
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
    return _cache
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