import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { LazyHomeContent } from "@/components/lazy-home-content";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <LazyHomeContent />
    </main>
  );
}
