import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/modules/todos";

// const TodoFormContainer = connect(
//   (state) => ({}),
//   (dispatch) => ({
//     add: (text) => {
//       dispatch(addTodo(text));
//     },
//   })
// )(TodoForm);

export default function TodoFormContainer() {
  const dispatch = useDispatch();

  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
}
