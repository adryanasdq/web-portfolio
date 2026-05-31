import React from "react";
import { motion } from "framer-motion"


interface ISection {
    id: string;
    children: React.ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

const Section: React.FC<ISection> = ({
    id,
    children,
    className,
    direction = "up",
}) => {
    const getDirectionStyles = () => {
        switch (direction) {
            case 'up': return { x: 0, y: 50 };
            case 'down': return { x: 0, y: -50 };
            case 'left': return { x: 50, y: 0 };
            case 'right': return { x: -50, y: 0 };
            default: return { x: 0, y: 50 };
        }
    };

    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, ...getDirectionStyles() }}
            viewport={{
                once: true,
                amount: 0.2
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    )
}

export default Section;
