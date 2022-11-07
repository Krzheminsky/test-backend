import { useSelector } from "react-redux/es/exports";

export function useAuth() {
    const token = useSelector(state => state.user.token);

    return {
        isAuth: !!token,
        token,
    };
}