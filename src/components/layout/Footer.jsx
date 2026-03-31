import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import logoUrl from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-cols">

                    {/* Col 1 — Brand */}
                    <div className="footer-col footer-col--brand">
                        <p className="footer-tagline">Engineered for Longevity.</p>
                        <div className="footer-socials">
                            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <Instagram size={18} />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Col 2 — Collections */}
                    <div className="footer-col">
                        <h4 className="footer-col-heading">Collections</h4>
                        <ul className="footer-links">
                            <li><Link to="/collections">Loop Series</Link></li>
                            <li><Link to="/collections">Performance Nylon</Link></li>
                            <li><Link to="/collections">Heavy Commercial</Link></li>
                            <li><Link to="/collections">Plank Collection</Link></li>
                        </ul>
                    </div>

                    {/* Col 3 — Company */}
                    <div className="footer-col">
                        <h4 className="footer-col-heading">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/technical">Technical Specs</Link></li>
                            <li><Link to="/about">Sustainability</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Col 4 — Follow */}
                    <div className="footer-col">
                        <h4 className="footer-col-heading">Follow</h4>
                        <ul className="footer-links">
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Everloop Carpet. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span>·</span>
                        <Link to="/terms">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
