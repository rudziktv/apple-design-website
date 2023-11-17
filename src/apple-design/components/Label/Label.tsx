import "./Label.css";

const Label = ({ children, label }: LabelProps) => {
    return (
        <div className="label">
            <div className="label-label">{label}</div>
            <div className="label-content">{children}</div>
        </div>
    );
};

export interface LabelProps {
    children: React.ReactNode;
    label: React.ReactNode;
}

export default Label;
