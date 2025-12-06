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
                <Link href="#" className="logo">
                    SparkSphearTechSolutions
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex gap-8">
                        {['What we do', 'Our Services', 'Features', 'Solutions', 'FAQ'].map((item) => (
                            <Link
                                key={item}
                                href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                    {/* High Fidelity: Button matches 'Buy Template' solid green style */}
                    <Link href="#contact-us" className="btn bg-[#a6fd37] text-dark font-bold px-6 py-3 hover:bg-white transition-colors">
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
