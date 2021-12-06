import * as React from "react";

import {Link} from "react-router-dom";

import {ApplicationRoutes} from './constants';

export const Header = () => {
  return <header>
    <ul>
      <li><Link to={ApplicationRoutes.HOME}>Home</Link></li>
      <li><Link to={ApplicationRoutes.USERS}>Users</Link></li>
    </ul>
  </header>;
};