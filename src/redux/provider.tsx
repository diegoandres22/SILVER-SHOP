"use client"

import * as React from "react";

import { HeroUIProvider } from "@heroui/react";
import { Naavbar } from "@/components/2-sections";

export function Provider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <HeroUIProvider>
            <Naavbar/>
            {children}
        </HeroUIProvider>
    );
}