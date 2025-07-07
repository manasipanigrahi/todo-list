// Get DOM elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add a new todo
addBtn.addEventListener('click', addTodo);
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTodo();
});

function addTodo() {
    const task = input.value.trim();
    if (task === '') return;
    const li = document.createElement('li');
    li.textContent = task;

    // Toggle completed on click
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Add delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
    input.value = '';
}
