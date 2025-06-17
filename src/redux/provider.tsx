"use client"

import * as React from "react";

import { HeroUIProvider } from "@heroui/react";
import { Naavbar, Naavbar2 } from "@/components/2-sections";

export function Provider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <HeroUIProvider>
            <Naavbar />
            <Naavbar2 />
            {children}
        </HeroUIProvider>
    );
}