/*Esercizio 1*/

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + ' ' + this.lastName + ' è più vecchio di ' + otherUser.firstName + ' ' + otherUser.lastName;
    } else {
      (this.age < otherUser.age)
      return this.firstName + ' ' + this.lastName + ' è più giovane di ' + otherUser.firstName + ' ' + otherUser.lastName;
    }
  }
}

const user1 = new User('Roger', 'Gol', 51, 'Rogue Town');
console.log(user1);
const user2 = new User('Luffy', 'Monkey', 19, 'Foosha');
console.log(user2);

console.log(user1.compareAge(user2));



/*Esercizio 2*/

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const petForm = document.getElementById('petForm');
const petList = document.getElementById('petList');
const pets = [];

petForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const petName = document.getElementById('petName').value;
  const ownerName = document.getElementById('ownerName').value;
  const species = document.getElementById('species').value;
  const breed = document.getElementById('breed').value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  displayPet(newPet);
  petForm.reset();
});

function displayPet(pet) {
  const petItem = document.createElement('li');
  petItem.innerText = `${pet.petName} (${pet.species} - ${pet.breed}) - Owner: ${pet.ownerName}`;
  petItem.classList.add('list-group-item');
  petList.appendChild(petItem);
}


function checkSameOwner(pet1, pet2) {
  return pet1.hasSameOwner(pet2);
}


const examplePet1 = new Pet('Thor', 'Hagrid', 'Dog', 'PAstore Tedesco');
const examplePet2 = new Pet('Fierobecco', 'Hagrid', 'rabbit', 'Ippogriffo');
console.log(checkSameOwner(examplePet1, examplePet2)); // true
