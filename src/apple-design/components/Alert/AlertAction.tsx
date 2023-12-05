import "./AlertAction.css";

const AlertAction = ({
    title,
    onClick,
    color = "primary",
}: AlertActionProps) => {
    return (
        <button
            className="alert-action"
            style={{
                color: `var(${
                    color == "error" ? "--error-color" : "--primary-color"
                })`,
            }}
        >
            Action
        </button>
    );
};

export interface AlertActionProps {
    title?: string;
    onClick?: () => void;
    color?: "primary" | "error";
}

export default AlertAction;
