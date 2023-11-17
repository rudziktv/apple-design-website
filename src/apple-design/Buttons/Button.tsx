import "./Button.css";

const Button = ({
    title,
    icon,
    buttonType = "semi",
    buttonSize = "medium",
    ...props
}: ButtonProps) => {
    return (
        <button
            {...props}
            className={`button ${props.className} ${buttonType} ${buttonSize}`}
        >
            {icon && <div className="button-icon">{icon}</div>}
            {title && <span>{title}</span>}
        </button>
    );
};

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    icon?: React.ReactNode;

    buttonType?: "primary" | "semi" | "container" | "text";
    buttonSize?: "small" | "medium" | "large";
}

export default Button;
