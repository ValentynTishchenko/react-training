import {LOAD_TODOS_ERROR, LOAD_TODOS_SUCCESS, LOAD_TODOS, REMOVE_TODO} from './todosActions';

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS: {
      return {...state, isLoading: true, isError: false, todos: []};
    }
    case LOAD_TODOS_SUCCESS: {
      return {...state, isLoading: false, isError: false, todos: action.payload};
    }
    case LOAD_TODOS_ERROR: {
      return {...state, isLoading: false, isError: true, todos: []};
    }
    case REMOVE_TODO: {
      return {...state, todos: state.todos.filter((item) => item.id !== action.payload)};
    }
    default: {
      return state;
    }
  }
};