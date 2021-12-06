export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_ERROR = 'LOAD_TODOS_ERROR';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';

export const REMOVE_TODO = 'REMOVE_TODO';

export const loadTodosAction = () => {
  return {
    type: LOAD_TODOS
  };
};

export const loadTodosSuccessAction = (items) => {
  return {
    type: LOAD_TODOS_SUCCESS,
    payload: items
  };
};

export const loadTodosErrorAction = () => {
  return {
    type: LOAD_TODOS_ERROR,
  };
};

export const removeTodoAction = (id) => {
  console.log('test: ', id);
  return {
    type: REMOVE_TODO,
    payload: id
  };
};