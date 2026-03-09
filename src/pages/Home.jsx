import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Volume2, Layers, Leaf, CheckCircle, Building2, Monitor, Plane, Coffee, GraduationCap, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import TileAnatomy from '../components/animations/TileAnatomy';
import TilePopAnimation from '../components/animations/TilePopAnimation';
import ColorBends from '../components/animations/ColorBends';
import LightRays from '../components/animations/LightRays';
import Orb from '../components/animations/Orb';
import Iridescence from '../components/animations/Iridescence';
import Prism from '../components/animations/Prism';
import './Home.css';

// ─── Animation Variants ───────────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 60, filter: 'blur(8px)', scale: 0.97 },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)', scale: 1,
        transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -60, filter: 'blur(6px)' },
    visible: {
        opacity: 1, x: 0, filter: 'blur(0px)',
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
};

const Home = () => {
    const [activeIndustry, setActiveIndustry] = useState(0);

    const industriesData = [
        { title: 'Corporate Offices', desc: 'Premium aesthetics with ultimate durability for high-traffic workspaces.', icon: <Building2 size={32} strokeWidth={1.5} /> },
        { title: 'IT Parks', desc: 'Advanced acoustic control for vast, open collaborative environments.', icon: <Monitor size={32} strokeWidth={1.5} /> },
        { title: 'Airports', desc: 'Heavy traffic resilience & subtle wayfinding integrated into the design.', icon: <Plane size={32} strokeWidth={1.5} /> },
        { title: 'Hospitality', desc: 'Luxury comfort, deep textures, and bespoke patterns for guest areas.', icon: <Coffee size={32} strokeWidth={1.5} /> },
        { title: 'Education', desc: 'Extreme stain resistance and vibrant, engaging color palettes.', icon: <GraduationCap size={32} strokeWidth={1.5} /> },
        { title: 'Retail', desc: 'High visual impact flooring that reinforces brand identity.', icon: <ShoppingBag size={32} strokeWidth={1.5} /> }
    ];

    const foundationFeatures = [
        { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: "Extreme Durability", desc: "Engineered with high-density premium Nylon 6,6 for unparalleled performance." },
        { icon: <Volume2 size={32} strokeWidth={1.5} />, title: "Superior Acoustics", desc: "Advanced acoustic foam backing reducing impact noise by up to 30dB." },
        { icon: <Layers size={32} strokeWidth={1.5} />, title: "Modular Unity", desc: "Precision-cut tiles for seamless installation and replacement." },
        { icon: <Leaf size={32} strokeWidth={1.5} />, title: "Eco Blueprint", desc: "100% recyclable materials with low carbon footprint." }
    ];

    return (
        <div className="home-page-wrapper">
            <Helmet>
                <title>EVERLOOP CARPET | Premium Modular Carpet Solutions</title>
                <meta name="description" content="High-performance modular carpet tiles engineered for modern architecture, global commercial spaces, and next-generation interiors." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-section vh-100-section" style={{ backgroundImage: `url('/hero-bg.jpg')` }}>
                <div className="hero-overlay"></div>

                <div className="hero-content bottom-left-align">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="hero-eyebrow text-secondary block-mb"
                    >
                        International Commercial Flooring
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-title-small"
                    >
                        Crafted For<br /><span className="text-white">World's Finest</span> Places
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="hero-subtext-small"
                    >
                        High-performance modular carpet tiles engineered for modern architecture, global commercial spaces, and next-generation interiors.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="hero-actions-left"
                    >
                        <Link to="/collections" className="btn btn-primary">Explore Collections</Link>
                        <Link to="/contact" className="btn btn-outline hero-btn-outline">Request Sample Kit</Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="scroll-indicator"
                >
                    <span className="scroll-text">Scroll</span>
                    <span className="mouse">
                        <motion.span
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="wheel"
                        ></motion.span>
                    </span>
                </motion.div>
            </section>


            {/* Section 2: Our Foundation */}
            <section id="foundation" className="section about-section relative vh-100-section" style={{ padding: 0 }}>
                {/* Sticky Orb Track to ensure it stays visually centered on all screen sizes */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                    <div style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <Orb hue={210} hoverIntensity={0.3} backgroundColor="#0a0a0c" />
                    </div>
                </div>

                <div className="container relative z-10 w-full" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 'var(--navbar-height)' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="section-header"
                    >
                        <span className="section-eyebrow text-secondary">Our Foundation</span>
                        <h2 className="section-title">Redefining Modular<br />Flooring Standards</h2>
                        <p className="section-desc">
                            EVERLOOP CARPET delivers internationally engineered carpet tile systems combining structural durability, acoustic performance, and timeless design for commercial environments worldwide.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px" }}
                        variants={staggerContainer}
                        className="perspective-container"
                    >
                        <div className="perspective-stack">
                            {foundationFeatures.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    className="perspective-card"
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;
                                        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                    }}
                                >
                                    <div className="card-icon-float">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Featured Collections (Temporarily Hidden) */}
            {false && (
            <section className="section collections-section vh-100-section relative overflow-hidden" style={{ padding: 0 }}>
                {/* Prism WebGL Background */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                  <Prism
                    animationType="rotate"
                    timeScale={0.5}
                    height={3.4}
                    baseWidth={5.5}
                    scale={3.5}
                    hueShift={0.16}
                    colorFrequency={1.05}
                    noise={0}
                    glow={1}
                  />
                </div>

                <div className="container relative z-10 w-full" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="section-header"
                        style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}
                    >
                        <h2 className="section-title m-0">Featured Collections</h2>
                        <Link to="/collections" className="btn btn-outline" style={{ margin: 0 }}>View All Series</Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="collections-accordion"
                    >
                        {[
                            { title: "Aria Series", img: "/collections/Aria/aria-0001-thumb.jpg", desc: "Premium Commercial Loop" },
                            { title: "Amethyst Collection", img: "/collections/Amethyst/amethyst-0001-thumb.jpg", desc: "Luxury Modular Design" },
                            { title: "Aether Series", img: "/collections/Aether/aether-0001-thumb.jpg", desc: "Designer Architectural" },
                            { title: "Bronze Series", img: "/collections/Bronze/bronze-0001-thumb.jpg", desc: "Timeless Classic Finish" },
                        ].map((col, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="accordion-item"
                            >
                                <img src={col.img} alt={col.title} className="accordion-img" />
                                <div className="accordion-overlay"></div>
                                <div className="accordion-content">
                                    <div className="accordion-text">
                                        <h3>{col.title}</h3>
                                        <p>{col.desc}</p>
                                    </div>
                                    <Link to="/collections" className="btn btn-primary accordion-btn">Explore</Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            )}


            {/* Section 4: Industries We Serve */}
            <section className="section dark-section industries-section vh-100-section relative overflow-hidden" style={{ padding: 0 }}>
                {/* Prism WebGL Background */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <Prism />
                </div>

                <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 'var(--navbar-height)', paddingBottom: '120px', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="section-header"
                        style={{ marginBottom: '60px', textAlign: 'center' }}
                    >
                        <h2 className="section-title">Industries We Serve</h2>
                        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
                            Uncompromising flooring solutions engineered specifically for the distinct operational, acoustic, and aesthetic demands of high-performance commercial environments.
                        </p>
                    </motion.div>

                    <div className="industries-carousel-wrapper" style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
                        {/* Fading Edges */}
                        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--color-bg-primary) 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }}></div>
                        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--color-bg-primary) 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }}></div>

                        <div
                            className="industries-carousel-track"
                            style={{ display: 'flex', gap: '30px', width: 'max-content', padding: '20px 0' }}
                        >
                            {/* Duplicate array for seamless infinite scroll */}
                            {[...industriesData, ...industriesData].map((industry, i) => (
                                <div
                                    key={i}
                                    className="perspective-card glass-panel"
                                    style={{ flexShrink: 0, margin: 0 }}
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;
                                        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                    }}
                                >
                                    <div className="card-icon-float">{industry.icon}</div>
                                    <h3>{industry.title}</h3>
                                    <p>{industry.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Technical Excellence */}
            <section className="section tech-section vh-100-section" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
                {/* ColorBends WebGL Background */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <ColorBends
                        colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
                        rotation={0}
                        speed={0.2}
                        scale={1}
                        frequency={1}
                        warpStrength={1}
                        mouseInfluence={1.25}
                        parallax={0.5}
                        noise={0.1}
                        transparent
                        autoRotate={0}
                    />
                </div>

                {/* Tile Animation — temporarily hidden */}
                {false && (
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        position: 'absolute',
                        right: '1%',
                        top: '15%',
                        transform: 'translateX(50%)',
                        width: '65vw',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }}
                >
                    <TilePopAnimation />
                </motion.div>
                )}

                {/* Left content — narrow column */}
                <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 'var(--navbar-height)', paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="tech-content"
                        style={{ maxWidth: '500px' }}
                    >
                        <h2 className="section-title">Technical Excellence</h2>
                        <p className="mb-40 text-secondary">Our carpet tiles are built to meet the most rigorous international standards for commercial flooring.</p>

                        <ul className="tech-list">
                            {["Class 33 Heavy Commercial Rated", "Fire Retardant Certified", "Acoustic Backing Systems", "Anti-static Technology", "Easy Modular Replacement"].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <CheckCircle size={20} className="text-primary" /> {item}
                                </motion.li>
                            ))}
                        </ul>

                        <button className="btn btn-primary mt-40">Download Full Specs</button>
                    </motion.div>
                </div>
            </section>

            {/* Section 6 & 7: Global Standards & CTA */}
            <section className="section dark-section standards-cta-section vh-100-section text-center relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* LightRays WebGL Background */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#ffffff"
                        raysSpeed={1}
                        lightSpread={0.5}
                        rayLength={3}
                        followMouse={true}
                        mouseInfluence={0.3}
                        noiseAmount={0}
                        distortion={0}
                        fadeDistance={1}
                        saturation={1}
                    />
                </div>
                
                <div className="container relative z-10" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <div className="badge mb-20">Global Standards</div>
                        <h2 className="section-title text-white">Built to International Specifications</h2>
                        <p className="max-w-600 mx-auto mb-60 text-secondary">
                            Fully compliant with ISO standards, rigorous fire safety ratings, and global sustainability certifications. Backed by our comprehensive warranty.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="cta-box glass-panel"
                    >
                        <h2>Elevate Your Flooring Standards</h2>
                        <div className="cta-actions mt-40">
                            <button className="btn btn-primary">Request Sample</button>
                            <button className="btn btn-outline">Start a Project</button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
