import "./Button.css";

const Button = ({
    title,
    leadingIcon,
    trailingIcon,
    buttonType = "semi",
    buttonSize = "medium",
    ...props
}: ButtonProps) => {
    return (
        <button
            {...props}
            className={`button ${props.className} ${buttonType} ${buttonSize}`}
        >
            {leadingIcon && (
                <div className="button-icon leading-icon">{leadingIcon}</div>
            )}
            {title && <span>{title}</span>}
            {trailingIcon && (
                <div className="button-icon trailing-icon">{trailingIcon}</div>
            )}
        </button>
    );
};

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;

    buttonType?: "primary" | "semi" | "secondary" | "secondary-text" | "text";
    buttonSize?: "small" | "medium" | "large";
}

export default Button;
