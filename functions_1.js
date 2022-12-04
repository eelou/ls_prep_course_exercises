//1 Examine the example function invocation below. Write the function sum, such that it accepts two arguments and returns the sum of its arguments. You may assume that the function arguments will always be numbers.
/*
function sum ( num1 , num2 ){
  let result = num1 + num2;
  return console.log(result);
}

sum(100,200);
*/

//2 Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console. What is the return value of the function?
/*
function brendanEichQuote() {
  console.log('Always bet on JavaScript');
}
brendanEichQuote();
*/

//3 Let's generalize the function from the previous exercise a bit. Implement a function cite that takes two string arguments: the author of the quote and what they said. It then logs the quote to the console, as in the following example.
/*
function cite ( string1 , string2 ) {
  console.log(`${string1} said: "${string2}."`);
}

cite('Brendan Eich' , 'Always bet on JavaScript');
*/

//4 Write a function that accepts a single argument, a number, and returns the result of multiplying its argument by an exponent of 2 (also known as squaring the number).
/*
function squaredNumber(num1){
  let result = num1 * num1;
  console.log(result);
}

squaredNumber(5);
*/

//6 Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:
/*
function compareByLength( string1 , string2 ){
  if (string1.length < string2.length){
    console.log(-1);
  }else if (string1.length > string2.length){
    console.log(1);
  }else {
    console.log(0);
  }
}

compareByLength('patience', 'perseverance'); 
compareByLength('strength', 'dignity');      
compareByLength('humor', 'grace');  
*/

//7 Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'
/*
console.log('Captain Ruby'.split(' ')[0] + ' Javascript');
*/

//8 Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.
/*
function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}
*/

//9 Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.
/*
function extractLanguage ( string1 ) {
  console.log(string1.split('_')[0]);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'
*/

//10 Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:
/*
function extractRegion ( string1 ) {
  let split1 = string1.split('.')[0];
  console.log(split1.split('_')[1]);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
*/

//11 Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:
/*
function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function extractLanguage ( string1 ) {
  return (string1.split('_')[0]);
}

function extractRegion ( string2 ) {
  let split1 = string2.split('.')[0];
  return (split1.split('_')[1]);
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}
*/