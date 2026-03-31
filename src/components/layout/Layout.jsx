import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <main className="main-content">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    key={window.location.pathname} // Simple key for page-level transitions
                >
                    <Outlet />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
