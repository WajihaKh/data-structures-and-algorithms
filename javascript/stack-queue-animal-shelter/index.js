class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogs.push(animal);
    } else if (animal.species === 'cat') {
      this.cats.push(animal);
    } else {
      console.log('Invalid animal species');
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      if (this.dogs.length === 0) {
        return null;
      }
      return this.dogs.shift();
    } else if (pref === 'cat') {
      if (this.cats.length === 0) {
        return null;
      }
      return this.cats.shift();
    } else {
      return null;
    }
  }
}

module.exports = { Animal, AnimalShelter };
