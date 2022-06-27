const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What will be the title of this project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a short description of your project',
  },
  {
    type: 'input',
    name: 'userstory',
    message: 'What will your user story be?',
  },
  {
    type: 'input',
    name: 'acceptancecriteria',
    message: 'What is the acceptance criteria for this project?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username!',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project (required)',
    choices: ['MIT', 'APACHE(2.0)', 'None'],
  },
])

.then((response) => 
  fs.writeFile('example-README.md', (generateMarkdown(response)), (err) => {
    err ? console.error(err) : console.log('Success! Check out your generatedREADME.md')
  })
);