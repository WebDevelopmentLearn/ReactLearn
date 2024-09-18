import {Navigate, useNavigate} from "react-router-dom";


export const ProtectedRoute = ({children}) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    // if (!token) {
    //     navigate("/login", {state: {
    //         message: "You need to be logged in to access this page"
    //     }});
    // }

    return token ? children : <Navigate to="/login" state={"You need to be logged in to access this page"}/>;
}