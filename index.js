const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const { off } = require("process");
const generateMarkdown = require("./generateMarkdown");


// When a user enters the project title then it is displayed as the title of the README
// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README

const qs = 
[
    // {
    //     // Questions Section
    //     type: "input",
    //     message: "Please enter your name",
    //     name: "about",
    // },
    // {
    // type: "input",
    // message: "Please enter your email address",
    // name: "email",
    // },
    {
        type: "input",
        message: "What is your Github username?",
        name: "git",
    },
    {
        // Title/Description section
        type: "input",
        message: "Please enter the title of your project",
        name: "title",
    },
    // {
    //     type: "input",
    //     message: "Please enter a short description of your project",
    //     name: "description",
    // },
    // {
    //     // Installation section
    //     type: "input",
    //     message: "Please descibre how to install your project",
    //     name: "installation",
    // },
    // {
    //     type: "input",
    //     message: "Please enter an example of usage for your code",
    //     name: "Usage",
    // }, 
    {
        // License section
        type: "checkbox",
        message: "What License would you like to use?",
        name: "license",
        choices: ["MIT", "Apache", "GPLv2"]
    },
    // {
    //     type: "input",
    //     message: "Would you like to add contributors to your project?",
    //     name: "contributors",
    // }, 
    // {
    //     type: "input",
    //     message: "Have you done any tests you would like to display?",
    //     name: "test",
    // }, 
]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log("error") : console.log("README created!")})
}

const generateQuestions = () => {
inquirer
.prompt(qs)
.then((response) => {
    // let badge = [response.license]
    // if(badge == "MIT") {
    //     badge = "[![License](https://img.shields.io/badge/License-MIT-lightgray.svg)](https://opensource.org/licenses/MIT)" }
    // if(badge == "Apache") {
    //     badge = "[![License](https://img.shields.io/badge/License-MIT-lightgray.svg)](https://opensource.org/licenses/MIT)"
    // }
    writeToFile("README.md", generateMarkdown(response));
    
});
}
generateQuestions();





// 



// // function to initialize program
// function init() {

// }

