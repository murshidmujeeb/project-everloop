import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Projects.css';

const PROJECTS = [
    { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", name: "Global Tech Hub", loc: "Silicon Valley, CA", area: "125,000 Sq.m", cat: "Corporate IT" },
    { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", name: "Apex Financial Group", loc: "London, UK", area: "85,000 Sq.m", cat: "Finance" },
    { img: "https://images.unsplash.com/photo-1497215848143-bc015aa0cdbc?q=80&w=2070&auto=format&fit=crop", name: "Creative Campus", loc: "Berlin, DE", area: "45,000 Sq.m", cat: "Media & Arts" },
    { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop", name: "International Arrivals Terminal 3", loc: "Dubai, UAE", area: "210,000 Sq.m", cat: "Aviation/Airport" },
    { img: "https://images.unsplash.com/photo-1574681534005-cb6249ed27f6?q=80&w=2070&auto=format&fit=crop", name: "Grand Hyatt Conferencing", loc: "Singapore", area: "32,000 Sq.m", cat: "Hospitality" },
    { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", name: "National Bank HQ", loc: "Toronto, CA", area: "95,000 Sq.m", cat: "Corporate Finance" },
];

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Global Projects | EVERLOOP CARPET</title>
                <meta name="description" content="View our portfolio of modular carpet tile installations across global corporate offices, airports, and luxury hotels." />
            </Helmet>

            <section className="page-header projects-header">
                <div className="container text-center">
                    <h1 className="page-title fade-in">GLOBAL PROJECTS</h1>
                    <p className="page-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
                        Architectural-grade installations across the world.
                    </p>
                </div>
            </section>

            <section className="section bg-alt">
                <div className="container">

                    <div className="portfolio-filter text-center fade-in" style={{ animationDelay: '0.3s' }}>
                        <button className="btn btn-outline active-filter">All Sectors</button>
                        <button className="btn btn-outline">Corporate</button>
                        <button className="btn btn-outline">Airports</button>
                        <button className="btn btn-outline">Hospitality</button>
                        <button className="btn btn-outline">Education</button>
                    </div>

                    <div className="masonry-grid mt-60">
                        {PROJECTS.map((proj, i) => (
                            <div key={i} className={`masonry-item fade-in`} style={{ animationDelay: `${0.1 * i}s` }}>
                                <div className="project-card">
                                    <div className="proj-img-wrap">
                                        <img src={proj.img} alt={proj.name} />
                                        <div className="proj-overlay">
                                            <div className="proj-meta">
                                                <span className="proj-cat">{proj.cat}</span>
                                                <h3>{proj.name}</h3>
                                                <p>{proj.loc} · {proj.area}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Projects;
