#!/usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";


const answers = await inquirer.prompt([
    
    {message: "Enter First Number", type: "number" , name:"firstNumber"},
    {message: "Enter First Number", type: "number" , name:"secondNumber"},
    {message: "Select Your Operation", 
    type: "list", 
    name: "operation", 
    choices: ["Addition", "Subtration", "Multiplication", "Division"],}])

if(answers.operation === "Addition"){
console.log(chalk.blue(answers.firstNumber + answers.secondNumber))
}
else if(answers.operation === "Subtration"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operation === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operation === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
} else {
    console.log("Please Select valid Operator")
}