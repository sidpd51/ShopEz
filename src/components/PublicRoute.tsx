import { PropsWithChildren, useEffect } from "react"
import { useAuth } from "../customHooks/auth";
import { useNavigate } from "react-router-dom";

type PublicRouteProps = PropsWithChildren;

export const PublicRoute = ({children}: PublicRouteProps) => {
    const user = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate("/", {replace: true});
        }
    },[navigate, user]);
  return children;
}
