"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export function About() {
    return (
        <SectionWrapper id="about" className="bg-background">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-surface relative group">
                        {/* Placeholder for Headshot */}
                        <Image
                            src="/Cream Beige boho Background Instagram Post.png"
                            alt="Aryan Patel"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Decorative element */}
                        <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase border border-primary/20 rounded-full">
                        Who I Am
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {personalInfo.about.heading}
                    </h2>

                    <div className="space-y-4 text-text-secondary text-lg mb-8">
                        {personalInfo.about.bio.map((paragraph, index) => (
                            <p key={index} className="leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {personalInfo.about.stats.map((stat, index) => (
                            <Card key={index} className="border-border/50 bg-surface/30 p-4">
                                <div className="text-3xl font-bold text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-text-secondary font-medium uppercase tracking-wide">
                                    {stat.label}
                                    {stat.suffix && <span className="block text-xs opacity-70 normal-case">{stat.suffix}</span>}
                                </div>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
