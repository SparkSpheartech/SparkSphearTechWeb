"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        text: "SparkSphear transformed our online presence. We went from invisible to fully booked in three months. Their local SEO strategy is a game changer.",
        name: "Sarah Jenkins",
        role: "Local Business Owner",
        rating: 5
    },
    {
        text: "The best tech partner we've worked with in Fort Wayne. Their 24/7 support gives us total peace of mind, and the team is genuinely helpful.",
        name: "Mike Ross",
        role: "Director of Operations",
        rating: 5
    },
    {
        text: "We needed a custom security audit for our client data. SparkSphear explained everything clearly and secured our network fast.",
        name: "Emily White",
        role: "Healthcare Practice Manager",
        rating: 5
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const Testimonials = () => {
    return (
        <section className="section testimonials bg-gray-50">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="tag">TESTIMONIALS</span>
                    <h2>Trust from our clients</h2>
                    <p>See why Fort Wayne businesses choose SparkSphear.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="testimonials-slider grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, index) => (
                        <motion.div key={index} variants={itemVariants} className="testimonial-card bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex gap-1 text-[#a6fd37] mb-4">
                                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                            <div className="client-info mt-auto">
                                <h5 className="font-bold text-dark">{t.name}</h5>
                                <span className="text-sm text-gray-500">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="#contact-us"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
                    >
                        Become Our Next Success Story
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
