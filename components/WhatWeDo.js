"use client";
import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
    "Personalized Service: Tailored solutions, no cookie-cutter approaches.",
    "Local Expertise: We understand the Fort Wayne market.",
    "Proven Results: Measurable improvements in efficiency and growth.",
    "24/7 Support: Always available when you need us."
];

const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="section what-we-do animate-on-scroll">
            <div className="container">
                <div className="split-layout">
                    <div className="content-col">
                        <span className="tag">WHY CHOOSE US</span>
                        <h2>Empowering Fort Wayne Businesses</h2>
                        <p>
                            Founded in 2022, SparkSphear Tech Solutions has become a trusted technology partner for small businesses across the Greater Fort Wayne area.
                            We blend deep technical expertise with a personalized, hands-on approach.
                        </p>
                        <p>
                            Whether you need to strengthen your online presence, improve cybersecurity, or streamline operations,
                            our team is committed to supporting you at every step.
                        </p>
                        <ul className="benefits-list">
                            {benefits.map((benefit, index) => (
                                <li key={index}>
                                    <CheckCircle size={20} className="text-primary" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="image-col">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                            <div className="absolute inset-0 bg-[#a6fd37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                                src="/images/dashboard.png"
                                alt="SparkSphear Dashboard Visualization"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
