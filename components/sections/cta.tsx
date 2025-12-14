"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Globe, Briefcase, Download } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";

export function CTA() {
    return (
        <SectionWrapper id="cta" className="relative py-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Ready to Make an Impact
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-text-secondary mb-12 max-w-2xl"
                >
                    Actively seeking Python & AI/ML Engineering internship opportunities.
                    Available to work on production machine learning systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-2xl mb-12"
                >
                    <Card className="grid sm:grid-cols-2 gap-6 bg-surface/80 backdrop-blur-xl border-primary/20">
                        <div className="flex items-center gap-3 text-left">
                            <Calendar className="text-primary w-5 h-5 shrink-0" />
                            <div>
                                <div className="text-sm text-text-secondary">Available</div>
                                <div className="font-semibold text-white">Open for Python & AI/ML Internships</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <Briefcase className="text-primary w-5 h-5 shrink-0" />
                            <div>
                                <div className="text-sm text-text-secondary">Focus</div>
                                <div className="font-semibold text-white">AI/ML Engineering</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <Globe className="text-primary w-5 h-5 shrink-0" />
                            <div>
                                <div className="text-sm text-text-secondary">Location</div>
                                <div className="font-semibold text-white">Remote & On-site</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <Briefcase className="text-primary w-5 h-5 shrink-0" />
                            <div>
                                <div className="text-sm text-text-secondary">Duration</div>
                                <div className="font-semibold text-white">4-6 Months</div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                        <a href="mailto:aryanp1544@gmail.com">Let's Connect</a>
                    </Button>
                    <a href="/resume.pdf" download="Aryan_Patel_Resume.pdf">
                        <Button variant="outline" size="lg" icon={<Download className="w-4 h-4" />}>
                            Download Resume
                        </Button>
                    </a>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
