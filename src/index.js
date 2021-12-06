import React from 'react';
import ReactDOM from 'react-dom';

import {RootComponent} from "./02-advance/1.context";
// import {RootComponent} from "./02-advance/2.router";
// import {RootComponent} from "./02-advance/3.redux";
// import {RootComponent} from "./02-advance/4.hooks";

ReactDOM.render(
  <React.StrictMode>
    <RootComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);