"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Video, Image, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function PhotographyVideography() {
    const services = [
        'Corporate Photography',
        'Product Photography',
        'Event Coverage',
        'Promotional Videos',
        'Brand Storytelling',
        'Social Media Content',
        'Headshots & Portraits',
        'Video Editing & Post-Production'
    ];

    const benefits = [
        { icon: <Camera />, title: 'Professional Quality', description: 'Studio-grade equipment and expert techniques for stunning results' },
        { icon: <Video />, title: 'Engaging Content', description: 'Visual stories that captivate your audience and drive engagement' },
        { icon: <Image />, title: 'Brand Consistency', description: 'Cohesive visual identity across all your marketing materials' },
        { icon: <Award />, title: 'Fast Turnaround', description: 'Quick delivery without compromising on quality' }
    ];

    const packages = [
        {
            name: 'Essential',
            description: 'Perfect for small projects and social media content',
            features: [
                '2-hour session',
                '20 edited photos',
                'Basic retouching',
                'Digital delivery',
                '2 week turnaround'
            ]
        },
        {
            name: 'Professional',
            description: 'Ideal for corporate events and product launches',
            features: [
                '4-hour session',
                '50 edited photos',
                'Advanced retouching',
                'Digital + print ready',
                '1 week turnaround',
                'Social media formats'
            ],
            popular: true
        },
        {
            name: 'Premium',
            description: 'Comprehensive coverage for major campaigns',
            features: [
                'Full day coverage',
                'Unlimited edited photos',
                'Video + photography',
                'All file formats',
                '3 day turnaround',
                'Dedicated project manager'
            ]
        }
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
                            <Camera className="w-16 h-16 text-primary" />
                            <h1 className="text-white text-4xl md:text-5xl font-bold">
                                Photography & Videography
                            </h1>
                        </div>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Professional visual content that tells your brand story and captivates your audience. From corporate photography to promotional videos, we create stunning visuals that elevate your brand.
                        </p>
                    </div>
                </section>

                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-5xl">
                        <h2 className="text-white text-3xl font-bold mb-12">What We Capture</h2>
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
                        <h2 className="text-white text-3xl font-bold mb-12">Why Choose Us</h2>
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
                    <div className="container max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-white text-3xl font-bold mb-4">Photography Packages</h2>
                            <p className="text-gray-400">Choose the coverage that fits your needs</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {packages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className={`pricing-card bg-dark-1 border-2 ${pkg.popular ? 'border-primary' : 'border-dark-2'} rounded-lg p-8 relative`}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-dark px-4 py-1 rounded-full text-sm font-bold">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-white text-2xl font-bold mb-2">{pkg.name}</h3>
                                    <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="#book-meeting"
                                        className={`block text-center px-6 py-3 rounded-md font-bold transition-all ${pkg.popular
                                            ? 'bg-primary text-dark hover:bg-primary/90'
                                            : 'bg-dark-2 text-white border-2 border-dark-2 hover:border-primary'
                                            }`}
                                    >
                                        Book Session
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Ready to Create Stunning Visuals?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's discuss your photography and video production needs
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
