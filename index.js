// Import packages needed to run this application
const fs = require('fs');
const inquirer = require('inquirer');
const importgenerateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArray = []

// Creates a function to write HTML file
function writeToFile(fileName, answers) {

    fs.writeFile(fileName, answers, (err) => err ? console.error(err) : console.log("success"))
}

// Creates a function to initialize app
function init() { //answers is an object to the prompt
    managerQuestions().then((answers) => {
        //specify what to do here
        console.log(answers)
        const newManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber)
        employeeArray.push(newManager)
        nextStep()
        




    })


}

function managerQuestions() {
    return inquirer //returns a promise because answers have not been given
        .prompt([
            //creates an array of objects of questions for user input
            {
                type: 'input',
                message: 'What is the name of the team manager?',
                name: 'managerName',
            },
            {
                type: 'input',
                message: 'What is their employee ID',
                name: 'managerID',
            },
            {
                type: 'input',
                message: 'What is their email address?',
                name: 'managerEmail',
            },
            {
                type: 'number',
                message: 'What is their office number?',
                name: 'officeNumber',
            },
        ])
}

function nextStep() {
    return inquirer
        .prompt([
            // WHEN I enter the team manager’s name, employee ID, email address, and office number
            // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
            {
                type: 'list',
                message: 'Do you want to add an engineer, intern, or finish?',
                choices: ['engineer', 'intern', 'finish'],
                name: 'nextStep'
            },
        ]).then((answers) => {

            if (answers.nextStep === 'engineer') {
                engineerQuestions()
            }

            if (answers.nextStep === 'intern') {
                internQuestions()
            }

            if (answers.nextStep === 'finish') {
                        const HTML = importgenerateHTML(employeeArray)
                        writeToFile("index.html", HTML)
                        console.log(HTML)
            }

        }) 

}


// make engineer Questions function
function engineerQuestions() {
    return inquirer
        .prompt([
            // WHEN I select the engineer option
            // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
            {
                type: 'input',
                message: 'What is the name of the engineer?',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'What is the ID of the engineer?',
                name: 'engineerID'
            },
            {
                type: 'input',
                message: 'What is the email of the engineer?',
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: 'What is the GitHub username of the engineer?',
                name: 'githubUsername'
            },
        ]).then((answers) => {
            const newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.githubUsername)
            employeeArray.push(newEngineer)
            nextStep()
        } )
}

//make loop for intern
function internQuestions() {
    return inquirer
        .prompt([
            // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
            // WHEN I decide to finish building my team
            {
                type: 'input',
                message: 'What is the name of the intern?',
                name: 'internName'
            },
            {
                type: 'input',
                message: 'What is the ID of the intern?',
                name: 'internID'
            },
            {
                type: 'input',
                message: 'What is the email of the intern?',
                name: 'internEmail'
            },
            {
                type: 'input',
                message: 'What is the school of the intern?',
                name: 'internSchool'
            },
        ]).then((answers) => {
            const newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
            employeeArray.push(newIntern)
            nextStep()
        } )
}
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// ├── __tests__ /             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist /                  // rendered output (HTML) and CSS style sheet      
// ├── lib /                   // classes
// ├── src /                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json    

// The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

// ## Grading Requirements

// > **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
// >
// > * A repository that has no code
// >
// > * A repository that includes a unique name but nothing else
// >
// > * A repository that includes only a README file but nothing else
// >
// > * A repository that only includes starter code

// This Challenge is graded based on the following criteria:

// ### Deliverables: 15%

// * A sample HTML file generated using the application must be submitted.

// * Your GitHub repository containing your application code.

// ### Walkthrough Video: 32%

// * A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.

// * The walkthrough video must show all four tests passing from the command line.

// * The walkthrough video must demonstrate how a user would invoke the application from the command line.

// * The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

// * The walkthrough video must demonstrate a generated HTML file that matches the user input.

// ### Technical Acceptance Criteria: 40%

// * Satisfies all of the preceding acceptance criteria plus the following:

//   * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

//   * Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

//   * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.

// ### Repository Quality: 13%

// * Repository has a unique name.

// * Repository follows best practices for file structure and naming conventions.

// * Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

// * Repository contains multiple descriptive commit messages.

// * Repository contains a high-quality readme with description and a link to a walkthrough video.

// ## Review

// You are required to submit the following for review:

// * A walkthrough video that demonstrates the functionality of the application and passing tests.

// * A sample HTML file generated using your application.

// * The URL of the GitHub repository, with a unique name and a readme describing the project.

// ---
// © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.


init()