import "./AlertAction.css";

const AlertAction = ({
    title,
    onClick,
    color = "primary",
}: AlertActionProps) => {
    return (
        <button
            onClick={onClick}
            className={`alert-action ${color}`}
            // style={{
            //     color: `var(${color == "error" ? "--error-color" : "white"})`,
            // }}
        >
            {title}
        </button>
    );
};

export interface AlertActionProps {
    title?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    color?: "primary" | "error";
}

export default AlertAction;
