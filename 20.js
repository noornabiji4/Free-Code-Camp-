function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable{constructor(makeClass){
  this.makeClass=makeClass;}
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
