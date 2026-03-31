import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import logoUrl from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        const next = !mobileMenuOpen;
        setMobileMenuOpen(next);
        document.body.style.overflow = next ? 'hidden' : '';
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHome && !isScrolled ? 'transparent' : ''}`}>
            <div className="nav-inner">
                {/* Logo - Hidden on Home Page */}
                {!isHome && (
                    <Link to="/" className="nav-logo" onClick={closeMenu}>
                        <img src={logoUrl} alt="Everloop Carpet" className="nav-logo-img" />
                    </Link>
                )}

                {/* Desktop Links */}
                <nav className="nav-links-desktop">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/collections">Collections</Link>
                    <Link className="nav-link" to="/technical">Technical</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </nav>

                {/* Desktop CTA */}
                <div className="nav-cta-wrap">
                    <Link to="/contact" className="nav-cta-btn">Get a Quote</Link>
                </div>

                {/* Hamburger */}
                <button className="nav-hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`ham-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`ham-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`ham-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mobile-overlay"
                    >
                        <motion.nav
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="mobile-nav-links"
                        >
                            <Link to="/" onClick={closeMenu}>Home</Link>
                            <Link to="/collections" onClick={closeMenu}>Collections</Link>
                            <Link to="/technical" onClick={closeMenu}>Technical</Link>
                            <Link to="/about" onClick={closeMenu}>About</Link>
                            <Link to="/contact" className="mobile-cta" onClick={closeMenu}>Get a Quote</Link>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
