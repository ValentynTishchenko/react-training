import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {decreaseCounter, increaseCounter} from "./counterActions";

export const Counter = () => {
  const value = useSelector(({counter}) => counter.count);
  const dispatch = useDispatch();

  const onIncreaseClick = () => {
    dispatch(increaseCounter());
  };

  const onDecreaseClick = () => {
    dispatch(decreaseCounter());
  };


  return <section>
    <h2>Counter</h2>
    <p>Counter value:</p>
    <p>
      <input type="button" value="Decrease" onClick={onDecreaseClick}/>
      {' '}{value}{' '}
      <input type="button" value="Increase" onClick={onIncreaseClick}/>
    </p>
  </section>;
};