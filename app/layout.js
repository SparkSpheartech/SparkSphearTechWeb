import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import HashScrollHandler from "@/components/HashScrollHandler";

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
    icons: {
        icon: '/logo.png',
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
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
            <head>
                {/* HubSpot Tracking Script */}
                <script
                    type="text/javascript"
                    id="hs-script-loader"
                    async
                    defer
                    src="//js-na2.hs-scripts.com/244539453.js"
                />
            </head>
            <body
                className={inter.className}
                style={{ margin: 0 }}
            >
                <SmoothScrolling>
                    <HashScrollHandler />
                    {children}
                </SmoothScrolling>
            </body>
        </html>
    );
}
