"use client";
import React from 'react';
import { Globe, ShieldCheck, Camera } from 'lucide-react';

const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="section what-we-do animate-on-scroll">
            <div className="container">
                <div className="section-header">
                    <span className="tag">WHAT WE DO</span>
                    <h2>Empowering small businesses with comprehensive tech solutions</h2>
                    <p>From boosting your Google rankings to 24/7 tech support, we're your trusted technology partner in the Greater Fort Wayne area.</p>
                </div>
                <div className="features-grid stagger-grid">
                    <div className="feature-card">
                        <Globe />
                        <h3>Digital Growth</h3>
                        <p>Boost your online presence and reach your target audience with our digital marketing strategies.</p>
                    </div>
                    <div className="feature-card">
                        <ShieldCheck />
                        <h3>Reliable Support</h3>
                        <p>24/7 technical assistance to keep your business running smoothly without interruption.</p>
                    </div>
                    <div className="feature-card">
                        <Camera />
                        <h3>Creative Visuals</h3>
                        <p>High-quality photography and videography to capture and tell your brand's unique story.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
