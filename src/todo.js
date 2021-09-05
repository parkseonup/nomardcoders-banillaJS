// to do list

const todoForm = document.querySelector(".todo_form");
const todoInput = document.querySelector("#todo_input");
const todoList = document.querySelector(".todo_list");

const TODOS_KEY = "todos";
let todos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

//delte list item
function handleClickDelete(event) {
    const deleteLi = event.target.parentElement.parentElement;
    deleteLi.remove();
    todos = todos.filter((todoRemove) => todoRemove.id !== parseInt(deleteLi.id));
    saveTodo();
}

// todo list 양식
function paintTodo(todoValue) {
    const li = document.createElement("li");
    li.id = todoValue.id;
    const deleteBtn = document.createElement("button");
    const i = document.createElement("i");

    deleteBtn.classList.add("delete_btn");
    i.classList.add("fas", "fa-times");

    const createLi = todoList.appendChild(li);
    createLi.innerText = todoValue.text;
    createLi.appendChild(deleteBtn);
    deleteBtn.appendChild(i);  

    deleteBtn.addEventListener("click", handleClickDelete);
}

function handleSubmitTodo(event) {
    event.preventDefault(); // submit시 새로고침 안하게
    const todoValue = todoInput.value;
    if(todoValue !== "") {
        todoInput.value = "";
        const todoValueOj = {
            text: todoValue,
            id: Date.now()
        }
        todos.push(todoValueOj);
        paintTodo(todoValueOj);
        saveTodo();
    } else {
        return;
    }
}

todoForm.addEventListener("submit", handleSubmitTodo);

const getTodo = localStorage.getItem(TODOS_KEY);

if(getTodo !== "") {
    const parsedTodo = JSON.parse(getTodo);
    todos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
