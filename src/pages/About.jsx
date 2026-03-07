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
                    <div className="about-grid">
                        <div className="about-text animate-on-scroll">
                            <h2 className="section-title mb-40">Brand Philosophy</h2>
                            <p className="mb-20">
                                At EVERLOOP CARPET, we believe that the foundation of any great architectural space begins from the ground up. Our mission is to produce modular flooring systems that do more than cover a surface—they enhance the structural integrity, acoustic dynamics, and visual aesthetic of commercial environments worldwide.
                            </p>
                            <p>
                                We serve corporate offices, airports, luxury hotels, and modern IT parks with unwavering commitment to international quality standards, rigorous testing, and sustainable manufacturing practices.
                            </p>
                        </div>
                        <div className="about-image animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" alt="Corporate Office Flooring" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Control & Sustainability */}
            <section className="section">
                <div className="container">
                    <div className="about-grid reverse">
                        <div className="about-text animate-on-scroll">
                            <h2 className="section-title mb-40">Manufacturing Excellence & Sustainability</h2>
                            <p className="mb-20">
                                Our advanced manufacturing facilities employ precision engineering to create carpet tiles that withstand the heaviest commercial traffic (Class 33 rating). Every batch undergoes strict quality control for color fastness, dimensional stability, and fire retardancy.
                            </p>
                            <p>
                                As a forward-thinking global brand, we are committed to closing the loop. Our eco-series tiles utilize up to 100% recycled nylon yarn and environmentally responsible backing materials, ensuring your project meets elite eco-building certifications.
                            </p>
                        </div>
                        <div className="about-image animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                            <img src="https://images.unsplash.com/photo-1574681615436-1e0e844a4993?q=80&w=1974&auto=format&fit=crop" alt="Quality Control Detail" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Vision */}
            <section className="section dark-section text-center">
                <div className="container animate-on-scroll">
                    <h2 className="section-title mb-40">Vision for Global Expansion</h2>
                    <p className="max-w-800 mx-auto text-light">
                        Headquartered at the intersection of design and industry, EVERLOOP CARPET is rapidly expanding its footprint across North America, Europe, and Asia. Our dedicated specification teams work directly with leading architectural firms to deliver bespoke flooring solutions for the world's finest places.
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;
