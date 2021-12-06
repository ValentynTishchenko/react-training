import {loadTodosAction, loadTodosErrorAction, loadTodosSuccessAction} from "./todosActions";

export const fetchTodos = () => async dispatch => {
  dispatch(loadTodosAction());
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();

    dispatch(loadTodosSuccessAction(data));
  } catch (e) {
    dispatch(loadTodosErrorAction());
  }
};