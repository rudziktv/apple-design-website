import "./Checkbox.css";

const Checkbox = ({
    icon = <i className="ri-check-line" />,
    value = true,
}: CheckboxProps) => {
    return (
        <div className={`checkbox ${value && "active"}`}>
            <div className={`checkbox-icon ${value && "active"}`}>{icon}</div>
        </div>
    );
};

export interface CheckboxProps {
    icon?: React.ReactNode;

    value?: boolean;
}

export default Checkbox;
