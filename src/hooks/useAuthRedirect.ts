import { useEffect } from "react";
import { useStoredAuth } from "./useStoredAuth";
import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE_LINK } from "../router/links";

const useAuthRedirect = (url?: string) => {
    const auth = useStoredAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate(url ? url : LOGIN_PAGE_LINK);
        }
    }, [auth]);
};

export default useAuthRedirect;
