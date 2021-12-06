import * as React from "react";
import {Link} from "react-router-dom";

import {Header} from "./Header";
import {USERS} from "./mocks";


export const UsersPage = () => {

  return <section>
    <Header/>
    <h1>Home</h1>
    <ul>
      {USERS.map((user) => (<li key={`user-link-${user.id}`}><Link to={`/users/${user.id}`}>{user.name}</Link></li>))}
    </ul>
  </section>;
};
