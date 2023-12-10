import { motion } from "framer-motion";
import "./Popup.css";

const Popup = ({ children }: PopupProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="popup-blur"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="popup-container"
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export interface PopupProps {
    children: React.ReactNode;
}

export interface PopupChildProps {
    close: () => void;
}

export default Popup;
