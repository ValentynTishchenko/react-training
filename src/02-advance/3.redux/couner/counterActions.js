export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';
export const UPDATE_COUNTER = 'UPDATE_COUNTER';

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const updateCounter = (value) => {
  return {
    type: UPDATE_COUNTER,
    payload: {value}
  };
};