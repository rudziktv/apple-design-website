import { useNavigate } from "react-router-dom";
import Button from "../apple-design/components/Buttons/Button";
import Menu from "../apple-design/components/Menu/Menu";
import { ACCOUNT_PAGE_LINK, LOGIN_PAGE_LINK } from "../router/links";
import supabase from "../supabase/supabase-client";

const HomeDropdown = () => {
    const navigate = useNavigate();

    return (
        <Menu
            options={[
                {
                    title: "Application",
                    icon: <i className="ri-list-check" />,
                },
                {
                    title: "Account",
                    icon: <i className="ri-user-line" />,
                    onClick: () => navigate(ACCOUNT_PAGE_LINK),
                },
                {
                    title: "Log Out",
                    icon: <i className="ri-logout-box-r-line" />,
                    color: "red",
                    onClick: async () => {
                        await supabase.auth.signOut();
                        // navigate(LOGIN_PAGE_LINK);
                    },
                },
            ]}
        >
            <Button
                title="Account"
                id="account"
                buttonType="primary"
                trailingIcon={<i className="ri-arrow-down-s-fill"></i>}
            />
        </Menu>
    );
};

export default HomeDropdown;
