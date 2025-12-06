import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Target, BarChart, Users, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Digital Marketing Services | SparkSphear',
    description: 'Data-driven digital marketing strategies to grow your online presence and drive measurable business results.',
};

export default function DigitalMarketing() {
    const services = [
        'Social Media Marketing',
        'Content Strategy & Creation',
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Email Marketing Campaigns',
        'Analytics & Reporting',
        'Brand Strategy',
        'Influencer Partnerships'
    ];

    const benefits = [
        { icon: <Target />, title: 'Targeted Reach', description: 'Connect with your ideal customers at the right time' },
        { icon: <BarChart />, title: 'Measurable Results', description: 'Track ROI with detailed analytics and insights' },
        { icon: <TrendingUp />, title: 'Scalable Growth', description: 'Strategies that grow with your business' },
        { icon: <Users />, title: 'Audience Engagement', description: 'Build lasting relationships with your customers' }
    ];

    const channels = [
        {
            name: 'Social Media',
            description: 'Build brand awareness and engage your audience on Facebook, Instagram, LinkedIn, and more',
            metrics: ['Followers Growth', 'Engagement Rate', 'Reach & Impressions']
        },
        {
            name: 'Search Engine Marketing',
            description: 'Dominate search results with SEO and PPC campaigns that drive qualified traffic',
            metrics: ['Keyword Rankings', 'Click-Through Rate', 'Conversion Rate']
        },
        {
            name: 'Content Marketing',
            description: 'Create valuable content that attracts, educates, and converts your target audience',
            metrics: ['Traffic Growth', 'Time on Site', 'Lead Generation']
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
                            <TrendingUp className="w-16 h-16 text-primary" />
                            <h1 className="text-white text-4xl md:text-5xl font-bold">
                                Digital Marketing
                            </h1>
                        </div>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Data-driven marketing strategies to grow your online presence and drive measurable business results. We blend creativity with analytics to deliver campaigns that convert.
                        </p>
                    </div>
                </section>

                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-5xl">
                        <h2 className="text-white text-3xl font-bold mb-12">Our Marketing Services</h2>
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
                        <h2 className="text-white text-3xl font-bold mb-12">Why Choose Our Marketing</h2>
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
                        <h2 className="text-white text-3xl font-bold mb-12">Marketing Channels We Master</h2>
                        <div className="space-y-6">
                            {channels.map((channel, index) => (
                                <div key={index} className="bg-dark-1 border-2 border-dark-2 hover:border-primary rounded-lg p-8 transition-all">
                                    <h3 className="text-white text-2xl font-bold mb-3">{channel.name}</h3>
                                    <p className="text-gray-400 mb-4">{channel.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {channel.metrics.map((metric, idx) => (
                                            <span key={idx} className="inline-flex items-center bg-primary/10 border border-primary rounded-full px-4 py-2 text-primary text-sm font-semibold">
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's create a custom marketing strategy that drives real results
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
