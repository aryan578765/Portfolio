import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    id: string;
    className?: string;
}

export function SectionWrapper({ id, className, children, ...props }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-5 relative overflow-hidden", className)}
            {...props}
        >
            <div className="container mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
