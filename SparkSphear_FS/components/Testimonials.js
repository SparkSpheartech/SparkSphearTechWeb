"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        text: "SparkSphear transformed our online presence. We went from invisible to fully booked in three months.",
        name: "Sarah Jenkins",
        role: "Small Business Owner"
    },
    {
        text: "Professional, timely, and incredibly skilled. The photography service alone elevated our brand significantly.",
        name: "Mike Ross",
        role: "Tech Startup Founder"
    },
    {
        text: "We needed a custom tech solution for our logistics, and they delivered a flawless system.",
        name: "David Chen",
        role: "Operations Manager"
    },
    {
        text: "The best tech partner we've worked with. Their 24/7 support gives us total peace of mind.",
        name: "Emily White",
        role: "Director of Marketing"
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
        <section className="section testimonials">
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
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="testimonials-slider"
                >
                    {testimonials.map((t, index) => (
                        <motion.div key={index} variants={itemVariants} className="testimonial-card">
                            <p>"{t.text}"</p>
                            <div className="client-info">
                                <h5>{t.name}</h5>
                                <span>{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
