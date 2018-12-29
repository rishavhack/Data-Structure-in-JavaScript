//Method #1 - Using this, prototype and new :
const Dog = function(name, breed){
  this.name = name;
  this.breed = breed;
};

Dog.prototype.bark = function(){
  console.log('Woof!');
};

const dog = new Dog('Fido', 'Collie');