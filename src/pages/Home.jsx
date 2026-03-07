import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, VolumeX, RefreshCcw, Leaf, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import './Home.css';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const Home = () => {
    return (
        <div className="home-page-wrapper">
            <Helmet>
                <title>EVERLOOP CARPET | Dark Premium Modular Solutions</title>
                <meta name="description" content="High-performance modular carpet tiles engineered for modern architecture, global commercial spaces, and next-generation interiors." />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url('/hero-bg.jpg')` }}>
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
                        <button className="btn btn-primary">Explore Collections</button>
                        <button className="btn btn-outline hero-btn-outline">Request Sample Kit</button>
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


            {/* Section 2: Who We Are */}
            <section className="section about-section">
                <div className="container">
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
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="features-grid"
                    >
                        {[
                            { icon: <Shield size={32} />, title: "Durability", desc: "Engineered for high-traffic commercial spaces with premium nylon." },
                            { icon: <VolumeX size={32} />, title: "Acoustic Control", desc: "Specialized backing systems to significantly reduce ambient noise." },
                            { icon: <RefreshCcw size={32} />, title: "Replacement", desc: "Modular tiles allow damaged areas to be replaced instantly." },
                            { icon: <Leaf size={32} />, title: "Sustainable", desc: "Manufactured using recycled materials and eco-friendly processes." }
                        ].map((feature, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="feature-card glass-panel">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Featured Collections */}
            <section className="section collections-section">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="section-header collections-header"
                    >
                        <div>
                            <span className="section-eyebrow text-secondary">Our Range</span>
                            <h2 className="section-title">Featured Collections</h2>
                        </div>
                        <button className="btn btn-outline">View All Series</button>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="collections-grid"
                    >
                        {[
                            { title: "Loop Series", img: "/loop-series.png", desc: "Charcoal Grey" },
                            { title: "Performance Nylon", img: "/performance-nylon.png", desc: "Champagne Bronze" },
                            { title: "Plank Collection", img: "/plank-collection.png", desc: "Charcoal Slate" },
                        ].map((col, index) => (
                            <motion.div key={index} variants={fadeInUp} className="collection-card">
                                <div className="collection-img-wrap">
                                    <img src={col.img} alt={col.title} className="collection-img" />
                                    <div className="collection-overlay">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                                <div className="collection-info">
                                    <h3>{col.title}</h3>
                                    <p>{col.desc || 'Commercial Grade'}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 4: Industries We Serve */}
            <section className="section dark-section industries-section">
                <div className="container">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="section-title text-center"
                    >
                        Industries We Serve
                    </motion.h2>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        className="industries-grid mt-60"
                    >
                        {['Corporate Offices', 'IT Parks', 'Airports', 'Hospitality', 'Educational Institutions', 'Retail & Commercial'].map((industry, i) => (
                            <motion.div key={i} variants={fadeInUp} className="industry-card">
                                <div className="industry-box glass-panel">
                                    <h3>{industry}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section 5: Technical Excellence */}
            <section className="section tech-section">
                <div className="container">
                    <div className="tech-split">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="tech-content"
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

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="tech-visual relative"
                        >
                            <div className="glow-blob-bg"></div>
                            <div className="diagram-placeholder glass-panel">
                                <div className="layer layer-1 accent-border"><span>Surface Pile (Premium Nylon)</span></div>
                                <div className="layer layer-2"><span>Primary Backing</span></div>
                                <div className="layer layer-3"><span>Fiberglass Reinforcement</span></div>
                                <div className="layer layer-4 accent-border-bottom"><span>Acoustic Base Backing</span></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 6 & 7: Global Standards & CTA */}
            <section className="section bg-alt standards-cta-section text-center relative overflow-hidden">
                <div className="glow-blob-bg-center"></div>
                <div className="container relative z-10">
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
