function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck= new Animal(); // Change this line
let beagle= new Animal(); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 