import React, { useRef } from "react";

export default function TodoForm({ add }) {
  const inputRef = useRef();
  // const dispatch = useReduxDispatch();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    // dispatch(addTodo(inputRef.current.value));
    add(inputRef.current.value);
  }
}
