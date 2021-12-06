import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {counterReducer} from "./couner/counterReducer";
import {todosReducer} from "./users/todosReducer";

function logger({getState}) {
  return next => action => {
    console.log('will dispatch', action);

    const returnValue = next(action);

    console.log('state after dispatch', getState());

    return returnValue;
  };
}


const rootReducer = combineReducers(
  {
    counter: counterReducer,
    todos: todosReducer,
  },
);

export const store = createStore(rootReducer, ['React app'],
  applyMiddleware(thunk));