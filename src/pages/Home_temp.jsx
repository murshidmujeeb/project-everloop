import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Home.css';
import { InteractiveCollage } from '../components/InteractiveCollage';

// ─── Animated Section Wrapper ─────────────────────────────────
const FadeUp = ({ children, delay = 0, className = '' }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
        className={className}
    >
        {children}
    </motion.div>
);

// ─── Staggered Reveal ──────────────────────────────────────────
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const textReveal = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

// ─── FAQ Data ─────────────────────────────────────────────────
const faqData = [
    {
        q: 'How do I maintain and clean Everloop carpet tiles?',
        a: 'Regular vacuuming is all that is needed for day-to-day care. For spills, blot immediately with a clean cloth. Our tiles are treated with a built-in stain-resistant finish, and individual tiles can be lifted and deep-cleaned or replaced if needed.'
    },
    {
        q: 'Are Everloop carpets made from recycled materials?',
        a: 'Yes. Our tiles use 100% recycled backing and are manufactured using low-carbon processes. At end-of-life, tiles can be returned through our Return Credit Programme for reprocessing into new products.'
    },
    {
        q: 'How does the Return Credit Programme work?',
        a: 'When your carpet reaches the end of its service life, we arrange collection at no cost. You receive credit toward your next Everloop order — keeping materials in circulation and waste out of landfill.'
    },
    {
        q: 'What is involved in the installation process?',
        a: 'Everloop modular tiles are designed for straightforward installation. Our team provides full site assessment, layout planning, and professional installation. Typical commercial installs are completed with minimal downtime.'
    },
    {
        q: 'What warranty do Everloop products carry?',
        a: 'All Everloop collections carry a lifetime structural warranty on the backing system, plus a 15-year wear and appearance warranty for commercial use rated Class 33 Heavy Commercial. Full warranty terms are available on request.'
    }
];

// ─── Collections Data ─────────────────────────────────────────
const collectionsPreview = [
    { id: 1, category: 'Loop Pile', name: 'Aria Series', material: 'Premium Nylon 6,6', img: '/collections/Aria/aria-0001-thumb.jpg' },
    { id: 2, category: 'Cut & Loop', name: 'Amethyst Collection', material: 'Solution-Dyed Nylon', img: '/collections/Amethyst/amethyst-0001-thumb.jpg' },
    { id: 3, category: 'Textured Tile', name: 'Aether Series', material: 'Recycled Fibre Blend', img: '/collections/Aether/aether-0001-thumb.jpg' },
    { id: 4, category: 'Classic Finish', name: 'Bronze Series', material: 'Heavy Commercial Nylon', img: '/collections/Bronze/bronze-0001-thumb.jpg' },
    { id: 5, category: 'Modular Plank', name: 'Drift Collection', material: 'Wool & Nylon Blend', img: '/collections/Aria/aria-0002-thumb.jpg' },
    { id: 6, category: 'High Performance', name: 'Onyx Series', material: 'Anti-static Nylon 6,6', img: '/collections/Amethyst/amethyst-0002-thumb.jpg' },
];

