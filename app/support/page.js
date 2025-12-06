"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Ticket, MessageCircle, Phone, Mail, Clock } from 'lucide-react';

export default function SupportCenter() {
    const supportOptions = [
        {
            icon: <BookOpen className="w-12 h-12" />,
            title: "Knowledge Base",
            description: "Browse articles, guides, and tutorials",
            link: "/support/kb",
            color: "primary"
        },
        {
            icon: <Ticket className="w-12 h-12" />,
            title: "Submit a Ticket",
            description: "Get help from our support team",
            link: "/support/ticket",
            color: "primary"
        },
        {
            icon: <MessageCircle className="w-12 h-12" />,
            title: "Live Chat",
            description: "Chat with support (Coming Soon)",
            link: "#",
            color: "gray",
            disabled: true
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
                {/* Hero Section */}
                <section className="pt-32 pb-20">
                    <div className="container text-center">
                        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
                            How Can We <span className="text-primary">Help?</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
                            Find answers, submit tickets, or contact our support team
                        </p>
                    </div>
                </section>

                {/* Support Options Grid */}
                <section className="pb-20">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {supportOptions.map((option, index) => (
                                option.disabled ? (
                                    <div
                                        key={index}
                                        className="support-card bg-dark-1 border-2 border-dark-2 opacity-50 cursor-not-allowed rounded-lg p-8 text-center"
                                    >
                                        <div className="text-gray-600 mb-6 flex justify-center">
                                            {option.icon}
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-3">{option.title}</h3>
                                        <p className="text-gray-400">{option.description}</p>
                                    </div>
                                ) : (
                                    <Link
                                        key={index}
                                        href={option.link}
                                        className="support-card bg-dark-1 border-2 border-dark-2 hover:border-primary rounded-lg p-8 text-center transition-all duration-300 group hover:scale-105"
                                    >
                                        <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                            {option.icon}
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-3">{option.title}</h3>
                                        <p className="text-gray-400">{option.description}</p>
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-4xl">
                        <h2 className="text-white text-3xl font-bold text-center mb-12">
                            Other Ways to <span className="text-primary">Reach Us</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-primary mb-4 flex justify-center">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Phone</h3>
                                <p className="text-gray-400">(260) 247-7775</p>
                            </div>

                            <div className="text-center">
                                <div className="text-primary mb-4 flex justify-center">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Email</h3>
                                <p className="text-gray-400">contact@sparkspheartechsolutions.com</p>
                            </div>

                            <div className="text-center">
                                <div className="text-primary mb-4 flex justify-center">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Business Hours</h3>
                                <p className="text-gray-400">Mon-Fri: 8AM-6PM EST</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
