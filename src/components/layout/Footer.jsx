import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import logoUrl from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand">
                        <div className="footer-logo-wrap">
                            <div
                                className="brand-logo-container silver-logo"
                                style={{
                                    WebkitMaskImage: `url(${logoUrl})`,
                                    maskImage: `url(${logoUrl})`,
                                    background: "linear-gradient(135deg, #ffffff 0%, #8a8a93 100%)",
                                    width: '180px',
                                    height: '45px',
                                    display: 'block'
                                }}
                            >
                                <img src={logoUrl} alt="Everloop Carpet Logo" className="brand-logo-spacer" style={{ opacity: 0, width: '100%', height: '100%' }} />
                            </div>
                        </div>
                        <p className="footer-desc">
                            High-performance modular carpet tiles engineered for modern architecture, global commercial spaces, and next-generation interiors.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Collections</h4>
                        <ul>
                            <li><Link to="/collections">Loop Series</Link></li>
                            <li><Link to="/collections">Performance Nylon</Link></li>
                            <li><Link to="/collections">Heavy Commercial</Link></li>
                            <li><Link to="/collections">Plank Collection</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/projects">Global Projects</Link></li>
                            <li><Link to="/technical">Technical Specs</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Global Office</h4>
                        <ul className="contact-info">
                            <li>
                                <MapPin size={18} className="mono-icon" />
                                <span>One World Trade Center, Suite 8500<br />New York, NY 10007</span>
                            </li>
                            <li>
                                <Phone size={18} className="mono-icon" />
                                <span>+1 (212) 555-0198</span>
                            </li>
                            <li>
                                <Mail size={18} className="mono-icon" />
                                <span>inquiries@everloopcarpet.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Everloop Carpet. All rights reserved.</p>
                    <div className="legal-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
