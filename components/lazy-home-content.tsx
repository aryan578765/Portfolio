"use client";

import dynamic from "next/dynamic";

const HomeContent = dynamic(
    () => import("@/components/home-content").then((mod) => mod.HomeContent),
    { ssr: false }
);

export function LazyHomeContent() {
    return <HomeContent />;
}
