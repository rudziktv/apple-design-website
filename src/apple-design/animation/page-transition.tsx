import { motion } from "framer-motion";

const transitionSlide = (
    content: React.ReactNode,
    slide?: "left" | "right"
) => {
    const spring = {
        type: "spring",
        damping: 35,
        stiffness: 600,
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                transform:
                    slide == "right" ? `translateX(100%)` : `translateX(-100%)`,
                scale: 0,
            }}
            animate={{ opacity: 1, transform: `translateX(0%)`, scale: 1 }}
            exit={{
                opacity: 0,
                transform:
                    slide == "right" ? `translateX(-100%)` : `translateX(100%)`,
                scale: 0,
            }}
            transition={spring}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                // zIndex: 1,
            }}
        >
            {content}
        </motion.div>
    );
};

const transitionFade = (content: React.ReactNode) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0,
            }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
                opacity: 0,
                scale: 0,
            }}
            transition={{
                ease: "backOut",
            }}
        >
            {content}
        </motion.div>
    );
};

export { transitionSlide, transitionFade };
