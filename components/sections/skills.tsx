"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";
import { Code, Database, Brain, Layout, Terminal } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    "Languages & Frameworks": Code,
    "AI/ML Stack": Brain,
    "Web Development": Layout,
    "Tools & Platforms": Terminal,
};

export function Skills() {
    return (
        <SectionWrapper id="skills" className="bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase border border-primary/20 rounded-full">
                    Technical Expertise
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Tech Stack & Tools
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.categories.map((category, categoryIndex) => {
                    const Icon = iconMap[category.title] || Database;

                    return (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            <Card className="h-full bg-surface/40 hover:bg-surface/60 transition-colors border-border/50">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item, itemIndex) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1.5 text-sm rounded bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-primary/30 transition-colors cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
