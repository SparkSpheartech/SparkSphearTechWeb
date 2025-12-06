import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    metadataBase: new URL('https://sparkspheartechsolutions.com'),
    title: {
        default: "SparkSphear Tech Solutions | Fort Wayne IT Services",
        template: "%s | SparkSphear Tech Solutions"
    },
    description: "Premier IT services, digital marketing, and technology support for Fort Wayne businesses. 24/7 support, cybersecurity, web design, and more.",
    keywords: ["IT services Fort Wayne", "managed IT", "cybersecurity", "web design", "digital marketing", "technology support"],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sparkspheartechsolutions.com",
        title: "SparkSphear Tech Solutions",
        description: "Premier IT services and digital marketing for Fort Wayne businesses.",
        siteName: 'SparkSphear Tech Solutions',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={inter.className}
                style={{ margin: 0 }}
            >
                <SmoothScrolling>
                    {children}
                </SmoothScrolling>
            </body>
        </html>
    );
}
