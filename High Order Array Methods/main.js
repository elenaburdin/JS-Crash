const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];



// High order array method

// forEach, Map, Filter
todos.forEach(function (todo) {
    console.log(todo.text);
});

// Map
const todoText = todos.map(function (todo) {  // returns an array
    return todo.text;
});
console.log(todoText);

// filter
const todoCompleted = todos.filter(function (todo) {  // returns todos that are completed
    return todo.isCompleted === true;
});
console.log(todoCompleted);


const todoFilterMap = todos.filter(function (todo) {  // returns todos that are completed
    return todo.todoFilterMap === true;
}).map(function (todo) {
    return todo.text;
})
console.log(todoFilterMap);



