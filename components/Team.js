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
                        <div className="member-image"></div>
                        <h4>Expert Leader</h4>
                        <p>CEO, Tech Lead</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image"></div>
                        <h4>Creative Director</h4>
                        <p>Design & Media</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image"></div>
                        <h4>Support Specialist</h4>
                        <p>IT Operations</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
