import * as React from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";

import {USERS} from "./mocks";
import {ApplicationRoutes} from "./constants";
import {Header} from "./Header";

export const UserPage = () => {
  const params = useParams(); // contains {id: 'value from url'}
  const navigate = useNavigate();

  const user = USERS.find((user) => user.id === params.id);

  if (!user) {
    return <Navigate to={ApplicationRoutes.NOT_FOUND}/>;
  }

  return <section>
    <Header/>
    <h1>User Info Page</h1>
    <p>id: <b>{user.id}</b></p>
    <p>name: <b>{user.name}</b></p>
    <p>description: <b>{user.description}</b></p>

    <p>
      <input type="button" onClick={() => navigate(-1)} value="Back to list"/>
    </p>
  </section>;
};