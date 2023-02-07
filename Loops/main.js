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
        isCompleted: true
    }
];

// For Loop
for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

// While
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

for (let i = 0; i <= todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.lof(todo);
}

// High order array method
