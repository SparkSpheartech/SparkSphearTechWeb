"use client";
import React from 'react';
import Link from 'next/link';
import { BarChart, Monitor, Camera } from 'lucide-react';

const Services = () => {
    return (
        <section id="our-services" className="section services animate-on-scroll">
            <div className="container">
                <div className="section-header">
                    <span className="tag">OUR SERVICES</span>
                    <h2>Full stack services to scale your business</h2>
                </div>
                <div className="services-grid stagger-grid">
                    <div className="service-card">
                        <BarChart />
                        <h3>Digital Marketing</h3>
                        <p>From Google rankings to social media launches, we help you grow your digital footprint.</p>
                    </div>
                    <div className="service-card">
                        <Monitor />
                        <h3>Technology Support</h3>
                        <p>Round-the-clock technical support for all your devices, ensuring smooth operations.</p>
                    </div>
                    <div className="service-card">
                        <Camera />
                        <h3>Photography & Video</h3>
                        <p>Professional visual solutions tailored for businesses to showcase your brand.</p>
                    </div>
                </div>
                <div className="cta-box">
                    <h3>Ready to take your business to the next level with SparkSphearTechSolutions?</h3>
                    <Link href="#contact-us" className="btn btn-dark">Let’s discuss</Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
