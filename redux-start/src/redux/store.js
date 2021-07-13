import todoApp from "./reducers/";
import { applyMiddleware, createStore } from "redux";

function middleware1(store) {
  console.log("middleware1", 0);
  return (next) => {
    console.log("middleware1", 1, next);
    // action이 dispatch 될 때마다 아래의 return 함수가 실행
    return (action) => {
      console.log("middleware1", 2); // (1)
      const returnValue = next(action); // (2) middleware2로 넘김
      console.log("middleware1", 3); // (6)
      return returnValue;
    };
  };
}

function middleware2(store) {
  console.log("middleware2", 0);
  return (next) => {
    console.log("middleware2", 1, next);
    // action이 dispatch 될 때마다 아래의 return 함수가 실행
    return (action) => {
      console.log("middleware2", 2); // (3)
      const returnValue = next(action); // (4) next 실행 시에 dispatch 완료,
      console.log("middleware2", 3); // (5)
      return returnValue;
    };
  };
}

const store = createStore(todoApp, applyMiddleware(middleware1, middleware2));

export default store;
