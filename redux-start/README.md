# <img src="https://ko.redux.js.org/img/redux.svg" width="50" /> [**Redux**](https://redux.js.org/ "Redux 공식 홈페이지")

_Fastcampus Redux 강의 내용을 정리해둔 자료입니다._

## Action

- 리덕스의 액션이란?

  - 그냥 객체(Object)다.
  - 두 가지 형태의 액션이 있다.
    - {type: 'TEST'} // payload 없는 액션
    - {type: 'TEST', params: 'hello'} // payload 있는 액션
  - type만이 필수 프로퍼티이며, type은 문자열

- 리덕스의 액션 생성자(Action Creator)

  ```jsx
  function 액션생성자(...args) {
    return 액션;
  }
  ```

- 리덕스의 액션은 어떤 일을?

  1. 액션 생성자를 통해 만들어낸 액션 객체를 리덕스 스토어에 보낸다.
  1. 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경된다.
  1. 변경된 상태 값에 의해 상태를 이용하고 있는 컴포넌트가 변경된다.

  - 액션은 스토어에 보내는 일종의 인풋이라 생각할 수 있다.

- 액션 준비물

  - 액션의 타입을 정의하여 변수로 빼는 단계(안해도 되지만 `실수 방지`)
  - 액션 객체를 만들어 내는 함수를 만드는 단계

## Reducers

- 리덕스의 리듀서란?
  - 액션을 주면, 그 액션이 적용되어 달라진(안달라질수도) 결과를 만들어 줌
  - 그냥 함수(Pure Function)다.
    - Pure Function? 항상 같은 인풋을 받으면 항상 같은 결과를 내는 함수
    - Immutable해야함. 리듀서를 통해 state가 달라졌음을 리덕스가 인지하는 방식
  ```jsx
  function 리듀서(previousState, action) {
    return newState;
  }
  ```
  - prevState, newState는 다른 참조를 가지도록 해야한다.(Immutable)

## createStore

- 스토어를 만드는 함수

```jsx
const store = createStore(리듀서);
```

- 현재 프로젝트에서 getStore()를 초기에 호출할 때 빈 배열이 나오는 이유
  - todoApp이 최초로 실행되면서 initalState가 반환되기 때문

## combineReducers

## Redux를 React에 연결

- `react-redux` 안쓰고 하기

  1. 단일 store를 만들고
  1. subscribe와 getState를 이용하여,
  1. 변경되는 state 데이터를 얻어,
  1. props로 계속 아래로 전달

  - `componentDidMount` => `subscribe`
  - `componentWillUnmount` => `unsubscribe`

- `react-redux`
  - Provider 컴포넌트를 제공
  - connect HOC 함수를 통해 'container'를 만들어줌
    - container는 store의 state와 dispatch를 연결한 컴포넌트에 props로 넣어주는 역할을 함
    - 필요한 것
      - 어떤 state를 어떤 props에 연결할 것인지 정의
      - 어떤 dispatch를 어떤 props에 연결할 것인지 정의
      - 그 props를 보낼 컴포넌트를 정의
  - 또는 connect 대신 useSelector, useDispatch hook을 사용

## Async Action with Redux

- 비동기 작업 어디서?가 제일 중요하다.
  - 액션 분리(start, success, fail 등)
  - **_dispatch를 할 때 해주면 된다._**
    - 당연히 리듀서는 동기적인 것(Pure)
    - dispatch도 동기적인 것
  - **컴포넌트가 해주는 것은 로직이 복잡해질 수 있기 때문에 컨테이너에서 해준다!**

## Redux middleware([참조](https://redux.js.org/understanding/history-and-design/middleware#understanding-middleware))

- 미들웨어가 "디스패치"의 앞 뒤에 코드를 추가할 수 있게 해줌
- 미들웨어가 여러 개면 미들웨어가 "순차적으로" 실행됨
- 두 단계가 있음
  - 스토어를 만들 때 미들웨어를 설정하는 부분
  ```jsx
  import { createStore, applyMiddleware } from redux;
  ```
  - 디스패치가 호출될 때 실제로 미들웨어를 통과하는 부분
- dispatch 메소드를 통해 store로 가고 있는 액션을 가로채는 코드

## redux-devtools([참조](https://github.com/zalmoxisus/redux-devtools-extension))

```bash
npm i redux-devtools-extension -D
```

- chrome `redux devTools` extension 설치

## redux-thunk([참조](https://github.com/reduxjs/redux-thunk))

- 리덕스 미들웨어
- 리덕스에서 비동기 처리를 위한 라이브러리
- 액션 생성자를 활용하여 비동기 처리
- 액션 생성자가 액션을 리턴하지 않고 함수를 리턴

## redux-promise-middleware([참조](https://pburtchaell.gitbook.io/redux-promise-middleware))

## Ducks Pattern([참조](https://github.com/erikras/ducks-modular-redux))

- 규칙

  - 항상 `reducer()`란 이름의 함수를 `export default` 해야한다.
  - 항상 모듈의 action 생성자들을 함수형태로 `export` 해야한다.
  - 항상 `npm-module-or-app/reducer-ACTION_TYPE` 형태의 action 타입을 가져야한다.
  - 외부 reducer가 해당 action들이 발생하는지 계속 기다리거나, 재사용할 수 있는 라이브러리로 퍼블리싱할 경우에는 action 타입들을 `UPPER_SNAKE_CASE`로 export 할 수 있다.

- 장점
  - 모듈별 작업이 되기 때문에 작업의 수월함이 있음

## react-router와 redux 함께 쓰기([참조](https://github.com/supasate/connected-react-router))

- redux에서 history와 같은 것을 어떻게 쓸지
- `createBrowserHistory()`
- BrowserRouter는 브라우저 history를 자체적으로 사용하기 때문에 우리가 만든 history는 호환이 안됨

  - BrowserRouter 대신 Router를 사용

- reducer로 router를 통째로 연결하는 방법

  ```bash
  npm i connected-react-router
  ```

  - 리듀서에 `router: connectRouter(history)`를 저장
  - 스토어에 `routerMiddleware(history)`를 미들웨어로 등록
  - dispatch로 history의 함수 등을 사용할 수 있음 `dispatch(push("/todos"))`

## redux-saga([참조](https://redux-saga.js.org))

```bash
npm i redux-saga
```

- 미들웨어
- 제너레이터 객체를 만들어내는 제너레이터 생성 함수를 이용([참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator))
- 사용 방법

  1. 리덕스 사가 미들웨어를 설정
  1. 내가 만든 사가 함수를 등록
  1. 사가 미들웨어를 실행
  1. 사가 함수를 실행할 액션을 디스패치

- effects([참조](https://redux-saga.js.org/docs/basics/Effect))
