"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link href="#" className="logo flex items-center gap-2">
                    <img src="/logo.png" alt="SparkSphear Logo" className="h-10 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex gap-8">
                        <Link href="/#our-services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                        <Link href="/#process" className="text-gray-300 hover:text-white transition-colors">Process</Link>
                        <Link href="/#core-values" className="text-gray-300 hover:text-white transition-colors">About</Link>
                        <a href="https://sparkspheartechsolutions.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Blog</a>
                        <Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
                    </nav>
                    <Link href="#book-meeting" className="btn-primary">
                        Get a quote ↗
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="nav active">
                        <div className="nav-list">
                            {['What we do', 'Our Services', 'Features', 'Solutions', 'FAQ'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <Link
                                href="#contact-us"
                                className="btn btn-primary mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Get a quote
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
