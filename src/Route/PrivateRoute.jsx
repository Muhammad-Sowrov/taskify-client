import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <span className="loading loading-ring loading-lg text-3xl"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;