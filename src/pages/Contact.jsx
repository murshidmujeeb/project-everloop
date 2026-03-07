import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import './Contact.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending protocol...');
        setTimeout(() => {
            setStatus('Inquiry received. We will be in touch shortly.');
        }, 1500);
    };

    return (
        <div className="contact-page-wrapper">
            <Helmet>
                <title>Contact Us | EVERLOOP CARPET</title>
                <meta name="description" content="Get in touch with Everloop Carpet to start your commercial flooring project or request samples." />
            </Helmet>

            {/* Subtle background blob */}
            <div className="contact-bg-blob"></div>

            <section className="page-header contact-header relative z-10">
                <div className="container text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="page-title text-white mb-20"
                    >
                        Contact & Support
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="page-subtitle text-secondary"
                    >
                        Connect with our global architecture flooring experts.
                    </motion.p>
                </div>
            </section>

            <section className="section contact-section relative z-10">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Info */}
                        <motion.div
                            initial="hidden" animate="visible" variants={staggerContainer}
                            className="contact-info-panel"
                        >
                            <motion.h2 variants={fadeUp} className="section-title mb-40 text-white">Direct Channels</motion.h2>

                            <div className="info-blocks">
                                {[
                                    { icon: <MapPin size={24} />, title: "Global Headquarters", desc: "One World Trade Center, Suite 8500\nNew York, NY 10007, USA" },
                                    { icon: <Phone size={24} />, title: "Direct Line", desc: "+1 (212) 555-0198\nMon-Fri, 9am - 6pm EST" },
                                    { icon: <Mail size={24} />, title: "Email Comm", desc: "inquiries@everloopcarpet.com\nsamples@everloopcarpet.com" }
                                ].map((info, idx) => (
                                    <motion.div key={idx} variants={fadeUp} className="info-block glass-panel">
                                        <div className="info-icon">{info.icon}</div>
                                        <div>
                                            <h3>{info.title}</h3>
                                            <p style={{ whiteSpace: 'pre-line' }}>{info.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div variants={fadeUp} className="whatsapp-box glass-panel mt-40 text-center relative overflow-hidden">
                                <div className="whatsapp-glow"></div>
                                <MessageSquare size={32} className="mb-16 mx-auto text-primary" style={{ display: 'block', marginBottom: '16px' }} />
                                <h3 className="text-white mb-8">Priority Connect</h3>
                                <p className="mb-24 text-secondary">Establish an instant secure chat link.</p>
                                <button className="btn btn-outline whatsapp-btn w-full">
                                    Initiate WhatsApp
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="contact-form-panel glass-panel"
                        >
                            <form onSubmit={handleSubmit} className="premium-form">
                                <h3 className="form-title text-white mb-32">Send Inquiry</h3>

                                <div className="form-group-row">
                                    <div className="form-group">
                                        <label>Given Name</label>
                                        <input type="text" required placeholder="Enter first name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Surname</label>
                                        <input type="text" required placeholder="Enter last name" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Organization</label>
                                    <input type="text" required placeholder="Company or Firm" />
                                </div>

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" required placeholder="address@domain.com" />
                                </div>

                                <div className="form-group">
                                    <label>Inquiry Type</label>
                                    <select required>
                                        <option value="">Select subject line</option>
                                        <option value="quote">Project Quote Request</option>
                                        <option value="sample">Material Samples</option>
                                        <option value="tech">Technical Specifications</option>
                                        <option value="other">General Inquiry</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows="5" required placeholder="Detail your project requirements..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn w-full mt-24">
                                    <Send size={18} style={{ marginRight: '8px' }} /> Submit Request
                                </button>

                                {status && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                        className="form-status mt-20 text-center text-secondary text-sm"
                                    >
                                        {status}
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
