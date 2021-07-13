import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { addToDo, completeTodo, showAll, showComplete } from "./redux/actions";

// state의 변화가 일어나면 함수가 실행됨
// const unsubscribe = store.subscribe(() => {
store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store);
// console.log(store.getState()); // 초기에 빈 배열이 나오는 이유
store.dispatch(addToDo("coding"));
store.dispatch(addToDo("sports"));
store.dispatch(addToDo("game"));
store.dispatch(completeTodo(2));
store.dispatch(showAll());
store.dispatch(showComplete());
// unsubscribe();
// store.dispatch(addToDo("coding"));
// store.dispatch(addToDo("sports"));
// store.dispatch(addToDo("game"));
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
