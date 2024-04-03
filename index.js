function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let result = '';
  if (someValue <= 400){
    result =   'This one is on me!';
  }else if (someValue > 400 && someValue < 2000){
    result =   'That will be twenty bucks.';
  }else if (someValue > 2000 && someValue < 2500){
    result =   'I will gladly take your thirty bucks.';
  }else {
    result = 'No can do.';
  }
  return result;
  }

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC'){
    return "Ok, sounds good.";
  }else if (city === 'Pittsburgh'){
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous'){
    return 'Thank you so much.';
  }else if (tip === 'not as generous'){
    return 'Thank you.';
  }else{
    return 'Bye.';
  }
  }

scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');

function addFive(someNumber) {
  //Everything I want my function to do I put inside these curly braces
  //In this example, let's say I want my function, addFive, to add 5 to
  //any number I pass in (someNumber), but only IF the number is greater
  //than zero:
  let result
  if (someNumber > 0) {
    result = someNumber + 5;
  }
  //at the end, if I want my function to return something, I need to state it:
  return result
}

//once our function is declared, we can call addFive, passing in values 
//as arguments:

addFive(10);
//=> 15

addFive(20);
//=> 25

addFive(-5);
//=> undefined

addFive(addFive(5));
//=> 15!! In this case, the return value of addFive(5), 10, is passed in 
//as the argument to the 

/*
function scuberGreetingForFeet(someValue) {
  let result = '';
  if (someValue <= 400) {
    result = 'This one is on me!';
  } else if (someValue < 2000) {
    result = 'That will be twenty bucks.';
  } else if (someValue >= 2000 && someValue < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return "Ok, sounds good.";
  } else if (city === 'Pittsburgh') {
    return 'No go.';
  } else {
    return 'Where to?';
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

function addFive(someNumber) {
  let result;
  if (someNumber > 0) {
    result = someNumber + 5;
  }
  return result;
}

// Testing the functions
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(1500));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Pittsburgh'));
console.log(ternaryCheckCity('LA'));

console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('normal'));

console.log(addFive(10));
console.log(addFive(20));
console.log(addFive(-5));
console.log(addFive(addFive(5))); // Output will be undefined, as addFive(-5) returns undefined.
*/