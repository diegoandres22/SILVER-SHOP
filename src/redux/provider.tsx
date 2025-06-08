"use client"

import * as React from "react";

import { HeroUIProvider } from "@heroui/react";

export function Provider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    );
}