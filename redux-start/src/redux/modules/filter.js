import { createActions, handleActions } from "redux-actions";

// console.log(createAction("Hello"));
// console.log(createAction("Hello")());
// console.log(createAction("Hello")("Hi!"));

// const actions = createActions("SHOW_ALL", "SHOW_COMPLETE", { prefix: "redux-start/filter" });
export const { showAll, showComplete } = createActions("SHOW_ALL", "SHOW_COMPLETE");
// console.log(actions);

const initialState = "ALL";

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "COMPLETE",
  },
  initialState,
  { prefix: "redux-start/filter" }
);

console.log(reducer);

export default reducer;
