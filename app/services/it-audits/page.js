import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Database, Search, Cloud, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'IT Infrastructure Audits | SparkSphear',
    description: 'Comprehensive technology assessments including competitor analysis, data engineering, cloud infrastructure, and security audits.',
};

export default function ITAudits() {
    const services = [
        'Technology Stack Assessment',
        'Competitor Analysis',
        'Data Engineering & Architecture',
        'Cloud Infrastructure Review',
        'Security & Compliance Audit',
        'Performance Optimization',
        'Cost Analysis & Recommendations',
        'Strategic Technology Roadmap'
    ];

    const benefits = [
        { icon: <Search />, title: 'Deep Insights', description: 'Comprehensive analysis of your entire technology ecosystem' },
        { icon: <Database />, title: 'Data-Driven', description: 'Actionable recommendations based on hard data and metrics' },
        { icon: <Cloud />, title: 'Cloud Optimization', description: 'Maximize efficiency and reduce unnecessary cloud costs' },
        { icon: <Shield />, title: 'Risk Mitigation', description: 'Identify vulnerabilities before they become problems' }
    ];

    const auditAreas = [
        {
            title: 'Competitor Analysis',
            description: 'Understand how your technology stack compares to competitors and industry leaders',
            deliverables: [
                'Competitive landscape overview',
                'Technology gap analysis',
                'Best practice recommendations',
                'Market positioning insights'
            ]
        },
        {
            title: 'Data Engineering',
            description: 'Optimize your data pipelines, architecture, and analytics capabilities',
            deliverables: [
                'Data flow mapping',
                'Architecture assessment',
                'Integration opportunities',
                'Scalability recommendations'
            ]
        },
        {
            title: 'Cloud Infrastructure',
            description: 'Audit cloud resources for performance, security, and cost optimization',
            deliverables: [
                'Resource utilization analysis',
                'Cost optimization opportunities',
                'Security configuration review',
                'Migration recommendations'
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
                            <Database className="w-16 h-16 text-primary" />
                            <h1 className="text-white text-4xl md:text-5xl font-bold">
                                IT Infrastructure Audits
                            </h1>
                        </div>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Comprehensive technology assessments with actionable insights for optimization and growth. From competitor analysis to cloud infrastructure, we help you make informed technology decisions.
                        </p>
                    </div>
                </section>

                <section className="py-16 border-t border-dark-2">
                    <div className="container max-w-5xl">
                        <h2 className="text-white text-3xl font-bold mb-12">What We Audit</h2>
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
                        <h2 className="text-white text-3xl font-bold mb-12">Why Audit Your Infrastructure</h2>
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
                        <h2 className="text-white text-3xl font-bold mb-12">Core Audit Areas</h2>
                        <div className="space-y-8">
                            {auditAreas.map((area, index) => (
                                <div key={index} className="bg-dark-1 border-2 border-dark-2 hover:border-primary rounded-lg p-8 transition-all">
                                    <h3 className="text-white text-2xl font-bold mb-3">{area.title}</h3>
                                    <p className="text-gray-400 mb-6">{area.description}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {area.deliverables.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span>{item}</span>
                                            </div>
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
                            Ready to Optimize Your Technology?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Schedule a comprehensive IT infrastructure audit today
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
