"use client";
import React from 'react';

const Stats = () => {
    return (
        <section className="section stats animate-on-scroll">
            <div className="container">
                <div className="section-header">
                    <span className="tag">OUR IMPACT</span>
                    <h2>Helping businesses thrive in the digital age</h2>
                </div>
                <div className="stats-grid stagger-grid">
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Support Available</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Client Focus</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">AI</span>
                        <span className="stat-label">Powered Solutions</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
