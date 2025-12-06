"use client";
import React from 'react';

const Stats = () => {
    return (
        <section className="section stats animate-on-scroll">
            <div className="container">
                <div className="stats-grid">
                    <div className="team-member">
                        <h4 className="text-4xl font-bold mb-2">2022</h4>
                        <p>Year Founded</p>
                    </div>
                    <div className="team-member">
                        <h4 className="text-4xl font-bold mb-2">24/7</h4>
                        <p>Tech Support Available</p>
                    </div>
                    <div className="team-member">
                        <h4 className="text-4xl font-bold mb-2">100%</h4>
                        <p>Fort Wayne Local</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
