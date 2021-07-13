export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

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

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll() {
  return { type: SHOW_ALL };
}

export function showComplete() {
  return { type: SHOW_COMPLETE };
}

// users
export const GET_USERS_START = "GET_USERS_START"; // github api 호출을 시작하는 것을 의미(로딩)
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"; // github api 호출의 응답이 성공적인 경우(로딩 후 데이터 세팅)
export const GET_USERS_FAIL = "GET_USERS_FAIL"; // github api 호출의 응답이 실패인 경우(로딩 후 에러 세팅)

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}
export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}
export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}
