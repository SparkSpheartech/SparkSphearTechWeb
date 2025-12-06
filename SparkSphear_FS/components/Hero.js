"use client";
import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="hero animate-on-scroll">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to SparkSphear Tech Solutions</h1>
                    <p className="hero-subtitle">
                        Your vision, structured to scale. We provide comprehensive digital and technical solutions for small businesses.
                    </p>
                    <div className="hero-actions">
                        <Link href="#contact-us" className="btn btn-primary">
                            Get Started
                        </Link>
                        <Link href="#what-we-do" className="btn btn-outline">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-placeholder">SparkSphear Visuals</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
