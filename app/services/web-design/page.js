"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Smartphone, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function WebDesign() {
    const services = [
        'Custom Website Design',
        'E-Commerce Development',
        'Landing Page Optimization',
        'Website Redesign',
        'Mobile-First Development',
        'SEO Optimization',
        'Performance Tuning',
        'Ongoing Maintenance & Support'
    ];

    const benefits = [
        { icon: <Monitor />, title: 'Modern Design', description: 'Beautiful, on-brand websites that make a lasting impression' },
        { icon: <Smartphone />, title: 'Mobile Responsive', description: 'Flawless experience across all devices and screen sizes' },
        { icon: <Zap />, title: 'Lightning Fast', description: 'Optimized for speed and performance to keep visitors engaged' },
        { icon: <TrendingUp />, title: 'Conversion Focused', description: 'Designed to turn visitors into customers' }
    ];

    const process = [
        { step: '1', title: 'Discovery', description: 'Understand your goals, audience, and brand' },
        { step: '2', title: 'Design', description: 'Create stunning mockups and prototypes' },
        { step: '3', title: 'Development', description: 'Build with modern, scalable technology' },
        { step: '4', title: 'Launch', description: 'Deploy and optimize for peak performance' },
        { step: '5', title: 'Support', description: 'Ongoing maintenance and updates' }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
                <section className="pt-32 pb-16">
                    <div className="container max-w-5xl">
                        <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                            Back to Services
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <Monitor className="w-16 h-16 text-primary" />
                            <h1 className="text-white text-4xl md:text-5xl font-bold">
                                Web Design & Development
                            </h1>
                        </div>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Modern, high-converting websites built with stunning design and cutting-edge technology. We create digital experiences that not only look amazing but drive real business results.
                        </p>
                    </div>
                </section>

                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-5xl">
                        <h2 className="text-white text-3xl font-bold mb-12">What We Build</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-center gap-3 bg-dark-1 border border-dark-2 rounded-lg p-4">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="text-gray-300">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-5xl">
                        <h2 className="text-white text-3xl font-bold mb-12">Why Our Websites Win</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="text-primary flex-shrink-0">
                                        {React.cloneElement(benefit.icon, { className: 'w-12 h-12' })}
                                    </div>
                                    <div>
                                        <h3 className="text-white text-xl font-bold mb-2">{benefit.title}</h3>
                                        <p className="text-gray-400">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-5xl">
                        <h2 className="text-white text-3xl font-bold mb-12">Our Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            {process.map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-primary text-2xl font-bold">{item.step}</span>
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Ready to Build Your Dream Website?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's create a website that drives results for your business
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#book-meeting"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
                            >
                                Schedule Consultation
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 bg-dark-2 text-white font-bold border-2 border-dark-2 hover:border-primary transition-all duration-300 rounded-md"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
