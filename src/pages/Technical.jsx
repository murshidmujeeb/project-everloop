import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, CheckCircle, FileText, Layers, Zap, Shield, Leaf } from 'lucide-react';
import './Technical.css';

const specs = [
    { property: 'Construction', value: 'Multi-Level Loop Pile' },
    { property: 'Yarn System', value: '100% Solution Dyed Premium Nylon 6' },
    { property: 'Pile Weight', value: '650 g/m² ± 5%' },
    { property: 'Total Thickness', value: '6.5 mm ± 0.5 mm' },
    { property: 'Tile Size', value: '50 cm × 50 cm (19.7″ × 19.7″)' },
    { property: 'Primary Backing', value: 'Non-woven spunbonded polyester' },
    { property: 'Secondary Backing', value: 'Eco-Acoustic Base (Recycled materials)' },
    { property: 'Wear Classification', value: 'Heavy Commercial — Class 33 / EN 1307' },
    { property: 'Flammability', value: 'Bfl-s1 (EN 13501-1)' },
    { property: 'Anti-Static', value: '≤ 2.0 kV (ISO 6356)' },
    { property: 'Acoustic Insulation', value: 'ΔLw = 26 dB (ISO 10140)' },
    { property: 'Light Fastness', value: 'Grade ≥ 6 (ISO 105-B02)' },
];

const performanceMetrics = [
    { value: '650', unit: 'g/m²', label: 'Pile Weight', icon: <Layers size={22} /> },
    { value: '26', unit: 'dB', label: 'Sound Reduction', icon: <Zap size={22} /> },
    { value: '≤2.0', unit: 'kV', label: 'Anti-Static', icon: <Shield size={22} /> },
    { value: '60', unit: '%+', label: 'Recycled Content', icon: <Leaf size={22} /> },
];

const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management System — audited & certified annually' },
    { name: 'ISO 14001:2015', desc: 'Environmental Management System — verified third-party' },
    { name: 'CE Marking', desc: 'European Conformity — meets EU construction product standards' },
    { name: 'Eco Label Plus', desc: 'Low VOC emission — certified for indoor air quality' },
    { name: 'EN 1307 Class 33', desc: 'Heavy Commercial classification — international standard' },
    { name: 'EN 13501-1 Bfl-s1', desc: 'Fire performance rating for flooring materials' },
];

const layers = [
    { index: '01', name: 'Surface Pile', detail: '100% Solution Dyed Nylon 6' },
    { index: '02', name: 'Primary Backing', detail: 'Spunbonded Polyester' },
    { index: '03', name: 'Pre-Coat Adhesive', detail: 'High-bond stabilisation layer' },
    { index: '04', name: 'Fiberglass Grid', detail: 'Dimensional stability reinforcement' },
    { index: '05', name: 'Acoustic Base Backing', detail: 'Recycled eco-composite' },
];

const documents = [
    { name: 'Technical Datasheet', sub: 'Full construction & performance data', size: '1.2 MB' },
    { name: 'Installation Manual', sub: 'Step-by-step installation guide', size: '0.8 MB' },
    { name: 'Maintenance Guide', sub: 'Warranty care & upkeep procedures', size: '0.6 MB' },
    { name: 'SDS Safety Sheet', sub: 'Material safety data sheet', size: '0.4 MB' },
    { name: 'Environmental Report', sub: 'Eco-profile & sustainability data', size: '1.0 MB' },
];

