var myPetsArray = ["Dog", "Cat"]

function myArrayFunction(myNewPets) {
    var myNewPets;
    myNewPets = ["Bird", "Fish"];
    var myPetsArray = myNewPets[0];
    var lastPet = myNewPets[1];

    myNewPets.shift();

    myNewPets.unshift(myNewPets[0]);

    myNewPets.unshift("Lion");

    
    return myNewPets;
}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;