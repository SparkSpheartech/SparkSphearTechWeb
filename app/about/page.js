import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Linkedin, Mail, Award, Target, Heart } from 'lucide-react';

export const metadata = {
    title: 'About the Founder | SparkSphear Tech Solutions',
    description: 'Meet the founder of SparkSphear Tech Solutions and learn about our mission to empower Fort Wayne businesses with cutting-edge technology.',
};

export default function About() {
    const values = [
        {
            icon: <Award />,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality solutions and service'
        },
        {
            icon: <Target />,
            title: 'Innovation',
            description: 'Always pursuing the latest technologies to give clients a competitive edge'
        },
        {
            icon: <Heart />,
            title: 'Community',
            description: 'Dedicated to empowering local Fort Wayne businesses to thrive'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
                {/* Hero Section */}
                <section className="pt-32 pb-16">
                    <div className="container max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Photo */}
                            <div className="order-2 lg:order-1">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
                                    <img
                                        src="/founder.jpg"
                                        alt="SparkSphear Founder"
                                        className="relative rounded-2xl w-full h-auto border-2 border-primary/30 shadow-2xl"
                                    />
                                </div>
                            </div>

                            {/* About Content */}
                            <div className="order-1 lg:order-2">
                                <span className="inline-flex items-center bg-primary/10 border border-primary rounded-full px-4 py-2 mb-6">
                                    <span className="text-primary text-sm font-semibold">ABOUT THE FOUNDER</span>
                                </span>
                                <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                                    Building the Future of <span className="text-primary">Technology</span>
                                </h1>
                                <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                                    <p>
                                        Welcome to SparkSphear Tech Solutions. I founded this company with a clear mission: to empower businesses in Fort Wayne and beyond with cutting-edge technology that drives real results.
                                    </p>
                                    <p>
                                        As a father and technology enthusiast, I understand the importance of reliable, innovative solutions that help businesses grow while making time for what matters most. Whether it's AI automation, stunning visual content, or comprehensive IT infrastructure, we're here to help you succeed.
                                    </p>
                                    <p>
                                        At SparkSphear, we don't just provide services—we build lasting partnerships. Every client is unique, and we take the time to understand your specific needs, challenges, and goals. Our approach combines technical expertise with genuine care for your success.
                                    </p>
                                    <p>
                                        I'm proud to lead a team that's passionate about technology and dedicated to delivering excellence. Together, we're not just solving today's problems—we're building tomorrow's solutions.
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <Link
                                        href="#book-meeting"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
                                    >
                                        Let's Connect
                                    </Link>
                                    <a
                                        href="mailto:SparkSphear4me@gmail.com"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-2 text-white font-bold border-2 border-dark-2 hover:border-primary transition-all duration-300 rounded-md"
                                    >
                                        <Mail size={20} />
                                        Email Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                What Drives <span className="text-primary">Me</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                The principles that guide everything we do at SparkSphear
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-1 border-2 border-dark-2 hover:border-primary rounded-lg p-8 text-center transition-all duration-300 group"
                                >
                                    <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                        {React.cloneElement(value.icon, { className: 'w-12 h-12' })}
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-4xl">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-12 text-center">
                            <h2 className="text-white text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-300 text-xl leading-relaxed">
                                "To empower businesses with innovative technology solutions that drive growth, efficiency, and success—delivered with integrity, expertise, and a personal touch."
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Ready to Work Together?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's discuss how SparkSphear can help your business thrive
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#book-meeting"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
                            >
                                Schedule a Consultation
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 bg-dark-2 text-white font-bold border-2 border-dark-2 hover:border-primary transition-all duration-300 rounded-md"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
