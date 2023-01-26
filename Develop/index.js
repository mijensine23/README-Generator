// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'userInstall'
    },
    {
        type: 'input',
        message: 'Provide the instructions for how to use your project',
        name: 'userInstructions'
    },
    {
        type: 'input',
        message: 'Please any contributors for your project',
        name: 'contributor'
    },
    {
        type: 'input',
        message: 'Please enter the test script',
        name: 'test'
    },
    {
        message: 'What kind of license does your project have?',
        name: 'license',
        type: 'list',
        choices:[
        'MIT', 
        'GNU GPLv2', 
        'APACHE 2.0',
        'None'
        ],
    },
    {
        type: 'input',
        message: 'Enter the deployed URL for your project',
        name: 'userURL'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub user name',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'Please your email address',
        name: 'userEmail'
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const contents = generateMarkdown(data);

    fs.writeFileSync(fileName, contents, console.log('File Generated Successfully'))
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=> {writeToFile(`${data.title}-README.md`, data)}) 
        .catch(error => {console.error(`Oops! Something went wrong.: ${error}`)
        })

}

// Function call to initialize app
init();
