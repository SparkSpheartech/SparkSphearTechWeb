"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
return (
    <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <WhatWeDo />
        <Services />
        <Features />
        <Stats />
        <Team />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Footer />
    </main>
);
}
