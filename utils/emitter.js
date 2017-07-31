var SYS = (function () {
  var observerList = [];

  function subscribe(listener) {
    observerList.push(listener);
    return function unSubscribe() {
      if (observerList.length === 0) return;
      var index = observerList.indexOf(listener);
      observerList.splice(index, 1);
    }
  }

  function publish() {
    observerList.forEach(f => {
      if (typeof f === 'function') f();
    })
  }
  return {
    subscribe,
    publish
  };
})();

module.exports = SYS;