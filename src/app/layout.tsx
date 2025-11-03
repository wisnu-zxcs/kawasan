import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { JSX, ReactNode } from "react";

const fontInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap"
})

const {
    APP_URL,
    APP_TITLE_DEFAULT,
    APP_TITLE_TEMPLATE,
    APP_SITE_NAME,
    APP_DESCRIPTION,
    APP_AUTHOR_NAME,
    APP_AUTHOR_URL,
} = process.env;

export const metadata: Metadata = {
    title: {
        default: APP_TITLE_DEFAULT ?? "ERROR: Unable to get DEFAULT_TITLE from object property!",
        template: APP_TITLE_TEMPLATE ?? "ERROR: Unable to get TEMPLATE_TITLE from object property!"
    },
    description: APP_DESCRIPTION ?? "ERROR: Unable to get APP_DESCRIPTION from object property!",
    authors: [
        {
            name: APP_AUTHOR_NAME ?? "ERROR: Unable to get AUTHOR_NAME from object property!",
            url: APP_AUTHOR_URL ?? "ERROR: Unable to get AUTHOR_URL from object property!"
        }
    ],
    openGraph: {
        title: APP_TITLE_DEFAULT ?? "ERROR: Unable to get DEFAULT_TITLE from object property!",
        description: APP_DESCRIPTION ?? "ERROR: Unable to get APP_DESCRIPTION from object property!",
        url: APP_URL ?? "ERROR: Unable to get APP_URL from object property!",
        siteName: APP_SITE_NAME ?? "ERROR: Unable to get SITE_NAME from object property!",
        locale: "id_ID",
        type: "website"
    },
    metadataBase: new URL(APP_URL ?? "ERROR: Unable to get metadataBase from object property!")
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return (
        <html lang="id">
            <body className={`${fontInter.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}