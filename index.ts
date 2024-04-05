#! usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number - Done.

// 2) User input for guessing number - Done. 

// 3) Compare user input with computer generated number and show result - Done.


const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessing Game");
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    },
]);

if (answer.userGuessNumber === randomNumber ){
    console.log("Congtratulations! you guessed right number");
}else {
    console.log ("You guessed wrong number");
    }

