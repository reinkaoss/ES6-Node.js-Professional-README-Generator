const fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const { off } = require("process");
const generateMarkdown = require("./generateMarkdown");


const qs = 
[
    {
        // Questions Section
        type: "input",
        message: "Please enter your name",
        name: "about",
    },
    {
    type: "input",
    message: "Please enter your email address",
    name: "email",
    },
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
    {
        type: "input",
        message: "Please enter a short description of your project",
        name: "description",
    },
    {
        // Installation section
        type: "input",
        message: "Please descibre how to install your project",
        name: "installation",
        default: "N/A"
    },
    {
        type: "input",
        message: "Please enter an example of usage for your code",
        name: "Usage",
    }, 
    {
        // License section
        type: "checkbox",
        message: "What License would you like to use?",
        name: "license",
        choices: ["MIT", "Apache", "GPLv2"]
    },
    {
        type: "input",
        message: "Please explain how a developer can make a contribution to the project?",
        name: "contributors",
        default: "N/A"
    }, 
    {
        type: "input",
        message: "If you have tests in place, please explain how these can be run?",
        name: "test",
        default: "N/A"
    }, 
]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log("error") : console.log("README created!")})
}

const init = () => {
inquirer
.prompt(qs)
.then((response) => {
    let badge = [response.license]
    if(badge == "MIT") {
        badge = "[![License](https://img.shields.io/badge/License-MIT-lightgray.svg)](https://opensource.org/licenses/MIT)" }
        if(badge == "Apache") {
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if(badge == "GPLv2") {
        badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    }
    writeToFile("README.md", `\n ${badge}` + generateMarkdown(response));

});
}
init();






