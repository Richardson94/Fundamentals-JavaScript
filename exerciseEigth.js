//task 1
function addTwoNums(a, b) {
  console.log(a + b); //display the result
}
//task 2
function addTwoNums(a, b) {
  console.log(a + b);
}
addTwoNums(5, '5'); // "55"
//task 3
function addTwoNums(a, b) {
  try {
    console.log(a + b);
  } catch (err) {
    console.log(err);
  }
}
//task 4
function addTwoNums(a, b) {
  try {
    if (typeof a != 'number') {
      throw new ReferenceError('the first argument is not a number');
    } else if (typeof b != 'number') {
      throw new ReferenceError('the second argument is not a number');
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log(err);
  }
}
//task 5
function addTwoNums(a, b) {
  try {
    if (typeof a != 'number') {
      throw new ReferenceError('the first argument is not a number');
    } else if (typeof b != 'number') {
      throw new ReferenceError('the second argument is not a number');
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log('Error!', err);
  }
}
//task 6 & 7
function addTwoNums(a, b) {
  try {
    if (typeof a != 'number') {
      throw new ReferenceError('the first argument is not a number');
    } else if (typeof b != 'number') {
      throw new ReferenceError('the second argument is not a number');
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log('Error!', err);
  }
}
addTwoNums(5, '5');
console.log('It still works');
