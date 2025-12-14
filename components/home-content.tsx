import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export function HomeContent() {
    return (
        <>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <CTA />
            <Contact />
            <Footer />
        </>
    );
}
