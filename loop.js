//1
/*
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
*/

//2
/*
for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
}

console.log('launch');
*/

//3
/*
let greeting = 'Aloha!';

for (let i = 1 ; i < 4; i += 1) {
  console.log(greeting);
}*/

//4 Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.
/*
let i = 1
for (i = 1 ; i <= 100 ; i += 1) {
  console.log(i * 2);
}
*/

//5 Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.
/*
let array = [1, 2, 3, 4];
let index = 0;

while (index < 4){
  console.log(array[index]);
  index ++;
}
*/

//6 Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.

/*
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];


for (let i = 0 ; i < cities.length ; i += 1){
  if (cities[i] === null){
    continue;
  }
  console.log(cities[i].length);
}
*/

//7 The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.
/*
Becaust it doesn't has condition where it would became false.
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}
*/

//8 Write a while loop that logs all odd natural numbers between 1 and 40.
/*
let i = 1;
while (i < 40) {
  console.log(i);
  i += 2;
}
*/

//9 Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.
/*
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for ( let i = 0; i < fish.length ; i += 1) {
  if (fish[i] !== 'Nemo') {
    console.log(fish[i]);
  }else {
    console.log(fish[i]);
    break;
  }
}
*/

//10 