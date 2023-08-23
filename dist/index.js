import inquirer from "inquirer";
import chalk from "chalk";
import { num1, students } from "./data/data2.js";
console.log("🚀 ~ file: index.ts:4 ~ students:", students);
console.log("🚀 ~ file: index.ts:4 ~ num1:", num1);
// inquirer documentation: https://github.com/SBoudrias/Inquirer.js/
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
let personName = await inquirer.prompt([{
        name: "personName",
        type: "string",
        message: "What is your Name:"
    }
]);
console.log(`Hello, How are you ${personName.personName}?`);
// chalk
let ageAnswer = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log(chalk.black.bgCyan(`Insha Allah, in ${60 - answers.age} years you will be 60 years old.`));
