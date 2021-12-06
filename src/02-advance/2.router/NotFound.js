import {useLocation, useNavigate} from 'react-router-dom';
import {} from 'history';

import {ApplicationRoutes} from "./constants";

export const NotFoundPage = () => {
  // hash: ""
  // key: "zkl1ql5e"
  // pathname: "/not-found"
  // search: ""
  // state: null
  const location = useLocation();
  const navigate = useNavigate(); // const history = useHistory();

  const onClick = () => {
    navigate(ApplicationRoutes.HOME, {state: {redirect_from: ApplicationRoutes.NOT_FOUND}});
  };

  return <section>
    <p>Currently you are on <b>{location.pathname}</b> route</p>
    <input type="button" onClick={onClick} value="Go back to home page"/>
  </section>;
};