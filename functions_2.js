//1 How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation?
/*
function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}
*/

//2 Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:
/*
function greet(greeting = 'Hello', recipient = 'world') {
  console.log(`${greeting}, ${recipient}!`);
}
*/

//3 Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.
/*
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}
*/

//4 Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:
/*
function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2);
}
*/

//5 
/*
function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}
*/

//6 Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.
/*
function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}
removeLastChar('ciao!'); 
removeLastChar('hello');
*/

//7 Refactor the function below using arrow syntax. Line 9 should still log the same sentence.
/*
const template = 'I VERB NOUN.';
let sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);
  
console.log(sentence('like', 'birds'));
*/

//8 The function initGame below returns an object. Refactor it using arrow function syntax.
/*
let initGame = () => ({
  level: 1,
  score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);
*/