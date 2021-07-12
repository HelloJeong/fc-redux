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

  - function 액션생성자(...args) { return 액션; }

- 리덕스의 액션은 어떤 일을?

  1. 액션 생성자를 통해 만들어낸 액션 객체를 리덕스 스토어에 보낸다.
  1. 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경된다.
  1. 변경된 상태 값에 의해 상태를 이용하고 있는 컴포넌트가 변경된다.

  - 액션은 스토어에 보내는 일종의 인풋이라 생각할 수 있다.

- 액션 준비물

  - 액션의 타입을 정의하여 변수로 빼는 단계(안해도 되지만 `실수 방지`)
  - 액션 객체를 만들어 내는 함수를 만드는 단계

## Reducers

## createStore

## combineReducers

## Redux를 React에 연결
