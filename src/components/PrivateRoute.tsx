import { PropsWithChildren, useEffect } from "react"
import { useAuth } from "../customHooks/auth"
import { useNavigate } from "react-router-dom";

type PrivateRouteProps = PropsWithChildren


export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const user = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate("/signin", { replace: true });
        }
    }, [navigate, user])
    return children
}
