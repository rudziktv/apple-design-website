import "./Toggle.css";

const Toggle = ({ value, onChange }: ToggleProps) => {
    return (
        <div
            className={`toggle-track ${value && "toggled"}`}
            onClick={() => onChange?.(!value)}
        >
            <div className="toggle-thumb" />
        </div>
    );
};

export interface ToggleProps {
    value?: boolean;
    onChange?: (value: boolean) => void;
}

export default Toggle;
