import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "你老公来了",
    description: "给我老婆的一个小网站",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
