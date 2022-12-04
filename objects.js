//1 Write the code necessary to retrieve the value of the courses property of our student object.
/*
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);
*/

//2 Given the below object jane, write code that retrieves the country in which Jane is located.
/*
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location.country);
*/

//3 Below is a simple object representing our dog, Fido. On lines 8 and 9, write code to add properties 'age' and 'favorite food' to the fido object.
/*
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};
fido['age'] = 2;
fido['favorite food'] = 'peanut butter';

console.log(fido);
*/

//4 Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.
/*
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  },
};

jane.greet('Bobby');
*/

//7 Write code that stores all of the vehicle property names in an array called keys.
/*
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = [];

for (let property in vehicle) {
  keys.push(property);
}
*/

//8 Convert the person object into a nested array nestedPerson, containing the same key-value pairs.
/*
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};
let nestedPerson = [];

for (let property in person) {
  nestedPerson.push([property, person[property]]);
}
*/

//9 Write code that does the reverse, starting from a nested array of pairs and building an object.
/*
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);
*/