import * as React from "react";

import {ModeContext} from "./ModeContext";

const options = [
  {value: 'dark', label: 'dark'},
  {value: 'light', label: 'light'},
  {value: 'other', label: 'other'},
];

export const ModeSelect = () => {
  const {mode, setMode} = React.useContext(ModeContext);

  const onModeChange = React.useCallback((e) => {
    setMode(e.target.value);
  }, [setMode]);

  return <select name="select" value={mode} onChange={onModeChange}>
    {options.map((item) => <option key={item.value} value={item.value} label={item.label}/>)}
  </select>;
};