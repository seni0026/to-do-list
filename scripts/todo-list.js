// create an array to store the todos
// 
const todoList = [{
    name: 'make dinner',
    dueDate: '2024-11-25'
}, {
    name: 'do laundry',
    dueDate: '2024-11-25'
}];

// display the todo list each time the page loads
displayTodoList ();

// create a function with a for loop to output the todo (input value) on the screen
function displayTodoList () {
    // create a variable that will get the html code from the loop
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        // create a variable to store the value (object) from the array
        const activityObject = todoList[i];

        // get and store the values from the object into variables
        // destructing is when you take the name property from the object and puts it in a variable with the same name
        // const name = activityObject.name;
        // const dueDate = activityObject.dueDate;
        // const {dueDate} = activityObject;
        const {name, dueDate} = activityObject;
    
        // craete generate html code for each todo with a delete button
        // use .splice to remove an item from the array (todo list)
        // .splice takes 2 numbers, 1 is the index for the item you want to delete
        // the 2 is how many values to remove at the specific index
        // call the dispayTodoList function to show to list after deletion
        const html  = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                displayTodoList ();
            " class="delete-todo-btn">Delete</button>
            `;
    
        //store the html code into the todoListHtml variable
        todoListHtml += html;
    }

    // bring the div with the class of js-todo-list into javascript in order to add the todo to the screen
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml;
}

// create a function to get the value from the input field
function addTodo () {

    // store the input field into a variable
    const inputElement = document.querySelector('.js-input');

    // get the value from the input field
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date');

    const dueDate = dateInputElement.value;

    // put the value from the input field into the array (use .push)
    todoList.push({
        // if the property and the variable name (value) are the same, type it once
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });

    // reset the text in the input field after the button is clicked
    inputElement.value = '';
    dateInputElement.value = '';

    // call the function displayTodoList to display the list on the screen
    displayTodoList ();
}

// Main idea of JavaScript is to 
// 1. Save the data
// 2. Generate the HTML
// 3. Make it interative 
