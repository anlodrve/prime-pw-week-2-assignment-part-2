// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set its value to Dane as a string. 
// Then we check if name is exactly equal to the string Mary. It is not, so 
// we console.log 'How do you do?'. 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called secret without defining its value. 
// Then we declare a variable called code and set its value equal to 123. 
// Then we check if code is an exact match to 123. 
// 123 is equal to 123, so secret is defined as 'super' and code is then equal to itself multiplied by 2 which is 246. 
// Then we check if code is greater than 250. 246 is not greater than 250 so 
// we console.log(secret) which runs as 'super'. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set its value equal to true as a boolean, 
// Then we make a variable called age and set its value equal to 34 as a number. 
// Then we make a variable called zip and set its value equal to 55407 as a number. 
// Then we check if isStudent is exactly equal to true and if zip is greater than 80000. isStudent is true but zip is not greater than 80000 so 
// then we check if isStudent is false or if age is less than 30; neither are true so we move on.
// Then we check if isStudent is true; it is so we console.log 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


// FIX - instructions say colorOne should be set to 'blue' and colorTwo should be set to 'red', but in the code they are switched. 
// should be colorOne = 'blue' and colorTwo = 'red'.
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX - instructions say that colorOne and colorTwo should both be set equal to 'purple'.
// should be colorOne = 'purple'; colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// FIX - time should be a variable not a constant
// should say let time = 4;
/*
let temp = 40;
const time = 4;

// FIX - instructions say we check if temp is higher than 39 and if time is greater or equal to 4 - code says or 
// should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// FIX - instructions say minAge should be a variable not a constant
// should be let minAge = 21. 
/*
let age = 21;
const minAge = 21;

// FIX - code says we should console.log 'no entry' if age is greater than or equal to min age, but the instructions say to code 'enter'
// should be if(age >= minAge) {
// console.log('enter);
// }
// else {
// console.log('no entry');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

