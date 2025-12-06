"use client";
import React from 'react';
import { MessageSquare, FileSearch, Rocket, TrendingUp } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" className="section features-list bg-dark text-white animate-on-scroll">
            <div className="container">
                <div className="section-header text-center mb-16">
                    <span className="tag text-[#a6fd37]">HOW WE WORK</span>
                    <h2 className="text-white">Your Path to Digital Success</h2>
                    <p className="text-gray-400">A simple, transparent process designed to get results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 z-0"></div>

                    <div className="feature-item relative z-10 text-center">
                        <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 border-2 border-[#a6fd37] shadow-[0_0_20px_rgba(166,253,55,0.2)]">
                            <MessageSquare size={32} className="text-[#a6fd37]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">1. Consult</h3>
                        <p className="text-gray-400 text-sm">We listen to your goals and challenges to understand your unique needs.</p>
                    </div>

                    <div className="feature-item relative z-10 text-center">
                        <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 border-2 border-gray-700 hover:border-[#a6fd37] transition-colors">
                            <FileSearch size={32} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">2. Strategize</h3>
                        <p className="text-gray-400 text-sm">We build a custom roadmap, choosing the right tech and tactics for you.</p>
                    </div>

                    <div className="feature-item relative z-10 text-center">
                        <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 border-2 border-gray-700 hover:border-[#a6fd37] transition-colors">
                            <Rocket size={32} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">3. Deploy</h3>
                        <p className="text-gray-400 text-sm">Our team executes the plan with precision, ensuring minimal disruption.</p>
                    </div>

                    <div className="feature-item relative z-10 text-center">
                        <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 border-2 border-gray-700 hover:border-[#a6fd37] transition-colors">
                            <TrendingUp size={32} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">4. Optimize</h3>
                        <p className="text-gray-400 text-sm">We monitor performance and continuously refine to maximize your ROI.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
