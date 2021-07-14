import axios from "axios";

// users
export const GET_USERS_START = "redux-start/users/GET_USERS_START"; // github api 호출을 시작하는 것을 의미(로딩)
export const GET_USERS_SUCCESS = "redux-start/users/GET_USERS_SUCCESS"; // github api 호출의 응답이 성공적인 경우(로딩 후 데이터 세팅)
export const GET_USERS_FAIL = "redux-start/users/GET_USERS_FAIL"; // github api 호출의 응답이 실패인 경우(로딩 후 에러 세팅)

const GET_USERS = "redux-start/users/GET_USERS";

/* 미들웨어가 자동으로 생성해주는 타입 */
export const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "redux-start/users/GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED";

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

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  // rejected 확인은 promise를 reject 시키면 됨(주소 바꾸기 등)
  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

export function getUsersThunk() {
  // 3번째 extraArg로 들어오는 history를 분해할당하여 받음
  return async (dispatch, getState, { history }) => {
    try {
      console.log(history);
      dispatch(getUsersStart());
      // sleep
      await sleep(2000);
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
      history.push("/");
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}
