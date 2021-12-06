import * as React from "react";

import {ModeContext} from "./ModeContext";

export const HomePage = () => {
  const {mode} = React.useContext(ModeContext);

  console.log('mode: ', mode);

  return <section>
    <p>Current mode is: <b>{mode}</b></p>
  </section>;
};
