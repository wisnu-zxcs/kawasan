import "@/styles/global.css";
import { Inter } from "next/font/google";
import type { JSX, ReactNode } from "react";
import { Theme } from "@/components/plugin/theme-provider";
import { ScrollArea } from "@/components/ui";

const fontInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap"
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return (
        <html lang="id" suppressHydrationWarning>
            <body className={`${fontInter.className}`}>
                <Theme attribute="class" enableSystem disableTransitionOnChange>
                    <ScrollArea className="w-screen h-screen">
                        {children}
                    </ScrollArea>
                </Theme>
            </body>
        </html>
    )
}