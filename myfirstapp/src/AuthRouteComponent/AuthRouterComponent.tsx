import {ReactNode} from "react";
import { Navigate } from "react-router-dom";

interface AuthRouteComponentProps {
    isAuthenticated:boolean,
    children:ReactNode
}


export const AuthRoute =({isAuthenticated,children}:AuthRouteComponentProps) =>{

    let token = localStorage.getItem("token");

    if(token && token !== "undefined" && token !== "null"){
        return <>{children}</>;

    }
    else {
        return <Navigate to="/logging" replace />;
    }
}