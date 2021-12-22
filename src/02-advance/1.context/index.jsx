import * as React from 'react';

import {ModeContextProvider} from "./ModeContext";
import {ModeSelect} from "./ModeSelect";
import {HomePage} from "./HomePage";

// useful link:
// https://dmitripavlutin.com/react-context-and-usecontext/#1-how-to-use-the-context
// https://www.toptal.com/react/react-context-api

const HeaderComponent = () => {
  console.log('Rerender from HeaderComponent');

  return <header>Hello from header</header>;
};

const Layout = ({children}) => {
  // only to add extra nesting
  return <section>
    {children}
  </section>;
};

const initValue = {
  mode: 'dark',
};


const ModeContext = React.createContext(initValue);
const UserAuthContext = React.createContext(initValue);

export const RootComponent = () => {
  const [mode, setMode] = React.useState(initValue.mode);

  return <ModeContext.Provider value={{mode, setMode}}>
    <Layout>
      <HeaderComponent/>
      <ModeSelect/>
      <HomePage/>
    </Layout>
  </ModeContext.Provider>;
};