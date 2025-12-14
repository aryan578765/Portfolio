import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-background hover:brightness-110 shadow-[0_0_20px_rgba(0,217,255,0.3)]",
            secondary: "bg-surface border border-border text-text-primary hover:border-primary/50",
            outline: "border border-primary text-primary hover:bg-primary/10",
            ghost: "text-text-secondary hover:text-primary hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg font-semibold",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
                {icon && <span className="ml-1">{icon}</span>}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
