import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Camera, Monitor, TrendingUp, Database, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Our Services | SparkSphear Tech Solutions',
    description: 'AI automation, professional photography/videography, web design, digital marketing, and comprehensive IT infrastructure audits for Fort Wayne businesses.',
};

export default function ServicesOverview() {
    const services = [
        {
            slug: 'ai-automation',
            icon: <Brain className="w-16 h-16" />,
            title: 'AI & Automation',
            description: 'Leverage artificial intelligence to automate workflows, enhance decision-making, and scale your operations',
            features: ['Process Automation', 'AI Integration', 'Workflow Optimization', 'Custom AI Solutions']
        },
        {
            slug: 'photography-videography',
            icon: <Camera className="w-16 h-16" />,
            title: 'Photography & Videography',
            description: 'Professional visual content that tells your brand story and engages your audience',
            features: ['Corporate Photography', 'Video Production', 'Event Coverage', 'Product Shoots']
        },
        {
            slug: 'web-design',
            icon: <Monitor className="w-16 h-16" />,
            title: 'Web Design',
            description: 'Modern, high-converting websites built with cutting-edge technology and stunning design',
            features: ['Custom Design', 'E-Commerce', 'SEO Optimization', 'Mobile-First']
        },
        {
            slug: 'digital-marketing',
            icon: <TrendingUp className="w-16 h-16" />,
            title: 'Digital Marketing',
            description: 'Data-driven marketing strategies to grow your online presence and drive measurable results',
            features: ['Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Analytics & Insights']
        },
        {
            slug: 'it-audits',
            icon: <Database className="w-16 h-16" />,
            title: 'IT Infrastructure Audits',
            description: 'Comprehensive analysis of your technology stack with actionable recommendations',
            features: ['Competitor Analysis', 'Data Engineering', 'Cloud Infrastructure', 'Security Assessment']
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
                {/* Hero */}
                <section className="pt-32 pb-16">
                    <div className="container text-center">
                        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
                            Strategic <span className="text-primary">Services</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                            From AI-powered automation to stunning visual content, we provide the strategic services your business needs to thrive
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="pb-20">
                    <div className="container max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.slice(0, 3).map((service, index) => (
                                <Link
                                    key={index}
                                    href={`/services/${service.slug}`}
                                    className="service-detail-card bg-dark-1 border-2 border-dark-2 hover:border-primary rounded-lg p-8 transition-all duration-300 group"
                                >
                                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-white text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-400 mb-6">{service.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                                                <span className="text-primary mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                                        Learn More
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Second Row - Centered */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
                            {services.slice(3).map((service, index) => (
                                <Link
                                    key={index}
                                    href={`/services/${service.slug}`}
                                    className="service-detail-card bg-dark-1 border-2 border-dark-2 hover:border-primary rounded-lg p-8 transition-all duration-300 group"
                                >
                                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-white text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-400 mb-6">{service.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                                                <span className="text-primary mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                                        Learn More
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container text-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Schedule a free consultation to discuss your project and discover how we can help you achieve your goals
                        </p>
                        <Link
                            href="#book-meeting"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
                        >
                            Schedule Free Consultation
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
