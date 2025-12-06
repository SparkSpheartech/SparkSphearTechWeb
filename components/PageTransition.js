"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        // Smooth fade-in on page navigation
        document.documentElement.style.opacity = '0';
        setTimeout(() => {
            document.documentElement.style.transition = 'opacity 0.3s ease-in-out';
            document.documentElement.style.opacity = '1';
        }, 10);

        return () => {
            document.documentElement.style.transition = '';
        };
    }, [pathname]);

    return <>{children}</>;
}
