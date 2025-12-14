"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Contact() {
    return (
        <SectionWrapper id="contact" className="bg-background">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase border border-primary/20 rounded-full">
                            Get in Touch
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Let's Build Something Intelligent Together
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            Open to discussing AI/ML projects, internship opportunities, or collaborations on machine learning solutions.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <a href={`mailto:${personalInfo.email}`} className="block group cursor-pointer">
                            <Card className="h-full">
                                <Mail className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <div className="font-bold text-white">Email Me</div>
                                <div className="text-sm text-text-secondary">{personalInfo.email}</div>
                            </Card>
                        </a>

                        <a href={personalInfo.linkedin} target="_blank" className="block group cursor-pointer" rel="noopener noreferrer">
                            <Card className="h-full">
                                <Linkedin className="w-8 h-8 text-[#0077b5] mb-4 group-hover:scale-110 transition-transform" />
                                <div className="font-bold text-white">LinkedIn</div>
                                <div className="text-sm text-text-secondary">Connect Professionally</div>
                            </Card>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 border-border bg-surface/50 backdrop-blur-xl">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/20"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/20"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/20 resize-none"
                                    placeholder="How can we collaborate?"
                                />
                            </div>

                            <Button className="w-full" size="lg" icon={<Send className="w-4 h-4" />}>
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
