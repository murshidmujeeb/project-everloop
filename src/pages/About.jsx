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

            {/* Story Hero */}
            <section className="page-header">
                <div className="container about-hero">
                    <div className="about-hero-copy">
                        <span className="page-eyebrow">OUR STORY</span>
                        <h1 className="page-title">From Loom to Skyline</h1>
                        <p className="page-subtitle">
                            EVERLOOP CARPET was born from a simple idea: commercial flooring should be as considered as the architecture it supports.
                        </p>
                    </div>
                    <div className="about-hero-meta animate-on-scroll">
                        <p>Today, our modular tiles sit quietly under millions of footsteps—guiding flows, absorbing sound, and holding up to the demands of cities that never switch off.</p>
                    </div>
                </div>
            </section>

            {/* Chapter 1 — Where we began */}
            <section className="section about-section about-chapter">
                <div className="container">
                    <div className="chapter-grid">
                        <div className="chapter-label animate-on-scroll">
                            <span>Chapter 01</span>
                            <h2>Grounded in Manufacturing</h2>
                        </div>
                        <div className="chapter-body animate-on-scroll">
                            <p className="lead-text">
                                We started on the factory floor—among looms, dye baths, and engineers obsessed with tolerances measured in microns.
                            </p>
                            <p>
                                Those origins shaped our culture. Every tile that leaves our lines is the result of disciplined process: yarn selection, twist, tuft bind, backing chemistry, and edge precision all tuned for decades of service in high-traffic environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 2 — How we think */}
            <section className="section about-section about-chapter alt">
                <div className="container">
                    <div className="chapter-grid">
                        <div className="chapter-label animate-on-scroll">
                            <span>Chapter 02</span>
                            <h2>Design as Infrastructure</h2>
                        </div>
                        <div className="chapter-body animate-on-scroll">
                            <p className="lead-text">
                                For us, design is not decoration—it is infrastructure. A floor map can guide wayfinding, tune acoustics, and quietly carry a brand story.
                            </p>
                            <p>
                                Our studio partners with architects, interior designers, and workplace strategists to build tile systems that solve real problems: reverberation in open offices, zoning for hybrid work, durability in transit hubs, and warmth in hospitality spaces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 3 — How we build a tile */}
            <section className="section about-section about-process">
                <div className="container">
                    <div className="about-hero-text animate-on-scroll">
                        <span className="page-eyebrow">INSIDE THE TILE</span>
                        <h2 className="section-title large mb-40">What goes into every EVERLOOP module</h2>
                    </div>
                    <div className="process-grid">
                        <div className="process-card animate-on-scroll">
                            <h3>Engineered Yarn Systems</h3>
                            <p>High-performance Nylon 6,6 with tight twist control for superior resilience, colourfastness, and soil resistance.</p>
                        </div>
                        <div className="process-card animate-on-scroll" style={{ transitionDelay: '0.08s' }}>
                            <h3>Dimensional Stability</h3>
                            <p>Multi-layer backing architecture with fiberglass reinforcement keeps tiles perfectly aligned in demanding climates.</p>
                        </div>
                        <div className="process-card animate-on-scroll" style={{ transitionDelay: '0.16s' }}>
                            <h3>Acoustic & Comfort Layers</h3>
                            <p>Acoustic foam bases and understructure absorb impact noise, reduce fatigue, and create quieter, higher-performing spaces.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 4 — Global footprint */}
            <section className="section dark-section about-chapter text-center">
                <div className="container animate-on-scroll">
                    <span className="page-eyebrow">CHAPTER 04 — GLOBAL FOOTPRINT</span>
                    <h2 className="section-title mb-40">Built for cities that never pause</h2>
                    <p className="max-w-800 mx-auto text-light mb-40">
                        From corporate towers in North America to aviation hubs in the Middle East and technology campuses in Asia, EVERLOOP systems are specified wherever performance and aesthetics must coexist.
                    </p>
                    <div className="about-stats">
                        <div className="about-stat">
                            <span className="about-stat-number">30+</span>
                            <span className="about-stat-label">Countries supplied</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat-number">1M+</span>
                            <span className="about-stat-label">Square meters installed</span>
                        </div>
                        <div className="about-stat">
                            <span className="about-stat-number">24/7</span>
                            <span className="about-stat-label">Spaces in continuous use</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Epilogue */}
            <section className="section about-epilogue">
                <div className="container animate-on-scroll">
                    <div className="epilogue-card">
                        <h2 className="section-title mb-20">Where we are going next</h2>
                        <p className="text-light mb-32">
                            The next chapter of EVERLOOP is about circularity and data: tiles that are easier to reclaim, and systems that help facility teams understand how their spaces are really used.
                        </p>
                        <p className="text-light">
                            If you are designing the next generation of workplaces, airports, or hospitality environments, we would love to write that story with you—from the ground up.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
