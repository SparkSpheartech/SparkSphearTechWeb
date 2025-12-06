"use client";
import React from 'react';
import { Monitor, Smartphone, Camera, BarChart, Server, Shield } from 'lucide-react';

const services = [
    {
        icon: <Monitor />,
        title: "Digital Marketing",
        description: "SEO, Social Media, and Google Rankings. We create strategies that help you connect with your target audience and grow."
    },
    {
        icon: <Smartphone />,
        title: "Web Design & Dev",
        description: "Professional, high-converting websites. We build digital experiences that represent your brand and drive sales."
    },
    {
        icon: <Server />,
        title: "Technology Support",
        description: "24/7 technical assistance for all your devices. We keep your technology running smoothly so you can focus on business."
    },
    {
        icon: <Camera />,
        title: "Photo & Videography",
        description: "High-quality visual content. From product shots to promotional videos, we tell your story through compelling imagery."
    },
    {
        icon: <BarChart />,
        title: "Infrastructure Audits",
        description: "Comprehensive audits and AI-powered workflow solutions to optimize performance and identify growth opportunities."
    },
    {
        icon: <Shield />,
        title: "Cybersecurity",
        description: "Protect your business data with enterprise-grade security protocols tailored for small business needs."
    }
];

const Services = () => {
    return (
        <section id="our-services" className="section services animate-on-scroll">
            <div className="container">
                <div className="section-header">
                    <span className="tag">OUR SERVICES</span>
                    <h2>Comprehensive IT Solutions</h2>
                    <p>From infrastructure to marketing, we cover every aspect of your digital presence.</p>
                </div>

                <div className="services-grid stagger-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <i>{service.icon}</i>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="cta-box">
                    <h3>Ready to take your business to the next level with SparkSphear?</h3>
                    <a href="#contact-us" className="btn btn-primary">Let’s discuss</a>
                </div>
            </div>
        </section>
    );
};

export default Services;
