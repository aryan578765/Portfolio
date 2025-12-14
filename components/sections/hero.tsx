"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 w-full h-full opacity-30 select-none pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Availability Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-primary/30 text-primary text-sm font-medium mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {personalInfo.availability}
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
                >
                    {personalInfo.name}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        {personalInfo.title}
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10"
                >
                    {personalInfo.tagline}. Final-year IT student building production-ready machine learning systems
                    with 77%+ recall in healthcare models and live deployments.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button variant="primary" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                        View Projects
                    </Button>
                    <a href="/resume.pdf" download="Aryan_Patel_Resume.pdf">
                        <Button variant="outline" size="lg" icon={<Download className="w-4 h-4" />}>
                            Download Resume
                        </Button>
                    </a>
                </motion.div>

                {/* Social Links Mini */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex gap-6 mt-12"
                >
                    <a href={personalInfo.github} target="_blank" className="text-text-secondary hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" className="text-text-secondary hover:text-white transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-secondary"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
