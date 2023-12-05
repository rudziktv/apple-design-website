import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStoredAuth } from "../../../hooks/useStoredAuth";
import { LOGIN_PAGE_LINK } from "../../../router/links";

const AccountPage = () => {
    const auth = useStoredAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate(LOGIN_PAGE_LINK);
        }
    }, [auth]);

    return (
        <div className="navbar-subpage">
            <div
                className="scrollable"
                style={{
                    gap: "0.7rem",
                }}
            >
                <span>Enter account.</span>
            </div>
        </div>
    );
};

export default AccountPage;
