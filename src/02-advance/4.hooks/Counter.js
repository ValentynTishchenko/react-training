import * as React from 'react';


const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export const Counter = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useLayoutEffect(() => {
      // If you need to mutate the DOM and/or do need to perform measurements
      console.log('dom updated');

    }, [state.count]);

    React.useEffect(() => {
      // If you don't need to interact with the DOM at all or your DOM changes are unobservable (seriously, most of the time you should use this).
    }, [state.count]);

    return (
      <section>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        {' '}Count: {state.count}{' '}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </section>
    );
  }
;