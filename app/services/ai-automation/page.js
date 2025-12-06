import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Zap, Bot, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'AI & Automation Services | SparkSphear Tech Solutions',
    description: 'Transform your business with AI-powered automation. Streamline workflows, enhance decision-making, and scale efficiently.',
};

export default function AIAutomation() {
    const benefits = [
        { icon: <Zap />, title: 'Increased Efficiency', description: 'Automate repetitive tasks and free up your team for strategic work' },
        { icon: <TrendingUp />, title: 'Scalable Growth', description: 'Handle more work without proportionally increasing headcount' },
        { icon: <Brain />, title: 'Smarter Decisions', description: 'Leverage AI insights for data-driven business intelligence' },
        { icon: <Bot />, title: 'Custom Solutions', description: 'Tailored automation built specifically for your workflows' }
    ];

    const services = [
        'Workflow Automation',
        'AI Chatbot Development',
        'Data Processing & Analysis',
        'Document Automation',
        'CRM & Email Automation',
        'Custom AI Model Integration',
        'Process Optimization',
        'API Integration & Development'
    ];

    const useCases = [
        {
            title: 'Customer Service Automation',
            description: 'AI-powered chatbots that handle common inquiries 24/7, reducing response times and support costs',
            results: 'Up to 70% reduction in support tickets'
        },
        {
            title: 'Marketing Automation',
            description: 'Automated lead nurturing, personalized email campaigns, and intelligent ad optimization',
            results: 'Increased conversion rates by 40%+'
        },
        {
            title: 'Data Entry & Processing',
            description: 'Eliminate manual data entry with intelligent document processing and automated workflows',
            results: '90% faster data processing'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
                {/* Hero */}
                <section className="pt-32 pb-16">
                    <div className="container max-w-5xl">
                        <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                            Back to Services
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <Brain className="w-16 h-16 text-primary" />
                            <h1 className="text-white text-4xl md:text-5xl font-bold">
                                AI & Automation
                            </h1>
                        </div>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Harness the power of artificial intelligence to automate workflows, enhance decision-making, and drive exponential growth. From custom AI solutions to intelligent automation, we help you work smarter, not harder.
                        </p>
                    </div>
                </section>

                {/* What We Offer */}
                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-5xl">
                        <h2 className="text-white text-3xl font-bold mb-12">What We Offer</h2>
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

                {/* Benefits */}
                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-5xl">
                        <h2 className="text-white text-3xl font-bold mb-12">Why AI & Automation?</h2>
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

                {/* Use Cases */}
                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-5xl">
                        <h2 className="text-white text-3xl font-bold mb-12">Real-World Applications</h2>
                        <div className="space-y-6">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="bg-dark-1 border-2 border-dark-2 hover:border-primary rounded-lg p-8 transition-all">
                                    <h3 className="text-white text-2xl font-bold mb-3">{useCase.title}</h3>
                                    <p className="text-gray-400 mb-4">{useCase.description}</p>
                                    <div className="inline-flex items-center bg-primary/10 border border-primary rounded-full px-4 py-2">
                                        <span className="text-primary text-sm font-semibold">{useCase.results}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Ready to Automate Your Business?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's discuss how AI and automation can transform your operations
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
