"use client";
import React from 'react';

const FAQ = () => {
    return (
        <section id="faq" className="section faq animate-on-scroll">
            <div className="container">
                <div className="section-header">
                    <span className="tag">FAQ</span>
                    <h2>Common Questions</h2>
                    <p>Everything you need to know about our IT services.</p>
                </div>

                <div className="faq-list max-w-3xl mx-auto space-y-4">
                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <span>What areas do you serve?</span>
                            <span className="text-primary text-xl font-bold">+</span>
                        </summary>
                        <div className="faq-content p-4 text-gray-600">
                            <p>We primarily serve the Greater Fort Wayne area and surrounding communities in Northeast Indiana, providing both on-site and remote support.</p>
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <span>Do you offer 24/7 support?</span>
                            <span className="text-primary text-xl font-bold">+</span>
                        </summary>
                        <div className="faq-content p-4 text-gray-600">
                            <p>Yes, our Managed IT packages include round-the-clock monitoring and emergency support to ensure your business never stops running.</p>
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <span>How does your pricing work?</span>
                            <span className="text-primary text-xl font-bold">+</span>
                        </summary>
                        <div className="faq-content p-4 text-gray-600">
                            <p>We offer flexible flat-rate monthly packages for Managed Services, so you have a predictable budget. Project work (like web design) is quoted upfront.</p>
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <span>Can you help with cybersecurity compliance?</span>
                            <span className="text-primary text-xl font-bold">+</span>
                        </summary>
                        <div className="faq-content p-4 text-gray-600">
                            <p>Absolutely. We help businesses meet industry standards (like HIPAA or PCI-DSS) through rigorous security audits and protocol implementation.</p>
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <span>How fast is your response time?</span>
                            <span className="text-primary text-xl font-bold">+</span>
                        </summary>
                        <div className="faq-content p-4 text-gray-600">
                            <p>For critical issues, our average response time is under 15 minutes. We prioritize keeping your operations moving.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
