//1 Write a function that returns the first element of an input array. For example:
/*
function first(array) {
  return array[0];
}
*/

//2 Write a function that returns the last element of an input array. For example:
/*
function last(array) {
  return array[array.length - 1];
}
*/

//3 We are given the following array of energy sources.
/*
energy.shift();
energy.push('geothermal');
*/

//4 Split the string alphabet into an array of characters.
/*
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet.split('');
*/

//5 Count the number of elements in scores that are 100 or above.
/*
let scores = [96, 47, 113, 89, 100, 102];

let count = 0;

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count);
*/

//6 We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.
/*
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i += 1){
  for (let j = 0; j < vocabulary[i].length; j +=1){
    console.log(vocabulary[i][j]);
  }
}
*/

//9 Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes(). For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.
/*
function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }
  return false;
}
*/

//10 We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).
/*
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-'));
*/

//11 We have made a grocery list, and as we check off items on that list, we would like to remove them. Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.
/*
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}
*/

