"use client";
import React from 'react';

const Features = () => {
    return (
        <section id="features" className="section features-list animate-on-scroll">
            <div className="container">
                <div className="section-header">
                    <span className="tag">WHY CHOOSE US</span>
                    <h2>We care about your growth and success</h2>
                </div>
                <div className="features-list-grid stagger-grid">
                    <div className="feature-item">
                        <h3>Local Expertise</h3>
                        <p>Proudly serving the Greater Fort Wayne area with personalized, local support.</p>
                    </div>
                    <div className="feature-item">
                        <h3>24/7 Availability</h3>
                        <p>We are always here to ensure your technology never lets you down.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Comprehensive Solutions</h3>
                        <p>One partner for IT, Marketing, and Creative needs, simplifying your vendor management.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
