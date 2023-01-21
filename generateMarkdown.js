// function to generate markdown for README
function generateMarkdown(data) {
  
  
  return `# ${data.title} \n

  \n ## Overview
  ${data.description} \n 
  ## Table of Contents \n 
- [Installation](#Installation)  
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation} \n

## Usage
${data.usage} \n

## License 
${data.license} \n

## Contributors
${data.contributors} \n

## Tests
${data.test} \n

## Questions
My name is ${data.name}. If you have any questions about this project, please contact me via email at ${data.email} or GitHub [here](https://github.com/${data.git}).


`;
}

module.exports = generateMarkdown;


