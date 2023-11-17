import { MainColors } from "../../colors/MainColorTypes";
import "./MenuItem.css";

const MenuItem = ({ title, icon, color = "none" }: MenuItemProps) => {
    return (
        <div className={`menu-item ${color}`}>
            {/* <div className="menu-item-title"> */}
            {title}
            {icon && <div className="menu-item-icon">{icon}</div>}
            {/* </div> */}
        </div>
    );
};

export interface MenuItemProps {
    title: string;
    icon?: React.ReactNode;
    color?: MainColors;
}

export default MenuItem;
