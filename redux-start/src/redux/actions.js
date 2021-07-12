const ADD_TODO = "ADD_TODO";

function addToDo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}
