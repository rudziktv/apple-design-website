import { useRef } from "react";
import "./TextInput.css";

const TextInput = ({
    label,
    onTextChange,
    type = "text",
    classNameContainer,
    placeholder = "",
    topLabel,
    supportingText,
    error,
    ...props
}: TextInputProps) => {
    const ref = useRef();

    return (
        <div className="input-box">
            {topLabel && <span className="input-top-label">{topLabel}</span>}
            <div
                className={`input-container ${
                    error && "input-error"
                } ${classNameContainer}`}
            >
                <div className="input-main">
                    <input
                        {...props}
                        className={`input-input ${props.className}`}
                        placeholder={placeholder}
                        type={type}
                        onChange={(e) => {
                            if (onTextChange) {
                                onTextChange(e.target.value);
                            }
                            props.onChange?.(e);
                        }}
                    />
                    <span className="input-label">{label}</span>
                </div>
            </div>
            {error && (
                <span className="input-error-text">
                    <i className="ri-error-warning-line" /> {error}
                </span>
            )}
            {supportingText && (
                <span className="input-supporting-text">{supportingText}</span>
            )}
        </div>
    );
};

export interface TextInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    topLabel?: string;
    supportingText?: string;
    error?: string;
    label?: string;
    onTextChange?: (text: string) => void;
    classNameContainer?: string;
}

export default TextInput;
