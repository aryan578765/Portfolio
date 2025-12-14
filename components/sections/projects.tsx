"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
    return (
        <SectionWrapper id="projects" className="bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase border border-primary/20 rounded-full">
                    Selected Work
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Featured Projects
                </h2>
            </motion.div>

            <div className="space-y-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={cn(
                            "flex flex-col gap-12 items-center",
                            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        )}
                    >
                        {/* Project Image */}
                        <div className="w-full lg:w-1/2 group">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/50 bg-surface/50">
                                {/* Fallback for image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex items-center justify-center">
                                    <span className="text-4xl font-bold opacity-10 uppercase tracking-widest text-center px-4">
                                        {project.title}
                                    </span>
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h3 className="text-3xl font-bold text-white">{project.title}</h3>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <p className="text-text-secondary text-lg leading-relaxed">
                                {project.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {project.metrics.map((metric, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                        {metric}
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button size="sm" variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </Button>
                                <Button size="sm" variant="outline" icon={<Github className="w-4 h-4" />}>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">Code</a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
