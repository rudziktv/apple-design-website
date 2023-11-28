import "./Checkbox.css";

const Checkbox = ({
    icon = <i className="ri-check-line" />,
    value = true,
    onChange,
}: CheckboxProps) => {
    return (
        <div
            className={`checkbox ${value && "active"}`}
            onClick={() => onChange?.(!value)}
        >
            <div className={`checkbox-icon ${value && "active"}`}>{icon}</div>
        </div>
    );
};

export interface CheckboxProps {
    icon?: React.ReactNode;

    value?: boolean;
    onChange?: (value: boolean) => void;
}

export default Checkbox;
