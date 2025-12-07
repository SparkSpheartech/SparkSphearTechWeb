"use client";
import React from 'react';
import Link from 'next/link';
import { Globe, ShieldCheck, Camera } from 'lucide-react';

const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="section what-we-do animate-on-scroll section-with-blobs">
            <div className="container">
                {/* Floating decorative blobs */}
                <div className="bg-blob bg-blob-primary bg-blob-lg" style={{ top: '10%', left: '5%' }}></div>
                <div className="bg-blob bg-blob-secondary bg-blob-md" style={{ bottom: '15%', right: '10%' }}></div>

                <div className="section-header">
                    <span className="tag">WHAT WE DO</span>
                    <h2>Empowering small businesses with comprehensive tech solutions</h2>
                    <p>From boosting your Google rankings to 24/7 tech support, we're your trusted technology partner in the Greater Fort Wayne area.</p>
                </div>
                <div className="features-grid stagger-grid">
                    <Link href="/services/digital-marketing" className="feature-card cursor-pointer transition-transform hover:scale-105">
                        <Globe />
                        <h3>Digital Growth</h3>
                        <p>Boost your online presence and reach your target audience with our digital marketing strategies.</p>
                    </Link>
                    <Link href="#contact-us" className="feature-card cursor-pointer transition-transform hover:scale-105">
                        <ShieldCheck />
                        <h3>Reliable Support</h3>
                        <p>24/7 technical assistance to keep your business running smoothly without interruption.</p>
                    </Link>
                    <Link href="/services/photography-videography" className="feature-card cursor-pointer transition-transform hover:scale-105">
                        <Camera />
                        <h3>Creative Visuals</h3>
                        <p>High-quality photography and videography to capture and tell your brand's unique story.</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
