//task 1
for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log('Gold medal');
  } else if (i == 2) {
    console.log('Silver medal');
  } else if (i == 3) {
    console.log('Bronze medal');
  } else {
    //this block will run if no condition matches
    console.log(i);
  }
}
//task 2
for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log('Gold medal');
      break;
    case 2:
      console.log('Silver medal');
      break;
    case 3:
      console.log('Bronze medal');
      break;
    default:
      //this block will run if no condition matches
      console.log(i);
  }
}
