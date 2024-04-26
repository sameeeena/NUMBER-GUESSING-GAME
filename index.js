#! /usr/bin/env node
// Shabang
import inquirer from "inquirer";
//1: computer will generate a random number
//2: user input for guessing number
//3: compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 9 + 1);
//console.log(randomNumber);
//const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number 1-9: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
