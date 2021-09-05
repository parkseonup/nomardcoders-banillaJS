// to do list

const todoForm = document.querySelector(".todo_form");
const todoInput = document.querySelector("#todo_input");
const closeBtn = document.querySelector(".close_btn");
const todoList = document.querySelector(".todo_list");

function handleSubmitTodo(event) {
    event.preventDefault(); // submit시 새로고침 안하게
    const todoValue = todoInput.value;
    //localStorage.setItem("todo", `${.push(todoValue)}`); // 로컬 스토리지에 todo input 값 array로 저장

    // todo input값 출력
    const createLi = document.createElement("li");
    const createBtn = document.createElement("button");
    const createI = document.createElement("i");
    const appendLi = todoList.appendChild(createLi);
    appendLi.innerText = todoValue;
    const appendBtn = appendLi.appendChild(createBtn);
    const appendI = appendBtn.appendChild(createI);

    appendBtn.classList.add("close_btn");
    appendI.classList.add("fas", "fa-times");
}

todoForm.addEventListener("submit", handleSubmitTodo);