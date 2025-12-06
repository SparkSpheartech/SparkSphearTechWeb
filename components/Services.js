"use client";
import React from 'react';
import Link from 'next/link';
import { Brain, Camera, Monitor, TrendingUp, Database } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Brain className="w-12 h-12" />,
            title: "AI & Automation",
            description: "Leverage cutting-edge AI to automate workflows, enhance decision-making, and scale your operations efficiently.",
            link: "/services/ai-automation"
        },
        {
            icon: <Camera className="w-12 h-12" />,
            title: "Photography & Videography",
            description: "Professional visual content that tells your brand story and captivates your audience.",
            link: "/services/photography-videography"
        },
        {
            icon: <Monitor className="w-12 h-12" />,
            title: "Web Design",
            description: "Modern, high-converting websites built with stunning design and cutting-edge technology.",
            link: "/services/web-design"
        },
        {
            icon: <TrendingUp className="w-12 h-12" />,
            title: "Digital Marketing",
            description: "Data-driven strategies to grow your online presence and drive measurable business results.",
            link: "/services/digital-marketing"
        },
        {
            icon: <Database className="w-12 h-12" />,
            title: "IT Infrastructure Audits",
            description: "Comprehensive technology assessments with actionable insights for optimization and growth.",
            link: "/services/it-audits"
        }
    ];

    return (
        <section id="our-services" className="services section" style={{ background: 'var(--color-gray-50)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="tag">WHAT WE DO</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Strategic Services for <span className="text-primary">Modern Businesses</span>
                    </h2>
                    <p className="text-gray-600">
                        From AI-powered automation to stunning visual content, we provide the strategic solutions your business needs to thrive.
                    </p>
                </div>

                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(0, 3).map((service, index) => (
                        <div
                            key={index}
                            className="service-card bg-white border-2 border-gray-200 hover:border-primary rounded-xl p-8 transition-all duration-300"
                        >
                            <div className="text-primary mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <Link
                                href={service.link}
                                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                            >
                                Learn More →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Second Row - Centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
                    {services.slice(3).map((service, index) => (
                        <div
                            key={index}
                            className="service-card bg-white border-2 border-gray-200 hover:border-primary rounded-xl p-8 transition-all duration-300"
                        >
                            <div className="text-primary mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <Link
                                href={service.link}
                                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                            >
                                Learn More →
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
