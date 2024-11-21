// create an array to store the todos
const todoList = ['make dinner', 'do laundry'];

// display the todo list each time the page loads
displayTodoList ();

// create a function with a for loop to output the todo (input value) on the screen
function displayTodoList () {
    // create a variable that will get the html code from the loop
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        // create a variable to store the value from the array
        const activity = todoList[i];
    
        // craete generate html code for each todo
        const html  = `<p>${activity}</p>`;
    
        //store the html code into the todoListHtml variable
        todoListHtml += html;
    }

    // console.log(todoListHtml);
    
    
    // bring the div with the class of js-todo-list into javascript in order to add the todo to the screen
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml;
}

// create a function to get the value from the input field
function addTodo () {

    // store the input field into a variable
    const inputElement = document.querySelector('.js-input');

    // get the value from the input field
    const todo = inputElement.value;

    // put the value from the input field into the array (use .push)
    todoList.push(todo);

    // reset the text in the input field after the button is clicked
    inputElement.value = '';

    console.log(todoList);

    // call the function displayTodoList to display the list on the screen
    displayTodoList ();
}

// Main idea of JavaScript is to 
// 1. Save the data
// 2. Generate the HTML
// 3. Make it interative 

const nums = [10,20,30];

nums[2] = 99;

console.log(nums);

// create a function that returns the last value in an array
function getLastValue(array) {
    const lastValue = array.length - 1;

    return array[lastValue];
}

console.log(getLastValue([1, 20, 22, 24, 5]));

console.log(getLastValue(['hi', 'hello', 'good']));

// create a function that swaps the first and last value in an array
function arraySwap (array) {
    // get the index for the last value
    const lastIndex = array.length - 1;

    // save the values first before
    // swapping. Otherwise, if swap directly,
    // one of the values would be lost.
    const firstValue = array[0];
    const lastValue = array[lastIndex];

    // swap values
    array[0] = lastValue;
    array[lastIndex] = firstValue;

    return array;
}

console.log(arraySwap ([1, 20, 22, 24, 5]));

console.log(arraySwap (['hi', 'hello', 'good']));

for (let i = 0; i <= 10; i+2) {
    console.log(i);
}