// Performing a task

// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Mussu', 'Mandal');
// greet('Harshu', 'Mandal');


// function greet(name, lastName) {
//    return('Hello ' + name + ' ' + lastName);
// }

// console.log(greet('Mussu', 'Mandal'));
// console.log(greet('Harshu', 'Mandal'));


// // Calculating a value

// function square(number) {
//     return number * number;
// }
// console.log(square(4));


// let number = square(3);
// console.log(number);

// Types of Functions

// Function Declaration 

// function walk() {
//     console.log('walk');
// }

// //Named Anonymous Function Expression 
// let run = function (){
//     console.log('run');
// };



// run();
// move();

// Hoisting

//Function Declaration

walk();

function walk() {
    console.log('walk');
}

//Function Expression 

// run();
// let run = function (){
//     console.log('run');
// };

// Arguments 

// let x = 1;
// x = 'a';

// function sum(){
//     let total = 0;
//     for (let value of arguments)
//     total += value;
// return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6));

//The  Rest Operator

// function sum(a,...args){
//    console.log(args);
// }

// console.log(sum(1, 2, 3, 4, 5, 6));


// Default Parameters

// function interest(prinicipal, rate = 3.5, years) {
//     return prinicipal * rate /100 * years;
// }

// console.log(interest(10000, 5, 5));

// // Getter & Setters

// const person = {
//     firstName : 'Harshita',
//     lastName : 'Mandal',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },

//     set fullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];

//     }
// };

// person.fullName = 'Muskan Mandal';

// //getters => access properties
// //setters => change (mutate) them

// console.log (person);

// // Try & Catch

// // const person = {
// //     firstName : 'Harshita',
// //     lastName : 'Mandal',
// //     set fullName(value){

// //         if (typeof value !== 'string')
// //         throw new Error('Value is not a string');

// //         const parts = value.split(' ');
// //         if (parts.length != 2)
// //         throw new Error ('Enter First Name & Last Name')
// //         this.firstName = parts[0];
// //         this.lastName = parts[1];

// //     }
// // };

// // try{
// // person.fullName = '';
// // }

// // catch (e){
// //     alert(e)
// // }

// // console.log (person);

// // Scoping
// // { 
// // const message = 'hi';
// // }
// // console.log(message);


// getters & Setters

// const person = {
//     firstName : 'Harshita',
//     lastName : 'Mandal',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`

//     },

//     set fullName(value){
//    const parts = value.split(' ');
//    this.firstName = parts [0];
//    this.lastName = parts[1];
//     }
// };

// person.fullName = "Muskan Mandal";

// person.fullName = '';


// console.log(person);

//Getters : acess properties
//Setters : Change (mutate) properties


// Try & Catch

// try{
//     // Code that may throw error
// } catch (error) {
//     //code to handle error
// }

// const person = {
//     firstName : 'Harshita',
//     lastName : 'Mandal',
//     set fullName(value){
//         if (typeof value !== 'string')
//         throw new Error('Value is not a string');



//    const parts = value.split(' ');
//    if (parts.length !==2)
//    throw new Error('Enter a first name and last name')
//    this.firstName = parts [0];
//    this.lastName = parts[1];
//     }
// };


// try{
//     person.fullName = 'Prabhat Kumar';
// } catch(error){
//     alert(error)
// }

// console.log(person);



// try{
//     // Code that may throw error
// } catch (error) {
//     //code to handle error
// }

//call , apply & bind method

// call method

// functionName.call (thisArg, arg1, arg2, ...);

// function sayHello(){
//   console.log(`Hello, ${this.name}`);
// }

// const person = { name : 'Harshita'}

// sayHello.call(person);

// Apply Method 

// functionName.apply(THISARG, [arg1, arg2, ...]);

const person = {
  name : 'Mohit'
};

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`)
}

greet.apply(person, ['Hi'])


//This Keyword

console.log(this);

const animal = {
  name : 'Dog',
  call: function() {
    console.log(`Hey ${this.name} come here`);
  }
};

animal.call();

// Arrow Functions

// function add(a,b){
//   return a+b
// }

// const add = (a,b) => a+b;

// Shadowing

const x = 10; //global variable

function print(){
  const x = 20; // Shadow the global 'x'
  console.log(x);
}

print();

console.log(x);



// bind Method

const user = {name : 'Mohit'};
const boundFunction = introduce.bind(user, ' Mr.', 'Software Engineer');


function introduce(title, profession) {
  console.log(`I am ${title} ${this.name} , a ${profession}`);
}


boundFunction();

// const newFunction = functionName.bind(thisArg, arg, arg2);


// Filter Map Reduce