import { MainColors } from "../../colors/MainColorTypes";
import "./MenuItem.css";

const MenuItem = ({ title, icon, color = "none", onClick }: MenuItemProps) => {
    return (
        <div className={`menu-item ${color}`} onClick={(e) => onClick?.(e)}>
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
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default MenuItem;
