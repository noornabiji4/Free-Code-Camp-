function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat{constructor(makeClass){
  this._makeClass= makeClass;
}

}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
