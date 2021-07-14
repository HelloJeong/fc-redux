const ADD_TODO = "redux-start/todos/ADD_TODO";
const COMPLETE_TODO = "redux-start/todos/COMPLETE_TODO";

// { type: ADD_TODO, text }
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

// { type: COMPLETE_TODO, index: 3 }
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

const initialState = [];
// [{text, done: false}]
export default function reducer(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }
  return previousState;
}
