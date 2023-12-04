import Button from "../apple-design/components/Buttons/Button";
import Menu from "../apple-design/components/Menu/Menu";

const HomeDropdown = () => {
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
                },
                {
                    title: "Log Out",
                    icon: <i className="ri-logout-box-r-line" />,
                    color: "red",
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
