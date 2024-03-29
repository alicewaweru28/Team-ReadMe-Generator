// NPM Packages
const inquirer = require('inquirer');
const colors = require('colors');

// Employee Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// HTML Generator
const generateHTML = require('./generateHTML');

// Colorized Fonts and Other Default Language
const welcomeMsg = `* * * * WELCOME TO YOUR AUTOMATED TEAM PROFILE GENERATOR. * * * *\n`.underline.green;
const error = `\r\n>> ERR: `.red.bold;
const noInfoEntered = `No information was entered.`;

// Array to Hold Team
const teamArr = [];

// Welcome and Instructions
const welcome =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'welcome',
            message: welcomeMsg + '\nYou will be asked to input information about your team, starting with your Team Manager. \nThese questions will help to complete your customized MyTeam HTML doc. \nLet\'s begin! Press ENTER to continue. \n',
        },
    ])
    .then(addManager)
};

// Questions Awaiting User Input
// Manager Questions
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Input Team Manager\'s name.',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log (error + noInfoEntered + `Please enter the Team Manager\'s name.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: ({ name }) => `Input ${name}\'s employee ID.`,
            validate: id => {
                if (id) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter ${name}\'s employee ID.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: ({ name }) => `Input ${name}\'s email address.`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log(error + `An email address is required. Please enter a valid email address.`)
                    return false;
                };
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: ({ name }) => `Input ${name}\'s office number.`,
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter ${name}\'s office number.`);
                    return false; 
                }
            },
        },
        {
            type: 'list',
            name: 'queryMoreReports',
            message: 'Would you like to add more team members?',
            choices: ['Yes', 'No'],
        },
    ])
    .then(answers => {
    const {name, id, email, officeNumber} = answers;
    const manager = new Manager(name, id, email, officeNumber);
    teamArr.push(manager);
    (answers.queryMoreReports === 'Yes') ? addReports(): generateHTML(teamArr);
    })
};

// Direct Report Questions
const addReports = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'title',
            message: 'Team member\'s title (select one):',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: ({ title }) => `Input ${title}\'s name.`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    ({ title }) => console.log (error + noInfoEntered + `Please enter the ${title}\'s name.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: ({ name }) => `Input ${name}\'s employee ID.`,
            validate: id => {
                if (id) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter ${name}\'s employee ID.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: ({ name }) => `Input ${name}\'s email address.`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(error + `An email address is required. Please enter a valid email address.`)
                    return false;
                };
            },
        },
        {
            type: 'input',
            name: 'github',
            message: ({ name }) => `Input ${name}\'s GitHub username.`,
            when: (input) => input.title === 'Engineer',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter ${name}\'s GitHub username.`);
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: ({ name }) => `Input ${name}\'s school.`,
            when: (input) => input.title === 'Intern',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    ({ name }) => console.log (error + noInfoEntered + `Please enter ${name}\'s school.`);
                    return false; 
                }
            },
        },
        {
            type: 'list',
            name: 'queryMoreReports',
            message: 'Would you like to add more team members?',
            choices: ['Yes', 'No'],
        },
    ])
    .then(answers => {
        if (answers.title === 'Engineer') {
            const {name, id, email, github} = answers;
            const engineer = new Engineer (name, id, email, github);
            teamArr.push(engineer); 
        
        } else if (answers.title === 'Intern') {
            const {name, id, email, school} = answers;
            const intern = new Intern (name, id, email, school);
            teamArr.push(intern);
        };
        (answers.queryMoreReports === 'Yes') ? addReports() : generateHTML(teamArr);
    })
};

// Function to Initialize App
const init = () => welcome()

// Initialize App
init();
