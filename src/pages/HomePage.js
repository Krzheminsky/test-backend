import { Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./login/LoginPage"
import Main from "pages/main/Main";
import { useAuth } from "hooks/use-auth";

const HomePage = () => {

    const { isAuth } = useAuth();

    return (
        isAuth ? (
            <div>
                <Main />
            </div>
        ) : (
            <div>
                <Routes >
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={< Navigate to="/login" />} />
                </Routes>

            </div>
        )
    )
}

export default HomePage