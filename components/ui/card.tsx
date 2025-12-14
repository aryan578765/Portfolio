import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -8, rotate: 1 } : undefined}
                className={cn(
                    "bg-surface/50 backdrop-blur-md border border-border rounded-xl p-6 overflow-hidden",
                    "hover:border-primary/50 transition-colors duration-300",
                    hoverEffect && "hover:shadow-2xl hover:shadow-black/50",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
