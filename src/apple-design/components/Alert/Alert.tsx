import { motion } from "framer-motion";
import "./Alert.css";
import AlertAction, { AlertActionProps } from "./AlertAction";

const Alert = ({ title, message, actions }: AlertProps) => {
    return (
        <motion.div
            className="alert-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="alert"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
            >
                <div className="alert-content">
                    <span className="alert-title">{title}</span>
                    <span className="alert-message">{message}</span>
                </div>
                <div className="alert-actions">
                    {actions?.map((action, index) => (
                        <AlertAction key={index} {...action} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export interface AlertProps {
    color?: "primary" | "error";

    title?: string;
    message?: string;
    actions?: AlertActionProps[];
}

export default Alert;
