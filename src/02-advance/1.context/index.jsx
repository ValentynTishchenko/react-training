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

export const RootComponent = () => {
  return <ModeContextProvider>
    <Layout>
      <HeaderComponent/>
      <ModeSelect/>
      <HomePage/>
    </Layout>
  </ModeContextProvider>;
};