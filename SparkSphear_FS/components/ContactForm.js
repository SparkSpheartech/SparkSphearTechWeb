"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

// Validation Schema
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data) => {
        // Simulate form submission
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Thanks! We'll be in touch shortly.");
    };

    return (
        <section id="contact-us" className="section contact-section">
            <div className="container" style={{ maxWidth: '600px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="tag">CONTACT US</span>
                    <h2>Ready to discuss your project? Drop us a line.</h2>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="contact-form"
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    <div className="form-group">
                        <input
                            {...register("name")}
                            placeholder="Your Name *"
                            className="form-input"
                            style={{ width: '100%', padding: '16px', borderRadius: '4px', border: '1px solid #e0e0e0', backgroundColor: '#f9f9f9' }}
                        />
                        {errors.name && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.name.message}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            {...register("email")}
                            placeholder="Type Your Email *"
                            className="form-input"
                            style={{ width: '100%', padding: '16px', borderRadius: '4px', border: '1px solid #e0e0e0', backgroundColor: '#f9f9f9' }}
                        />
                        {errors.email && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.email.message}</span>}
                    </div>

                    <div className="form-group">
                        <textarea
                            {...register("message")}
                            placeholder="Ask your question..."
                            className="form-input"
                            rows={4}
                            style={{ width: '100%', padding: '16px', borderRadius: '4px', border: '1px solid #e0e0e0', backgroundColor: '#f9f9f9', fontFamily: 'inherit' }}
                        />
                        {errors.message && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.message.message}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary"
                        style={{ width: '100%', border: 'none' }}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '1rem', fontWeight: '500' }}>
                        Or call us at: (260) 267-0641
                    </p>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactForm;
