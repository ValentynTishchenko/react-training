import * as React from "react";

const initValue = {
  mode: 'dark',
};

export const ModeContext = React.createContext(initValue);

export const ModeContextProvider = ({children}) => {
  const [mode, setMode] = React.useState(initValue.mode);

  return <ModeContext.Provider value={{mode, setMode}}>
    {children}
  </ModeContext.Provider>;
};

export const UserAuthContext = React.createContext({});