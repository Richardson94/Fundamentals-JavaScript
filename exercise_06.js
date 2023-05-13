//Task 1
// A function that accepts two parameters
function letterFinder(word, match) {}

//Task 2
function letterFinder(word, match) {
  for (i = 0; i < word.length; i++) {
    //this loop exists when i is equal to the length of the word
  }
}

//Task 3
function letterFinder(word, match) {
  for (i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //check if the current characater, word[i], is equal to the match
    }
  }
}

//Task 4
function letterFinder(word, match) {
  for (i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //check if the current characater, word[i], is equal to the match
      console.log('Found the', match, 'at', i);
    }
  }
}

//Task 5
function letterFinder(word, match) {
  for (i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //check if the current characater, word[i], is equal to the match
      console.log('Found the', match, 'at', i);
    } else {
      console.log('---No match found at', i);
    }
  }
}

//Task 6
function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //check if the current characater, word[i], is equal to the match
      console.log('Found the', match, 'at', i);
    } else {
      console.log('---No match found at', i);
    }
  }
}

letterFinder('test', 't');
