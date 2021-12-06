import * as React from "react";
import {useDispatch} from "react-redux";

import {updateCounter} from "./counterActions";

export const UpdateCounterPanel = () => {
  const dispatch = useDispatch();
  const [value, setState] = React.useState(0);

  const onAddClick = () => {
    dispatch(updateCounter(value));
  };

  const onChange = (e) => {
    setState(e.target.value);
  };

  return <div>
    <h2>UpdateCounterPanel</h2>
    <input type="text" value={value} onChange={onChange}/>
    <input type="button" value="Update" onClick={onAddClick}/>
  </div>;
};