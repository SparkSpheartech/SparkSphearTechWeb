"use client";
import React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';

// Custom SVG Squiggles for that "Hand-drawn" look
const SquiggleLeft = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 z-0 opacity-80" style={{ pointerEvents: 'none' }} fill="none">
        <path d="M10 100 Q 50 10, 90 100 T 180 100" stroke="#a6fd37" strokeWidth="4" strokeLinecap="round" />
        <path d="M10 120 Q 50 30, 90 120 T 180 120" stroke="#a6fd37" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        <circle cx="20" cy="80" r="4" fill="#a6fd37" />
        <circle cx="160" cy="140" r="6" fill="#a6fd37" />
    </svg>
);

const SquiggleRight = () => (
    <svg width="150" height="150" viewBox="0 0 150 150" className="absolute top-20 right-0 translate-x-1/2 z-0 opacity-80" style={{ pointerEvents: 'none' }} fill="none">
        <path d="M10 75 Q 40 10, 75 75 T 140 75" stroke="#a6fd37" strokeWidth="4" strokeLinecap="round" />
        <circle cx="120" cy="40" r="5" fill="#a6fd37" />
        <path d="M130 20 L 140 30 M 140 20 L 130 30" stroke="#a6fd37" strokeWidth="3" />
    </svg>
);

const Hero = () => {
    return (
        <section className="relative bg-dark pt-40 pb-20 overflow-hidden" style={{ backgroundColor: "#1b1b1b" }}>
            <SquiggleLeft />
            <SquiggleRight />

            <div className="container relative z-10 text-center">
                <div className="hero-content max-w-4xl mx-auto">
                    {/* Main Heading matched to reference: 48px, White, Lexend */}
                    {/* Main Heading matched to reference: 48px, White, Lexend */}
                    <h1 className="text-white font-bold mb-6 text-4xl md:text-6xl leading-tight">
                        Your Vision,<br />
                        Structured to <span className="italic font-light">Scale</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Empowering small businesses in the Greater Fort Wayne area. We deliver personalized IT services, digital marketing, and creative solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                        {/* Primary Button */}
                        <Link href="#our-services" className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark font-bold hover:bg-[#a6fd37] transition-colors duration-300 min-w-[200px]">
                            Explore our service
                        </Link>

                        {/* Watch Video Button - Visual Match */}
                        <button className="group inline-flex items-center gap-3 text-white font-semibold hover:text-[#a6fd37] transition-colors duration-300">
                            <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                                <Play size={14} fill="currentColor" className="text-dark ml-1" />
                            </span>
                            Watch video
                        </button>
                    </div>
                </div>

                {/* Hero Stats matched to reference visual specific content */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-10 text-left">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-1">2022</h3>
                        <p className="text-sm text-gray-500">Year Founded</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-1">24/7</h3>
                        <p className="text-sm text-gray-500">Tech Support</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-1">100%</h3>
                        <p className="text-sm text-gray-500">Local Expertise</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-1">30+</h3>
                        <p className="text-sm text-gray-500">Projects Delivered</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
