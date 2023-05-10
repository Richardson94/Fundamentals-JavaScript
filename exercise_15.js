// Task 1
var dairy = [
  'cheese',
  'sour cream',
  'milk',
  'yogurt',
  'ice cream',
  'milkshake',
];

function logDairy() {
  for (const product of dairy) {
    console.log(product);
  }
}

logDairy();
// Task 2
const animal = {
  canJump: true,
};

const birdTwo = {
  canFly: true,
  hasFeathers: true,
};

function birdCan() {
  for (const property in birdTwo) {
    console.log(`${property}: ${birdTwo[property]}`);
  }
}

birdCan();

// Task 3

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function animalCan() {
  for (const property in bird) {
    console.log(`${property}: ${bird[property]}`);
  }
}

animalCan(); // output: canFly: true, hasFeathers: true, canJump: true
