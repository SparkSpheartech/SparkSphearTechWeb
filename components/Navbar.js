"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="navbar">
            <div className="container flex justify-between items-center">
                <Link href="/" className="logo flex items-center gap-2">
                    <img src="/logo.png" alt="SparkSphear Logo" className="h-12 w-auto" />
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
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-1 border-t border-dark-2 shadow-xl z-50">
                        <nav className="flex flex-col p-6 gap-4">
                            <div onClick={closeMenu}>
                                <Link href="/#our-services" className="text-gray-300 hover:text-primary transition-colors py-2 block">
                                    Services
                                </Link>
                            </div>
                            <div onClick={closeMenu}>
                                <Link href="/#process" className="text-gray-300 hover:text-primary transition-colors py-2 block">
                                    Process
                                </Link>
                            </div>
                            <div onClick={closeMenu}>
                                <Link href="/#core-values" className="text-gray-300 hover:text-primary transition-colors py-2 block">
                                    About
                                </Link>
                            </div>
                            <div onClick={closeMenu}>
                                <a href="https://sparkspheartechsolutions.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors py-2 block">
                                    Blog
                                </a>
                            </div>
                            <div onClick={closeMenu}>
                                <Link href="/support" className="text-gray-300 hover:text-primary transition-colors py-2 block">
                                    Support
                                </Link>
                            </div>
                            <div onClick={closeMenu}>
                                <Link href="#book-meeting" className="btn-primary mt-4 block text-center">
                                    Get Started
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
