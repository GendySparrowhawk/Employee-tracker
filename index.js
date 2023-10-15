// pullling in inquirer and fucntions from generate folder
const inquirer = require("inquirer");
const { getAllDepartments, getAllRoles, createNewDepartment, getDepartments, createNewRole, getRoles, createNewEmployee, getAllEmployees, getManagers, getEmployees, updateEmployee } = require('./generate');


// prompts for inquirer q's
const prompt = [
    {
        type: 'list',
        message: 'Welcome, What would you like to do?',
        name: 'choice',
        choices: ['View all Departments', 'view all roles', 'view all employees', 'view all managers', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit']
    }
];

const departmentQuestions = [
    {
        type: 'input',
        message: 'What is the departments title?',
        name: 'title'
    }
];

const roleQuestions = [
    {
        type: 'input',
        message: 'What is the roles titile?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'how much will you rake in on this job?',
        name: 'salary'
    },
    {
        type: 'list',
        message: 'What department is this role in?',
        name: 'choice',
        choices: []
    }
];

const employeeQuestionsA = [
    {
        type: 'input',
        message: 'What is the employees 1st name?',
        name: 'first_name'
    },
    {
        type: 'input',
        message: 'what is the employees last name?',
        name: 'last_name'
    },
]
const employeeQuestionsB = [
    {
        type: 'list',
        message: 'what is the employees role?',
        name: 'role',
        choices: []
    },
    {
        type: 'confirm',
        message: 'is this employee a manager?',
        name: 'is_manager'
    }
];

const updateQuestions = [
    {
        type:'list',
        message:'Which employee do you need to update?',
        name:'employee',
        choices: []
    },
    {
        type:'list',
        message:'what is their new role?',
        name:'role',
        choices:[]
    }
]
// inint function with its switch case to run through all possiblities of user input
function init() {
    inquirer.prompt(prompt).then(async (answer) => {
        switch (answer.choice) {
            case 'View all Departments':
                try {
                    const departments = await getAllDepartments();
                    console.log(departments);
                    // this init funciton is called after every scuessful case to let the user in the program run another comand without restarting the terminal
                    init();

                } catch (err) {
                    console.error('Failed to get departments: ', err);
                }
                break;
        }
        switch (answer.choice) {
            case 'view all roles':
                try {
                    const roles = await getAllRoles();
                    console.log(roles);

                    init();

                } catch (err) {
                    console.error('Failed to get roles: ', err);
                }
                break;
        }
        switch (answer.choice) {
            case 'view all employees':
                try {
                    const employees = await getAllEmployees();
                    console.log(employees);

                    init();

                } catch (err) {
                    console.error('Failed to get Employees: ', err);

                }
                break;
        }
        switch (answer.choice) {
            case 'view all managers':
                try {
                    const managers = await getManagers();
                    console.log(managers);

                    init();
                } catch (err) {
                    console.error('Could not find any managers', err);
                }
                break;
        }

        switch (answer.choice) {
            case 'add a department':
                try {
                    const answers = await inquirer.prompt(departmentQuestions);
                    const newDepartment = await createNewDepartment(answers);
                    console.log(newDepartment);

                    init();

                } catch (err) {
                    console.error(`Fialed to create department: ${newDepartment} `, err);
                }
                break;
        }
        switch (answer.choice) {
            case 'add a role':
                try {
                    const departments = await getDepartments();
                    roleQuestions[2].choices = departments;

                    const answers = await inquirer.prompt(roleQuestions);

                    const newRole = await createNewRole(answers);
                    console.log(newRole);

                    init();

                } catch (err) {
                    console.error(`failed to create Role: ${newRole} `, err);
                }
                break;
        }
        switch (answer.choice) {
            case 'add an employee':
                try {
                    const roles = await getRoles();
                    employeeQuestionsB[0].choices = roles;
                    
                    combinedQuestions = [
                        ...employeeQuestionsA,
                        ...employeeQuestionsB
                    ];
                    
                    const answers = await inquirer.prompt(combinedQuestions);

                    const newEmployee = await createNewEmployee(answers);
                    console.log(newEmployee);

                    init();

                } catch (err) {
                    console.error('Failed to add employee: ', err)
                }
                break;
        }
        switch (answer.chioce) {
            case 'update an employee role':
                try {
                    const employees = await getEmployees();
                    console.log('before roles')
                    const roles = await getRoles();
                    console.log('after roles')
                    updateQuestions[0].choices = employees;
                    updateQuestions[1].choices = roles;

                    const answers = await inquirer.prompt(updateQuestions);

                    const updatedEmployee = await updateEmployee(answers);
                    console.log(updatedEmployee);

                    init();

                } catch (err) {
                    console.error('Failed to update employee');
                }
                break;
        }
        switch (answer.choice) {
            // this last switch case breaks the cycle if the user selects quit.
            case 'quit':
                try {
                    console.log('thank you! Get some rest and stay hydrated');
                    process.exit();
                } catch (err) {
                    console.error('You are trapped! call for help!');
                }
                break;
        }
    });
}

// call the init fucntion on npm start
init();
