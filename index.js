let editButton;
let deleteBtn;
let form;
let todoListWrapper;
let todoInputField;

function onEditTodo() {
    alert("i am editing");
  }
  
  function onDeleteTodo() {
    alert(" i am deleting");
  }

  //
function showTodoItem(todo) {
  let li = document.createElement('li');
  li.innerHTML = `      <div>
  <input class="todo__checkbox" type="checkbox" />
  <span class="todo__text"> ${todo} </span>
  <div class="todo__actions--wrapper">
    <button id="edit_btn" class="todo__actions edit__btn">
      edit
    </button>
    <button id="delete_btn" class="todo__actions delete__btn">
      delete
    </button>
  </div>
</div>`

li.classList.add("todo__section--todoItem")
  

todoListWrapper.appendChild(li);
}

function onTodoFormSubmit(event) {
event.preventDefault();

const todoValue = todoInputField.value;

showTodoItem(todoValue);
}
  
  function setup() {
    const editButton = document.getElementById("edit_btn");
    const deleteBtn = document.getElementById("delete_btn");
  
    editButton.addEventListener("click", onEditTodo);
    deleteBtn.addEventListener("click", onDeleteTodo);
  
    console.log(editButton);
  }
  
  setup();