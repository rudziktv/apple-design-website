import { motion } from "framer-motion";
import Loading from "../Loading/Loading";
import "./LoadingPopup.css";

const LoadingPopup = () => {
    return (
        <motion.div className="loading-blur">
            <motion.div
                className="loading-popup"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
            >
                <Loading />
                <span>Loading...</span>
            </motion.div>
        </motion.div>
    );
};

export default LoadingPopup;
