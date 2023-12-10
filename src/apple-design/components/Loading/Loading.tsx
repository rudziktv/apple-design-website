import { motion } from "framer-motion";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <motion.div
                className="progress"
                animate={{
                    rotate: [15, 45, 90, 135, 180, 225, 270, 325, 360],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            ></motion.div>
        </div>
    );
};

export default Loading;
