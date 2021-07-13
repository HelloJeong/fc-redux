export const ADD_TODO = "ADD_TODO";

export function addToDo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}
