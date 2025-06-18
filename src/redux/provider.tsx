"use client"

import * as React from "react";

import { HeroUIProvider } from "@heroui/react";
import { NaavbarSection, NaavbarSection2 } from "@/components/2-sections";

export function Provider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <HeroUIProvider>
            <NaavbarSection />
            <NaavbarSection2 />
            {children}
        </HeroUIProvider>
    );
}