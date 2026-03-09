import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>About Us | EVERLOOP CARPET</title>
                <meta name="description" content="Engineered for longevity, designed for impact. Learn about Everloop Carpet's philosophy and commitment to quality." />
            </Helmet>

            {/* Page Header */}
            <section className="page-header">
                <div className="container text-center">
                    <h1 className="page-title fade-in">ABOUT EVERLOOP</h1>
                    <p className="page-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
                        Engineered for Longevity. Designed for Impact.
                    </p>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section className="section bg-alt about-content">
                <div className="container">
                    <div className="about-hero-text animate-on-scroll">
                        <span className="page-eyebrow">PHILOSOPHY</span>
                        <h2 className="section-title large mb-40">Engineering the Foundation of Modern Workspaces</h2>
                        <div className="philosophy-grid">
                            <p className="lead-text">
                                At EVERLOOP CARPET, we believe that the foundation of any great architectural space begins from the ground up. Our mission is to produce modular flooring systems that do more than cover a surface—they enhance the structural integrity, acoustic dynamics, and visual aesthetic of commercial environments worldwide.
                            </p>
                            <p>
                                We serve corporate offices, airports, luxury hotels, and modern IT parks with unwavering commitment to international quality standards, rigorous testing, and sustainable manufacturing practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="section pillars-section">
                <div className="container">
                    <div className="pillars-grid">
                        <div className="pillar-card animate-on-scroll">
                            <span className="pillar-number">01</span>
                            <h3>Sustainable Manufacturing</h3>
                            <p>Closing the loop with eco-series tiles utilizing up to 100% recycled nylon yarn and environmentally responsible backing materials.</p>
                        </div>
                        <div className="pillar-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
                            <span className="pillar-number">02</span>
                            <h3>Quality Standards</h3>
                            <p>Precision engineering created to withstand the heaviest commercial traffic (Class 33 rating) with strict quality control for longevity.</p>
                        </div>
                        <div className="pillar-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                            <span className="pillar-number">03</span>
                            <h3>Global Vision</h3>
                            <p>Expanding footprint across North America, Europe, and Asia, delivering bespoke flooring solutions for the world's finest architectural projects.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Statment */}
            <section className="section dark-section text-center">
                <div className="container animate-on-scroll">
                    <h2 className="section-title mb-40">Innovation in Every Fiber</h2>
                    <p className="max-w-800 mx-auto text-light">
                        Headquartered at the intersection of design and industry, EVERLOOP CARPET works directly with leading architectural firms to deliver flooring systems that meet elite eco-building certifications while maintaining uncompromising aesthetic standards.
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;
