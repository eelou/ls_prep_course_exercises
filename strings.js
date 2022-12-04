//1 Determine the length of the string "These aren't the droids you're looking for.".
/*
let string1 = "These aren't the droids you're looking for.";

console.log(string1.length);
*/

//2 ake the string 'confetti floating everywhere' and transform it to upper case
/*
let string1 = 'confetti floating everywhere';

console.log(string1.toUpperCase());
*/

//3 Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().
/*
function repeat ( num1 , string1 ){
  let repeatitions = "";
  while (num1 > 0){
    repeatitions += string1;
    num1 -= 1;
  }
  return console.log(repeatitions);
}

repeat(2,'ha');
*/

//4 Take the following rhyme:
/*
let string1 = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'
console.log(string1);
*/

//5 Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?
/*
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

string1.toUpperCase() === string2.toUpperCase(); 
string1.toUpperCase() === string3.toUpperCase();
*/

//6 Write code that checks whether the string byteSequence contains the character x.
/*
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
byteSequence.includes('x');
*/

//7 Write a function that checks whether a string is empty or not. For example:
/*
function isBlank(string) {
  return string.length === 0;
}
*/

//8 Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:
/*
function isBlank(string) {
  return string.trim().length === 0;
}
*/

//9 Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
/*
let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' ');
*/