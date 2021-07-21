
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');


todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

function addTodo(event){
    event.preventDefault();

    //todo div

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //todo li

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if (todoInput.value === ""){
        return null
    }

    //done button

    const completedButton = document .createElement ('button');
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);

    //delete button

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);

    //append to list

    todoList.appendChild(todoDiv);

    //clear input value 

    todoInput.value = ""
}

//delete and check 


function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
    
}



