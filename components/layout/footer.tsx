import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Footer() {
    return (
        <footer className="border-t border-border bg-surface/30 py-12 mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-text-secondary text-sm">
                    © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Framer Motion.
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href={personalInfo.github}
                        target="_blank"
                        className="text-text-secondary hover:text-primary transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href={personalInfo.linkedin}
                        target="_blank"
                        className="text-text-secondary hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        href={`mailto:${personalInfo.email}`}
                        className="text-text-secondary hover:text-primary transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