// ─── Feature Cards Data ───────────────────────────────────────
const features = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 4L4 12v16l16 8 16-8V12L20 4z"/><path d="M20 4v24M4 12l16 8 16-8"/>
            </svg>
        ),
        heading: 'Recycled Materials',
        body: '100% recycled backing on every tile. Manufactured using low-carbon processes certified to global sustainability standards.'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="20" cy="20" r="14"/><path d="M20 6v14l8 8"/>
            </svg>
        ),
        heading: 'Loop Construction',
        body: 'High-density loop pile engineered for Class 33 Heavy Commercial rating. Maintains pile integrity through millions of footfalls.'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6,20 14,28 34,12"/>
            </svg>
        ),
        heading: 'Return Programme',
        body: 'End-of-life tiles are collected and reprocessed into new products. You receive credit toward your next Everloop order.'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="6" width="28" height="28" rx="2"/><path d="M6 16h28M16 6v28"/>
            </svg>
        ),
        heading: 'Modular Flexibility',
        body: 'Precision-cut tiles for seamless installation, reconfiguration, and spot replacement — no full floor replacement required.'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6c-7.7 0-14 6.3-14 14 0 5.2 2.8 9.7 7 12.1V34h14v-1.9c4.2-2.4 7-6.9 7-12.1 0-7.7-6.3-14-14-14z"/><path d="M16 34v2h8v-2"/>
            </svg>
        ),
        heading: 'Superior Acoustics',
        body: 'Advanced acoustic foam backing reduces impact noise by up to 30dB — essential for open offices, hospitality and transport hubs.'
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 4l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L20 22l-6.9 3.6 1.3-7.7-5.6-5.4 7.7-1.1z"/>
            </svg>
        ),
        heading: 'Lifetime Warranty',
        body: 'Lifetime structural warranty on the backing system, plus a 15-year wear and appearance guarantee for heavy commercial environments.'
    }
];

// ─── Steps Data ───────────────────────────────────────────────
const steps = [
    { num: '01', title: 'Browse Collections', body: 'Explore our full range of commercial carpet tiles online or request a physical sample kit delivered to your project site.' },
    { num: '02', title: 'Request Samples', body: 'Order sample tiles to assess texture, colour, and performance in your actual environment before committing.' },
    { num: '03', title: 'Get Measured', body: 'Our team conducts a full site assessment, produces layout drawings, and provides a detailed installation quotation.' },
    { num: '04', title: 'Professional Installation', body: 'Certified Everloop installers complete the project with precision, minimal disruption, and a comprehensive handover report.' }
];

// ─── FAQ Item Component ───────────────────────────────�    const { scrollYProgress } = useScroll({
        target: stickyRef,
        offset: ["start start", "end end"]
    });

    // SMOOTHING: introduction of useSpring to stop the 'broken shift'
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transforms for the card rotation and position swap (using smoothProgress)
    const cardRotateY = useTransform(smoothProgress, [0.3, 0.7], ["0deg", "180deg"]);
    const cardZ = useTransform(smoothProgress, [0.3, 0.5, 0.7], [0, 200, 0]);

    // Image moves from RIGHT to LEFT (synchronized with flip using smoothProgress)
    const imageX = useTransform(smoothProgress, [0.3, 0.7], ["0%", "calc(-100% - 80px)"]);
    // Text moves from LEFT to RIGHT
    const textX = useTransform(smoothProgress, [0.3, 0.7], ["0%", "calc(100% + 80px)"]);
    
    // Process Text animations (using smoothProgress)
    const processTextOpacity = useTransform(smoothProgress, [0, 0.35, 0.5], [1, 1, 0]);
    const processTextInsideX = useTransform(smoothProgress, [0, 0.35, 0.5], [0, 0, -50]);
    
    // Sustainability Text animations (using smoothProgress)
    const sustainabilityTextOpacity = useTransform(smoothProgress, [0.45, 0.65, 1], [0, 1, 1]);
    const sustainabilityTextInsideX = useTransform(smoothProgress, [0.45, 0.65, 1], [50, 0, 0]);
