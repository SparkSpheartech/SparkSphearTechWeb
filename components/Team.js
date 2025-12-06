"use client";
import React from 'react';

const Team = () => {
    return (
        <section className="section team animate-on-scroll">
            <div className="container">
                <div className="section-header">
                    <span className="tag">OUR TEAM</span>
                    <h2>Dedicated experts ready to serve you</h2>
                </div>
                <div className="team-grid stagger-grid">
                    <div className="team-member">
                        <div className="member-image">
                            <img src="https://placehold.co/400x400/1b1b1b/a6fd37?text=Leader" alt="Team Leader" className="w-full h-full object-cover" />
                        </div>
                        <h4>Expert Leader</h4>
                        <p>CEO, Tech Lead</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image">
                            <img src="https://placehold.co/400x400/1b1b1b/a6fd37?text=Creative" alt="Creative Director" className="w-full h-full object-cover" />
                        </div>
                        <h4>Creative Director</h4>
                        <p>Design & Media</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image">
                            <img src="https://placehold.co/400x400/1b1b1b/a6fd37?text=Support" alt="Support Specialist" className="w-full h-full object-cover" />
                        </div>
                        <h4>Support Specialist</h4>
                        <p>IT Operations</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
