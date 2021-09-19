// import { Redirect } from 'react-router-dom';
import Login from "../pages/login/index.jsx";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
// import { Redirect } from 'react-router-dom';
const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    // exact: true,
    component: Login,
    // render: () => <Login></Login>,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

export default routes;
