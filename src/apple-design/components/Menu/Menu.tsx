import { useRef, useState } from "react";
import "./Menu.css";
import MenuItem, { MenuItemProps } from "./MenuItem";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

const Menu = ({ children, options }: MenuProps) => {
    const ref = useRef(null);
    const [opened, setOpened] = useState(false);

    useOutsideAlerter(ref, () => {
        setOpened(false);
    });

    return (
        <div className="menu">
            <div
                className="menu-trigger"
                ref={ref}
                onClick={() => setOpened(!opened)}
            >
                {children}
                <div
                    className={`menu-items ${opened && "opened"}`}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {options.map((option, index) => (
                        // <>
                        // <hr
                        //     className="menu-item-divider"
                        //     key={Math.sqrt(index)}
                        // />
                        // </>
                        <MenuItem {...option} key={index} />
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
