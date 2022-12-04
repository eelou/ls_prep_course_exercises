//2 The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed. Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.
/*
let randomNumber = Math.round(Math.random());

console.log(randomNumber);
if (randomNumber === 1){
  console.log('Yes');
}else {
  console.log('No');
}
*/

//3 Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.
/*
let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'Yes' : 'No');
*/

//4 
/*
Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather.
*/
/*
let weather = 'rainy';
if (weather === 'sunny'){
  console.log(`It's a beautiful day!`);
}else if (weather === 'rainy'){
  console.log(`Grab your umbrella`);
}else {
  console.log(`Let's stay inside`);
}
*/

//6 Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.
/*
let weather = '';
switch (weather) {
  case 'sunny':
    console.log(`It's a beautiful day!`);
    break;
  case 'rainy':
    console.log('Grab your umbrealla');
    break;
  case 'winter':
    console.log('Grab your jacket');
    break;
  default:
    console.log(`Let's stay inside`);
    break;
}
*/