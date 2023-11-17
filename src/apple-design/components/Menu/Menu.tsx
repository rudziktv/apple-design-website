import "./Menu.css";
import MenuItem, { MenuItemProps } from "./MenuItem";

const Menu = ({ children, options }: MenuProps) => {
    return (
        <div className="menu">
            <div className="menu-trigger">
                {children}
                <div className="menu-items">
                    {options.map((option, index) => (
                        <>
                            {index > 0 && (
                                <hr className="menu-item-divider" key={index} />
                            )}
                            <MenuItem key={index} {...option} />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export interface MenuProps {
    children: React.ReactNode;
    options: MenuItemProps[];
}

export default Menu;
