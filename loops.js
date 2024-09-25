// Assignment: Loops and Iterations in JavaScript

// Objective:
// Enhance your understanding of loops and iterations in JavaScript through a series of challenging exercises. This assignment will help you develop problem-solving skills using various loop constructs.
//
// Part 1: Loop Concepts Overview
// 1.	Research
// Write a brief overview of the following types of loops in JavaScript:
// ○	for loop
// A for loop repeats until a specified condition evaluates to false. It comprises of the initializing expression, the condition, the statement using a block statement {()} to group the statements and the afterthought.

// while loop
// A while statement executes its statements as long as a specified condition evaluates to true.
// The condition test occurs before the statement in the loop is executed. If the condition returns true, the statement is executed, and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.
// Example: Here the loop iterates as long as n is less than 7.
// let n = 0;
// let x = 0;
// while (n < 7) {
//   n++;
//   x += n;
// }


// ○	do...while loop 
// The do...while statement repeats until a specified condition evaluates to false.
// do
//   statement
// while (condition);
// The statement is always executed once before the condition is checked. To execute multiple statements, the block statement ({ }) is used to group the statements.
// Example;
// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 10);

// 2.	For each type, include:
// ○	Definition
// ○	Syntax

// JavaScript syntax refers to the rules and conventions dictating how code is structured and arranged within the JavaScript programming language. This includes statements, expressions, variables, functions, operators, and control flow constructs.
// There are two types of values defined in syntax: Fixed values and Variable values. 
// A simple example
// Declaring variables; let x=5; const PI =3.142; var = 12;
// Conditional statements:
//  if (age >= 18) { 
// console.log(" Adult."); 
// } else { console.log(" Minor."); }


	// 1. Multiplication Table with For Loop
// for (let i = 1; i <= 10; i++) { 
//     console.log("Multiplication Table for " + i + ":");
//      for (let j = 1; j <= 10; j++) { 
//     console.log(i + " x " + j + " = " + (i * j)); 
//     } console.log("");
//     }
    
//2.	Sum of Odd and Even Numbers with While Loop
// let evenNum = 0; 
// let oddNum = 0;
//  let num = 1; 
// while (num <= 50) {
//  if (num % 2 == 0) {
//  evenNum += num; 
// } else {
//  oddNum +=num; 
// } num++; 
// } 
// console.log("Even num: " + evenNum); 
// console.log("Odd num: " + oddNum);


//3.	Countdown with Condition using While Loop
//("enter starting number");
// let n = 15;              
// let countdown = n;

// while (countdown > 0) {
//     if (countdown === 5) {
//         console.log("Almost there!");
//     } else {
//         console.log(countdown);
//     }
//     countdown--; // Decrease countdown by 1
// }

// console.log("Liftoff!");


//4.	Advanced Guessing Game with Do...While Loop

// let targetNumber = 98; // The number to guess
// let randomNumber = 55; // Guess

// if (randomNumber > 100) {
//     console.log("Guess is too high");
// } else if (randomNumber <= 10) {
//     console.log("Guess is too low");
// } else if (randomNumber ===targetNumber) {
//     console.log("Correct!");
// } else {
//     console.log("Please guess again.");
// }

//5.	Nested Loop Pattern for right triangle asterisks pattern
let height = 5; // You can change this number to adjust the triangle height

// Loop for each row
for (let i = 1; i <= height; i++) {
    let row = ""; // Initialize an empty string for the current row

    // Loop to add asterisks for the current row
    for (let j = 1; j <= i; j++) {
        row += "*"; // Add an asterisk for each column
    }

    console.log(row); // Print the current row
}