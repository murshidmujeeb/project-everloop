import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoUrl from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const location = useLocation();
    const isHome = location.pathname === '/';
    const isHeroVisible = isHome && !isScrolled;

    // Dynamic logo gradient: Premium Deep Blue if at top of Home, Silver otherwise
    const logoGradient = isHeroVisible
        ? "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
        : "linear-gradient(135deg, #ffffff 0%, #8a8a93 100%)";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        // Prevent scrolling when mobile menu is open
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHome ? 'is-home' : ''}`}
        >
            <div className="nav-container">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="logo"
                >
                    <Link
                        to="/"
                        onClick={() => mobileMenuOpen && toggleMenu()}
                        className="brand-logo-container"
                        style={{
                            WebkitMaskImage: `url(${logoUrl})`,
                            maskImage: `url(${logoUrl})`,
                            background: logoGradient
                        }}
                    >
                        <img src={logoUrl} alt="Everloop Carpet Logo" className={`brand-logo-spacer ${isHeroVisible ? 'home-logo' : ''}`} />
                    </Link>
                </motion.div>

                {/* Desktop Nav Right Section */}
                <div className="nav-right hidden-mobile">
                    <nav className="nav-links">
                        <Link className="nav-item" to="/">Home</Link>
                        <Link className="nav-item" to="/collections">Collections</Link>
                        <Link className="nav-item" to="/technical">Technical</Link>
                        <Link className="nav-item" to="/about">About Us</Link>
                        <Link className="nav-item" to="/projects">Projects</Link>
                    </nav>

                    <div className="nav-actions">
                        <div className="lang-selector">
                            <Globe size={16} />
                            <span>EN</span>
                        </div>
                        <Link to="/contact" className="nav-contact-btn">Contact</Link>
                    </div>
                </div>

                {/* Mobile Toggle Button */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="mobile-nav-overlay"
                        >
                            <div className="mobile-nav-container">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="mobile-nav-links"
                                >
                                    <Link to="/" onClick={toggleMenu}>Home</Link>
                                    <Link to="/collections" onClick={toggleMenu}>Collections</Link>
                                    <Link to="/technical" onClick={toggleMenu}>Technical</Link>
                                    <Link to="/about" onClick={toggleMenu}>About Us</Link>
                                    <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                                    <Link to="/contact" className="mobile-contact-btn" onClick={toggleMenu}>Contact</Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
