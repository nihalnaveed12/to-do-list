import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtodos = await inquirer.prompt([
        {
            name: "first",
            type: "input",
            message: "what would you like to add in your todos",
        },
        {
            name: "second",
            type: "confirm",
            message: "whould you like to add more in your todos",
            default: "true",
        },
    ]);
    todos.push(addtodos.first);
    console.log(todos);
    condition = addtodos.second;
}
