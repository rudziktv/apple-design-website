import { useRef, useState } from "react";
import "./Dropdown.css";
import DropdownItem, { IDropdownItem } from "./DropdownItem";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

const Dropdown = ({
    disabled,
    label,
    items,
    value,
    onChange,
}: DropdownProps) => {
    const [opened, setOpened] = useState(false);
    const ref = useRef(null);
    const triggerRef = useRef(null);

    useOutsideAlerter(
        ref,
        () => {
            setOpened(false);
        },
        triggerRef
    );

    return (
        <div
            className={`dropdown ${opened && "opened"} ${
                disabled && "disabled"
            }`}
            ref={triggerRef}
            onClick={() => setOpened(!opened && !disabled)}
        >
            <div className="dropdown-trigger">
                <div className="dropdown-trigger-labels">
                    <span className="dropdown-selected-label">
                        {value?.label}
                    </span>
                    <span className="dropdown-label">{label}</span>
                </div>
                <i className="ri-arrow-down-s-line dropdown-icon dropdown-down-icon" />
            </div>
            <div ref={ref} className={`dropdown-items`}>
                {items?.map((item, index) => (
                    <DropdownItem
                        key={index}
                        label={item.label}
                        onClick={() => onChange?.(item)}
                    />
                ))}
            </div>
        </div>
    );
};

export interface DropdownProps {
    label?: string;
    items?: IDropdownItem[];
    value?: IDropdownItem;
    onChange?: (value: IDropdownItem) => void;
    disabled?: boolean;
}

export default Dropdown;
