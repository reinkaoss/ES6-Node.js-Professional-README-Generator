# README Generator
A command-line application that generates a professional README file for your project. The application uses the answers to a series of prompts to generate a README file in the markdown format. This README file can be easily added to your Github repository to give your project a more polished and professional appearance.

## Getting Started
Clone the repository to your local machine
Run npm install to install the required dependencies
Run node index.js to start the application
Answer the prompted questions about your project
A README.md file will be generated in the root directory of your project

## Features
* The application prompts the user with a series of questions about their project, including the title, description, installation instructions, usage example, and more.
* The application uses the user's answers to generate a professional README file in the markdown format.
* The application also includes a section for the user to select a license for their project, and will automatically generate a badge for the selected license.
* The application also includes a section for the user to describe how developers can make contributions to the project.
* The application also includes a section for the user to describe how to run tests on the project.

![Working Application](./assets/Kapture%202023-01-24%20at%2011.32.32.gif)

## Dependencies
This application uses the following npm packages:

fs to handle file I/O operations
inquirer to prompt the user with questions
path to handle file paths
* The application also utilizes a generateMarkdown module that is used to generate the markdown content for the README file.

## Customization
* The questions asked in the application can be easily customized to fit the specific needs of your project.
* The generateMarkdown module can be modified to include any additional sections or information that you want to include in your README file.

## License
This application is licensed under the MIT License. See the LICENSE file for details.

## Conclusion
Overall, the README Generator is a useful tool that can save you time and effort when creating a professional README file for your project. It streamlines the process and ensures that all the important information is included. By providing a polished and professional README file, you can improve the overall appearance of your project and increase the likelihood of it being noticed by potential users or contributors.