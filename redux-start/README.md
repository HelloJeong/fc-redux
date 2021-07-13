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
