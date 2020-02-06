const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

module.exports = class Main {
    constructor() {
        this._teamArray = [];
    }
    async run() {
        const { numberOfMembers } = await inquirer.prompt([{
            type: 'input',
            name: 'numberOfMembers',
            message: 'How Many Members on Your Team?',
            default: 2,
        }])

        for (let i = 0; i < numberOfMembers; i++) {
            console.log('=======================================');
            const response = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please Enter Your Name',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please Enter Your Email',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please Enter an ID number',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Please Select Your Role', 
                    choices: [
                        'Engineer',
                        'Intern',
                        'Manager'
                    ]
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Please Enter Your GitHub Username',
                    when: ({ role }) => role === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Please Enter Name of Your School',
                    when: ({ role }) => role === 'Intern'
                },
                {
                    type: 'input',
                    name: 'roomNumber',
                    message: 'Please Input Your Room Number',
                    when: ({ role }) => role === 'Manager'
                },
            ]);

            const {
                name,
                email,
                id,
                role,
                github,
                school,
                roomNumber,
            } = response;

            if (role === 'Engineer') {
                this._teamArray.push(new Engineer(name, id, email, github));
            }

            if (role === 'Intern') {
                this._teamArray.push(new Intern(name, id, email, school));
            }

            if (role === 'Manager') {
                this._teamArray.push(new Manager(name, id, email, roomNumber));
            }
        }

        console.log(this._teamArray);
    }
}
