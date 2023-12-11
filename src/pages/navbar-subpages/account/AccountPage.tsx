import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStoredAuth } from "../../../hooks/useStoredAuth";
import { LOGIN_PAGE_LINK } from "../../../router/links";
import Button from "../../../apple-design/components/Buttons/Button";
import useAlert from "../../../hooks/useAlert";
import supabase from "../../../supabase/supabase-client";

const AccountPage = () => {
    const auth = useStoredAuth();
    const navigate = useNavigate();

    const confirmClearLocal = useAlert(
        "Confirmation",
        "Are you sure you want to clear local data? You will be automaticlly sign out.",
        (set) => [
            {
                title: "Yes",
                onClick: async () => {
                    localStorage.clear();
                    await supabase.auth.signOut();
                    set(false);
                    navigate(LOGIN_PAGE_LINK);
                },
            },
            {
                title: "No",
                onClick: () => {
                    set(false);
                },
                color: "error",
            },
        ],
        "horizontal"
    );

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

                <Button
                    title="Clear Local Data"
                    leadingIcon={<i className="ri-delete-bin-line" />}
                    onClick={() => confirmClearLocal(true)}
                />

                <Button
                    leadingIcon={<i className="ri-article-line" />}
                    title="Clear Applications Data"
                    onClick={() => {}}
                    disabled
                />
            </div>
        </div>
    );
};

export default AccountPage;
