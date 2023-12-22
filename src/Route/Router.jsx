import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      }
    ],
  },
]);
export default Router;
