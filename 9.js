const increment = (function() {
  "use strict";
  return function increment(numbe, value = 1) {
    return numbe + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5,1)); // returns NaN
