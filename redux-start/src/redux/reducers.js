import { ADD_TODO } from "./actions";

// state => ['', '', ...];

const initialState = [];

// init
function todoApp(previousState = initialState, action) {
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
}
