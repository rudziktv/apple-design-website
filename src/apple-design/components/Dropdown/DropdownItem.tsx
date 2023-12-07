import "./DropdownItem.css";

const DropdownItem = ({ label, onClick }: DropdownItemProps) => {
    return (
        <div className="dropdown-item" onClick={onClick}>
            {label}
        </div>
    );
};

export interface DropdownItemProps {
    label?: string;
    onClick?: () => void;
}

export interface IDropdownItem {
    id: number;
    label: string;
}

export default DropdownItem;
