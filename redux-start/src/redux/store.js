import todoApp from "./modules/";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import history from "../history";
import { routerMiddleware } from "connected-react-router";

// const store = createStore(todoApp, composeWithDevTools(applyMiddleware(middleware1, middleware2)));
const store = createStore(
  todoApp,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ history }), promise, routerMiddleware(history)))
);

export default store;