imageX = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "calc(-100% - 80px)"]);
    // Text moves from LEFT to RIGHT
    const textX = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "calc(100% + 80px)"]);
    
    // Process Text animations (Pausing before transition)
    const processTextOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0]);
    const processTextInsideX = useTransform(scrollYProgress, [0, 0.35, 0.5], [0, 0, -50]);
    
    // Sustainability Text animations (Fading in while moving right)
    const sustainabilityTextOpacity = useTransform(scrollYProgress, [0.45, 0.65, 1], [0, 1, 1]);
    const sustainabilityTextInsideX = useTransform(scrollYProgress, [0.45, 0.65, 1], [50, 0, 0]);

    // Re-adjusting for the component below
    
    return (
        <div className="home-page">
            <Helmet>
                <title>EVERLOOP CARPET | Premium Modular Carpet Solutions</title>
                <meta name="description" content="High-performance modular carpet tiles engineered for modern architecture, global commercial spaces, and next-generation interiors." />
            </Helmet>

            {/* ─ HERO ─────────────────────────────────────────── */}
            <section className="hero-section" style={{ backgroundImage: `url('/bg-image.jpg')` }}>
                <div className="hero-overlay" />

                <div className="hero-content">
                    <motion.span
                        initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 30 }}
                        animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-eyebrow"
                    >
                        Sustainable Carpeting
                    </motion.span>

                    <motion.h1
                        className="hero-headline"
                        initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 50 }}
                        animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Crafted For<br />World's Finest Places
                    </motion.h1>

                    <motion.p
                        initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 30 }}
                        animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-subtext"
                    >
                        High-performance modular carpet tiles engineered for modern architecture, global commercial spaces, and next-generation interiors.
                    </motion.p>

                    <motion.div
                        initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 20 }}
                        animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1, y: 0 }}
                        transition={{ delay: 1.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-actions"
                    >
                        <Link to="/collections" className="btn btn-white">Explore Collections</Link>
                        <Link to="/contact" className="btn btn-ghost">Request Sample Kit</Link>
                    </motion.div>
                </div>
            </section>

            {/* ─ STATS BAR ────────────────────────────────────── */}
            <section className="stats-bar">
                <div className="stats-inner">
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Years Industry Experience</span>
                    </div>
                    <div className="stat-divider" aria-hidden />
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Recycled Backing</span>
                    </div>
                    <div className="stat-divider" aria-hidden />
                    <div className="stat-item">
                        <span className="stat-number">Lifetime</span>
                        <span className="stat-label">Return Credit Programme</span>
                    </div>
                </div>
            </section>

            {/* ─ INTERACTIVE COLLECTIONS SECTION ─────────────────── */}
            <section className="section collections-section">
                <InteractiveCollage />
                
                <div className="collections-content-layer">
                    <motion.div 
                        className="collections-header glassmorphism-overlay"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <motion.span variants={textReveal} className="section-eyebrow" style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '16px' }}>Our Collections</motion.span>
                        <motion.h2 variants={textReveal} className="section-title text-center">Engineered for Every Space</motion.h2>
                        <motion.p variants={textReveal} className="section-sub text-center mx-auto max-w-560">
                            From monolithic corporate environments to intimate hospitality spaces — our modular collections adapt to every design vision.
                        </motion.p>
                        
                        <motion.div variants={textReveal} style={{ marginTop: '32px' }}>
                             <Link to="/collections" className="btn btn-primary" style={{ backgroundColor: 'var(--text-primary)', color: '#fff' }}>View Full Collections</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─ UNIFIED STICKY EXPERIENCE ──────────────────────── */}
            <section className="section sticky-experience-section" ref={stickyRef}>
                <div className="sticky-container">
                    <div className="sticky-inner">
                        {/* Text Layer */}
                        <motion.div className="sticky-text-layer" style={{ x: textX }}>
                            {/* Our Process Text */}
                            <motion.div 
                                className="sticky-text-block"
                                style={{ opacity: processTextOpacity, x: processTextInsideX }}
                            >
                                <span className="section-eyebrow">Our Process</span>
                                <h2 className="section-title">Grounded in Manufacturing</h2>
                                <p style={{ marginBottom: '16px' }}>
                                    We started on the factory floor — among looms, dye baths, and engineers obsessed with tolerances measured in microns. Every tile that leaves our lines is the result of disciplined process: yarn selection, twist, tuft bind, backing chemistry, and edge precision all tuned for decades of service.
                                </p>
                                <Link to="/about" className="split-cta-link">Learn About Our Process →</Link>
                            </motion.div>

                            {/* Sustainability Text */}
                            <motion.div 
                                className="sticky-text-block"
                                style={{ opacity: sustainabilityTextOpacity, x: sustainabilityTextInsideX }}
                            >
                                <span className="section-eyebrow">Sustainability</span>
                                <h2 className="section-title">Designed for Circularity</h2>
                                <p style={{ marginBottom: '16px' }}>
                                    The next chapter of EVERLOOP is about circularity: tiles that are easier to reclaim, and a Return Credit Programme that keeps materials in circulation and waste out of landfill.
                                </p>
                                <p style={{ marginBottom: '32px' }}>
                                    100% recyclable backing. Low-carbon manufacturing.
                                </p>
                                <Link to="/about" className="split-cta-link">Our Sustainability Commitment →</Link>
                            </motion.div>
                        </motion.div>

                        {/* Image Layer (Flipping Card) */}
                        <motion.div 
                            className="sticky-image-layer"
                            style={{ x: imageX }}
                        >
                            <motion.div 
                                className="flip-card"
                                style={{ rotateY: cardRotateY, z: cardZ }}
                            >
                                {/* Front: Process */}
                                <div className="flip-card-face flip-card-front">
                                    <img
                                        src="/manufacturing-machinery.jpg"
                                        alt="Our Process"
                                        className="split-image"
                                    />
                                </div>
                                {/* Back: Sustainability */}
                                <div className="flip-card-face flip-card-back">
                                    <img
                                        src="/sustainability.jpg"
                                        alt="Sustainability"
                                        className="split-image"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─ FEATURE GRID ─────────────────────────────────── */}
            <section className="section features-section" style={{ background: '#FFFFFF' }}>
                <div className="container">
                    <FadeUp className="text-center" style={{ marginBottom: '56px' }}>
                        <span className="section-eyebrow">Why Everloop</span>
                        <h2 className="section-title">Everything You Need</h2>
                        <p className="section-sub mx-auto max-w-560">
                            Every Everloop collection is built from the same foundation of performance, sustainability, and precision.
                        </p>
                    </FadeUp>

                    <div className="feature-grid">
                        {features.map((f, i) => (
                            <FadeUp key={i} delay={i * 0.07} className="feature-card card-hover">
                                <div className="feature-icon">{f.icon}</div>
                                <h3 className="feature-heading">{f.heading}</h3>
                                <p className="feature-body">{f.body}</p>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─ HOW IT WORKS ─────────────────────────────────── */}
            <section className="section steps-section">
                <div className="container">
                    <FadeUp className="text-center" style={{ marginBottom: '72px' }}>
                        <span className="section-eyebrow">The Process</span>
                        <h2 className="section-title">How It Works</h2>
                        <p className="section-sub mx-auto max-w-560">
                            From first browse to professional installation — we walk alongside you at every step.
                        </p>
                    </FadeUp>

                    <div className="steps-grid">
                        {steps.map((step, i) => (
                            <React.Fragment key={step.num}>
                                <FadeUp delay={i * 0.1} className="step-item">
                                    <span className="step-number">{step.num}</span>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-body">{step.body}</p>
                                </FadeUp>
                                {i < steps.length - 1 && <div className="step-divider" aria-hidden />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─ FAQ ACCORDION ────────────────────────────────── */}
            <section className="section faq-section" style={{ background: '#FFFFFF' }}>
                <div className="container">
                    <FadeUp className="text-center" style={{ marginBottom: '56px' }}>
                        <span className="section-eyebrow">Support</span>
                        <h2 className="section-title">Common Questions</h2>
                    </FadeUp>

                    <div className="faq-list max-w-760">
                        {faqData.map((item, i) => (
                            <FaqItem key={i} q={item.q} a={item.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─ DARK CTA BANNER ──────────────────────────────── */}
            <section className="cta-banner">
                <div className="container cta-banner-inner">
                    <FadeUp>
                        <h2 className="cta-headline">Ready to Find Your Perfect Carpet?</h2>
                        <p className="cta-subline">
                            Talk to our team about your project. We will guide you from first concept to final installation.
                        </p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-ghost">Get a Quote</Link>
                            <Link to="/collections" className="btn btn-ghost">Browse Collections</Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
};

export default Home;

