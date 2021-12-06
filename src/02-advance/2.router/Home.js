import * as React from "react";
import {useLocation} from "react-router-dom";

import {Header} from "./Header";

export const Home = () => {
  const {state} = useLocation();

  console.log(state);

  return <section>
    <Header/>
    <h1>Home</h1>
    {state?.redirect_from && <p>You redirected from {state.redirect_from}</p>}
  </section>;
};


