import { Lexend } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const lexend = Lexend({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
    title: "SparkSphear Tech Solutions",
    description: "Comprehensive tech solutions for small businesses in Fort Wayne.",
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
