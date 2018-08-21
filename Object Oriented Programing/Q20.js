function Animal() { }
function Bird() { }
function Dog() { }


Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line


let duck = new Bird();
let beagle = new Dog();
duck.constructor = Bird;
beagle.constructor = Dog;
