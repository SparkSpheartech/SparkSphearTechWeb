import { Lexend } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const lexend = Lexend({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
    title: {
        default: "SparkSphear Tech Solutions | Fort Wayne IT Services",
        template: "%s | SparkSphear Tech Solutions"
    },
    description: "Expert Managed IT, Cybersecurity, and Digital Marketing services for Fort Wayne small businesses. Local, reliable, and scalable technology solutions.",
    keywords: ["IT Services Fort Wayne", "Managed Service Provider", "Cybersecurity", "Web Design", "Digital Marketing", "Tech Support"],
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: "SparkSphear Tech Solutions",
        description: "Empowering Fort Wayne businesses with personalized technology solutions.",
        url: 'https://sparksphear.com',
        siteName: 'SparkSphear Tech Solutions',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={lexend.className}>
                <SmoothScrolling>{children}</SmoothScrolling>
            </body>
        </html>
    );
}
