function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
    numLegs: 4, 
    eat: function() {
    console.log("bhao bhao");
  },
  describe: function() {
    console.log("The Dog name " + this.name);
  }
};