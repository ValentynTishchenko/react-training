import {INCREMENT, DECREMENT, UPDATE_COUNTER} from './counterActions'

const initState = {
  count: 0
};

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case DECREMENT: {
      return {...state, count: state.count - 1};
    }
    case INCREMENT: {
      return {...state, count: state.count + 1};
    }
    case UPDATE_COUNTER: {
      return {...state, count: action.payload.value};
    }
    default:
      return state;
  }
};