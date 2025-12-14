"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { experience, certifications } from "@/lib/data";
import { Briefcase, Calendar, Award } from "lucide-react";

export function Experience() {
    return (
        <SectionWrapper id="experience" className="bg-background relative">
            <div className="text-center mb-20">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase border border-primary/20 rounded-full">
                    Professional Journey
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Experience & Education
                </h2>
            </div>

            <div className="max-w-4xl mx-auto mb-32 relative">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent transform md:-translate-x-1/2" />

                <div className="space-y-16">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[20px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary transform -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-background" />

                            <div className={`md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                <div className="text-xl font-bold text-white mb-2">{item.title}</div>
                                <div className="text-primary font-medium mb-1">{item.company}</div>
                                <div className="flex items-center gap-2 text-sm text-text-secondary mb-4 md:justify-end">
                                    {index % 2 !== 0 && <Calendar className="w-4 h-4" />}
                                    {item.period}
                                    {index % 2 === 0 && <Calendar className="w-4 h-4" />}
                                </div>

                                {item.description.length > 0 && (
                                    <ul className={`text-text-secondary space-y-1 ${index % 2 === 0 ? "items-end" : "items-start"}`}>
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
                    <Award className="text-secondary" /> Certifications & Learning
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-surface/30 hover:bg-surface/50 border-border/50">
                                <div className="text-lg font-bold text-white mb-1">{cert.title}</div>
                                <div className="text-sm text-primary mb-4">{cert.issuer}</div>
                                <div className="text-xs text-text-secondary uppercase tracking-widest">{cert.date}</div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
