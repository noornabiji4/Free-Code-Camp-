function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for(let dog in beagle){
  if (beagle.hasOwnProperty(dog)){
    ownProps.push(dog);
  }
  else {
    prototypeProps.push(dog)
  }
  }




