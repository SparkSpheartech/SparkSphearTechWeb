"use client";
import React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative bg-dark pt-40 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}>
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
