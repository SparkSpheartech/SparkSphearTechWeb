"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <Link href="#" className="logo">
                    SparkSphearTechSolutions
                </Link>

                <nav className={`nav ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><Link href="#what-we-do">What we do</Link></li>
                        <li><Link href="#our-services">Our Services</Link></li>
                        <li><Link href="#features">Features</Link></li>
                        <li><Link href="#solutions">Solutions</Link></li>
                        <li><Link href="#contact-us">Contact</Link></li>
                    </ul>
                </nav>

                <Link href="#contact-us" className="btn btn-primary hidden lg:inline-flex">Get a quote</Link>

                <button
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X color="white" /> : <Menu color="white" />}
                </button>
            </div>
        </header>
    );
};

export default Navbar;