const Technical = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.08 }
        );
        document.querySelectorAll('.animate-on-scroll').forEach(el => observerRef.current.observe(el));
        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <>
            <Helmet>
                <title>Technical Specifications | EVERLOOP CARPET</title>
                <meta name="description" content="Detailed technical specifications, construction layers, acoustic performance data, and global certifications for Everloop modular carpet tiles." />
            </Helmet>

            {/* ─── PAGE HEADER ─────────────────────────────── */}
            <section className="tech-page-header">
                <div className="container">
                    <span className="page-eyebrow">Engineering Data</span>
                    <h1 className="page-title">Technical<br />Specifications</h1>
                    <p className="page-subtitle">
                        Precision-engineered carpet tile systems built to meet the most rigorous international performance standards.
                    </p>
                </div>
            </section>

            {/* ─── SECTION 1: PERFORMANCE METRICS ─────────── */}
            <section className="tech-metrics-section">
                <div className="container">
                    <div className="metrics-grid animate-on-scroll">
                        {performanceMetrics.map((m, i) => (
                            <div className="metric-block" key={i}>
                                <div className="metric-icon">{m.icon}</div>
                                <div className="metric-value">
                                    {m.value}<span className="metric-unit">{m.unit}</span>
                                </div>
                                <div className="metric-label">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2: FULL SPECS TABLE ─────────────── */}
            <section className="section tech-specs-section">
                <div className="container">
                    <div className="tech-section-header animate-on-scroll">
                        <div>
                            <span className="section-label">Construction Data</span>
                            <h2 className="section-heading">Heavy Commercial Series — Class 33</h2>
                        </div>
                        <button className="btn btn-outline btn-sm">
                            <Download size={14} /> Download PDF
                        </button>
                    </div>

                    <div className="specs-table-wrap animate-on-scroll">
                        <table className="specs-table">
                            <thead>
                                <tr>
                                    <th>Parameter</th>
                                    <th>Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {specs.map((row, i) => (
                                    <tr key={i}>
                                        <td className="spec-property">{row.property}</td>
                                        <td className="spec-value">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3: CONSTRUCTION LAYERS ─────────── */}
            <section className="section tech-layers-section">
                <div className="container">
                    <div className="tech-layers-split">
                        <div className="layers-content animate-on-scroll">
                            <span className="section-label">Product Architecture</span>
                            <h2 className="section-heading">5-Layer Construction</h2>
                            <p className="layers-desc">
                                Every Everloop tile is engineered as a system — each of five precision layers contributes a distinct performance function, creating total synergy between durability, comfort, and acoustic control.
                            </p>
                            <div className="layer-stack">
                                {layers.map((l, i) => (
                                    <div className="layer-row" key={i}>
                                        <span className="layer-idx">{l.index}</span>
                                        <div className="layer-bar" style={{ opacity: 1 - i * 0.15 }} />
                                        <div className="layer-info">
                                            <span className="layer-name">{l.name}</span>
                                            <span className="layer-detail">{l.detail}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="layers-visual animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
                            <div className="layer-diagram-3d">
                                {layers.map((l, i) => (
                                    <div className="diagram-slab" key={i} style={{ '--slab-index': i }}>
                                        <span>{l.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 4: CERTIFICATIONS ───────────────── */}
            <section className="section tech-certs-section">
                <div className="container">
                    <div className="animate-on-scroll">
                        <span className="section-label">Compliance & Standards</span>
                        <h2 className="section-heading">Global Certifications</h2>
                    </div>
                    <div className="certs-grid">
                        {certifications.map((c, i) => (
                            <div className="cert-card animate-on-scroll" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                                <div className="cert-check">
                                    <CheckCircle size={18} />
                                </div>
                                <div className="cert-body">
                                    <h4 className="cert-name">{c.name}</h4>
                                    <p className="cert-desc">{c.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SECTION 5: RESOURCE DOWNLOADS ───────────── */}
            <section className="section tech-downloads-section">
                <div className="container">
                    <div className="animate-on-scroll">
                        <span className="section-label">Resource Center</span>
                        <h2 className="section-heading">Technical Documents</h2>
                    </div>
                    <div className="downloads-list">
                        {documents.map((d, i) => (
                            <a href="#" className="download-row animate-on-scroll" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
                                <div className="download-icon">
                                    <FileText size={20} />
                                </div>
                                <div className="download-info">
                                    <span className="download-name">{d.name}</span>
                                    <span className="download-sub">{d.sub}</span>
                                </div>
                                <div className="download-meta">
                                    <span className="download-size">PDF — {d.size}</span>
                                    <Download size={16} className="download-arrow" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SECTION 6: CTA ──────────────────────────── */}
            <section className="section tech-cta-section">
                <div className="container animate-on-scroll">
                    <div className="tech-cta-box">
                        <div className="tech-cta-content">
                            <span className="section-label">Expert Consultation</span>
                            <h2 className="tech-cta-title">Need Custom Specifications?</h2>
                            <p>Our technical team can provide custom engineering data, LEED documentation, and project-specific specifications on request.</p>
                        </div>
                        <div className="tech-cta-actions">
                            <button className="btn btn-primary">Request Consultation</button>
                            <button className="btn btn-outline">Send Technical Query</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Technical;
