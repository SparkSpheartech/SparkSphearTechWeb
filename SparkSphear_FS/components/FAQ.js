"use client";
import React from 'react';

const FAQ = () => {
    return (
        <section id="faq" className="section faq animate-on-scroll">
            <div className="container">
                <div className="faq-list">
                    <div className="section-header">
                        <span className="tag">FAQ</span>
                        <h2>Common Questions</h2>
                    </div>

                    <details className="faq-item">
                        <summary>What kind of support do you offer?</summary>
                        <div className="faq-content">
                            <p>We offer comprehensive 24/7 technical support for infrastructure, devices, and systems to ensure minimal downtime.</p>
                        </div>
                    </details>

                    <details className="faq-item">
                        <summary>Can you help with my website?</summary>
                        <div className="faq-content">
                            <p>Absolutely. We provide professional web design and development services optimized for user experience and SEO.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
