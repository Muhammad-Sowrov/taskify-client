import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home/Home";
import Error from "../Pages/Error/Error";

const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
			]
		}
])
export default Router;