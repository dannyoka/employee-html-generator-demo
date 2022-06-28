const fs = require('fs');
const inquirer = require('inquirer');

const team = [];

function getNext(option) {
  if (option === 'addEngineer') {
    addEngineer();
  }
  if (option === 'addIntern') {
    addIntern();
  }
  if (option === 'finish') {
    generateHtml();
  }
}

function addEngineer() {
  inquirer
    .prompt([
      {
        name: 'engineerName',
        messsage: "What is the engineer's name?",
        type: 'input',
      },
      {
        name: 'engineerId',
        message: "What is the engineer's ID?",
        type: 'input',
      },
      {
        name: 'engineerEmail',
        message: "What is the engineer's email?",
        type: 'input',
      },
      {
        name: 'engineerGithub',
        message: "What is the engineer's GitHub username?",
        type: 'input',
      },
      {
        name: 'addMore',
        type: 'list',
        choices: [
          {
            value: 'addEngineer',
            name: 'Add engineer',
          },
          {
            value: 'addIntern',
            name: 'Add intern',
          },
          {
            value: 'finish',
            name: 'Finish',
          },
        ],
      },
    ])
    .then((data) => {
      team.push(data);
      getNext(data.addMore);
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        name: 'internName',
        messsage: "What is the intern's name?",
        type: 'input',
      },
      {
        name: 'internId',
        message: "What is the intern's ID?",
        type: 'input',
      },
      {
        name: 'internEmail',
        message: "What is the intern's email?",
        type: 'input',
      },
      {
        name: 'internSchool',
        message: 'What school does the intern attend?',
        type: 'input',
      },
      {
        name: 'addMore',
        type: 'list',
        choices: [
          {
            value: 'addEngineer',
            name: 'Add engineer',
          },
          {
            value: 'addIntern',
            name: 'Add intern',
          },
          {
            value: 'finish',
            name: 'Finish',
          },
        ],
      },
    ])
    .then((data) => {
      team.push(data);
      getNext(data.addMore);
    });
}

function generateHtml() {
  const stringifiedTeam = JSON.stringify(team);
  fs.writeFile('team.txt', stringifiedTeam, 'utf-8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('team successfully written');
    }
  });
}

// get the manager's name, employee ID, email address and office number
inquirer
  .prompt([
    {
      name: 'managerName',
      type: 'input',
      message: "What is the team manager's name?",
    },
    {
      name: 'employeeId',
      type: 'input',
      message: 'What is the employee ID?',
    },
    {
      name: 'managerEmail',
      type: 'input',
      message: "What is the manager's email address?",
    },
    {
      name: 'officeNumber',
      type: 'input',
      message: 'What is the office number?',
    },
    {
      name: 'addMore',
      type: 'list',
      choices: [
        {
          value: 'addEngineer',
          name: 'Add engineer',
        },
        {
          value: 'addIntern',
          name: 'Add intern',
        },
        {
          value: 'finish',
          name: 'Finish',
        },
      ],
    },
  ])
  .then((data) => {
    team.push(data);
    getNext(data.addMore);
  });
