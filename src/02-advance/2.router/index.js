import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// useful link:
// https://reactrouter.com/docs/en/v6/getting-started/tutorial
// https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

import {ApplicationRoutes} from './constants';

import {Home,} from './Home';
import {UserPage} from './UserPage';
import {UsersPage} from './UsersPage';
import {NotFoundPage} from "./NotFound";

export const RootComponent = () => {
  return <BrowserRouter>
    <Routes>
      <Route path={ApplicationRoutes.HOME} element={<Home/>}/>
      <Route path={ApplicationRoutes.USERS} element={<UsersPage/>}/>
      <Route path={ApplicationRoutes.USER} element={<UserPage/>}/>
      <Route path={ApplicationRoutes.NOT_FOUND} element={<NotFoundPage/>}/>

      <Route path="*" element={<Navigate to={ApplicationRoutes.NOT_FOUND}/>}/>
    </Routes>
  </BrowserRouter>;

};