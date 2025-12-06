"use client";
import React from 'react';
import { Globe, ShieldCheck, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="section what-we-do">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <span className="tag">WHAT WE DO</span>
                    <h2>Empowering small businesses with comprehensive tech solutions</h2>
                    <p>From boosting your Google rankings to 24/7 tech support, we're your trusted technology partner in
                        the Greater Fort Wayne area.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="features-grid"
                >
                    <motion.div variants={itemVariants} className="feature-card">
                        <Globe size={48} className="text-primary mb-4" />
                        <h3>Digital Growth</h3>
                        <p>Boost your online presence and reach your target audience with our digital marketing
                            strategies.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="feature-card">
                        <ShieldCheck size={48} className="text-primary mb-4" />
                        <h3>Reliable Support</h3>
                        <p>24/7 technical assistance to keep your business running smoothly without interruption.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="feature-card">
                        <Camera size={48} className="text-primary mb-4" />
                        <h3>Creative Visuals</h3>
                        <p>High-quality photography and videography to capture and tell your brand's unique story.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeDo;
