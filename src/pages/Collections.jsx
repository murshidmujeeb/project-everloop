import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { PRODUCTS } from '../data/collectionsData';
import './Collections.css';

const Collections = () => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'exhibition'
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeVariantIndex, setActiveVariantIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const dockRef = useRef(null);

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery]);

    const activeProduct = filteredProducts[activeIndex] || filteredProducts[0] || PRODUCTS[0];

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
        setActiveVariantIndex(null);
    }, [filteredProducts.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? filteredProducts.length - 1 : prev - 1));
        setActiveVariantIndex(null);
    }, [filteredProducts.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (viewMode !== 'exhibition') return;
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') setViewMode('grid');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, viewMode]);

    // Derived background image
    let bgImage;
    if (activeVariantIndex !== null && activeProduct.variants && activeProduct.variants[activeVariantIndex]) {
        const v = activeProduct.variants[activeVariantIndex];
        bgImage = v.lifestyleImg || v.img;
    } else {
        bgImage = activeProduct?.lifestyleImg || activeProduct?.img;
    }

    const handleCollectionClick = (index) => {
        setActiveIndex(index);
        setActiveVariantIndex(null);
        setViewMode('exhibition');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollDock = (direction) => {
        if (dockRef.current) {
            const scrollAmount = 300;
            dockRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="collections-page">
            <Helmet>
                <title>Collections | EVERLOOP CARPET</title>
                <meta name="description" content="Explore our complete line of premium commercial carpet tiles." />
            </Helmet>

            {viewMode === 'grid' && (
                <div className="collections-index fade-in">
                    <header className="index-header">
                        <div className="container">
                            <span className="page-eyebrow">The Complete Catalog</span>
                            <h1 className="page-title fade-in">All Collections</h1>
                            <p className="page-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
                                A curated selection of high-performance, design-forward modular flooring.
                            </p>
                            
                            {/* Minimal Search */}
                            <div className="minimal-search-wrapper fade-in" style={{ animationDelay: '0.3s' }}>
                                <div className="minimal-search">
                                    <Search size={16} className="search-icon" />
                                    <input 
                                        type="text" 
                                        placeholder="Search collections..." 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    {searchQuery && (
                                        <button className="clear-btn" onClick={() => setSearchQuery('')}>
                                            <X size={14} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="index-gallery">
                        <div className="container-fluid">
                            {filteredProducts.length === 0 ? (
                                <div className="no-results fade-in">
                                    <p>No collections found for "{searchQuery}".</p>
                                    <button className="btn outline-glow" onClick={() => setSearchQuery('')} style={{ marginTop: '20px' }}>Clear Search</button>
                                </div>
                            ) : (
                                <div className="lookbook-grid">
                                    {filteredProducts.map((product, index) => (
                                    <div 
                                        key={product.id} 
                                        className="lookbook-item fade-in"
                                        style={{ animationDelay: `${(index % 15) * 0.03}s` }}
                                        onClick={() => handleCollectionClick(index)}
                                    >
                                        <div className="lookbook-image-wrap">
                                            <img 
                                                src={product.img} 
                                                alt={product.name} 
                                                loading="lazy" 
                                                className="primary-img"
                                            />
                                            {product.lifestyleImg && product.lifestyleImg !== product.img && (
                                                <img 
                                                    src={product.lifestyleImg} 
                                                    alt={`${product.name} Lifestyle`} 
                                                    loading="lazy" 
                                                    className="hover-img"
                                                />
                                            )}
                                        </div>
                                        <div className="lookbook-meta">
                                            <h3 className="lookbook-title">{product.name}</h3>
                                            <span className="lookbook-count">{product.variants?.length || 0} Patterns</span>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            )}

            {viewMode === 'exhibition' && (
                <div className="collections-exhibition-wrapper fade-in-fast">
                    {/* Top Bar Navigation */}
                    <button className="minimal-back-btn fade-in" onClick={() => setViewMode('grid')} aria-label="Back to Grid">
                        <ChevronLeft size={24} />
                    </button>

                    {/* Background Blur / Atmosphere */}
                    <div className="carousel-ambient-bg">
                        <img key={`bg-${activeIndex}`} src={bgImage} alt="" className="ambient-img fade-in-fast" />
                        <div className="ambient-overlay"></div>
                    </div>

                    {/* Main Stage */}
                    <main className="carousel-stage">
                        <div className="carousel-content">
                            {/* Visual Stage */}
                            <div className="visual-stage fade-in-slide" key={`visual-${activeIndex}`}>
                                <img 
                                    key={`hero-${activeIndex}-${activeVariantIndex}`} 
                                    src={bgImage} 
                                    alt={activeProduct.name} 
                                    className="hero-product-img entering" 
                                    loading="eager" 
                                />
                            </div>

                            {/* Information Typography Layer */}
                            <div className="info-stage fade-in-up" key={`info-${activeIndex}`}>
                                <div className="info-top">
                                    <span className="collection-counter">
                                        {(activeIndex + 1).toString().padStart(3, '0')} 
                                        <span className="dim">/ {PRODUCTS.length.toString().padStart(3, '0')}</span>
                                    </span>
                                    <span className="collection-category">{activeProduct.category || "Designer Collection"}</span>
                                </div>
                                <div className="title-nav-wrapper">
                                    <button className="sleek-nav-btn prev" onClick={prevSlide} aria-label="Previous">
                                        <ChevronLeft strokeWidth={1} size={32} />
                                    </button>
                                    <div className="title-group">
                                        <h1 className="collection-title">{activeProduct.name}</h1>
                                        <span className="product-code">
                                            {activeVariantIndex !== null && activeProduct.variants && activeProduct.variants[activeVariantIndex] 
                                                ? activeProduct.variants[activeVariantIndex].name 
                                                : (activeProduct.variants?.[0]?.name || activeProduct.name)}
                                        </span>
                                    </div>
                                    <button className="sleek-nav-btn next" onClick={nextSlide} aria-label="Next">
                                        <ChevronRight strokeWidth={1} size={32} />
                                    </button>
                                </div>
                                
                                <div className="collection-specs inline-specs">
                                    {activeProduct.specs?.map(spec => (
                                        <div className="spec-row" key={spec.key}>
                                            <span className="spec-key">{spec.key}</span>
                                            <span className="spec-value">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Variants preview (mini map) */}
                        <div className="variants-preview-dock fade-in" key={`variants-${activeIndex}`}>
                            <small className="dock-label">Available Patterns ({activeProduct.variants?.length || 0})</small>
                            <div className="dock-wrapper">
                                <div className="dock-scroll" ref={dockRef}>
                                    {activeProduct.variants?.map((v, i) => (
                                        <div 
                                            key={v.id || i} 
                                            className={`dock-thumb ${activeVariantIndex === i ? 'active' : ''}`} 
                                            title={v.name}
                                            onClick={() => setActiveVariantIndex(i)}
                                        >
                                            <img src={v.img} alt={v.name} loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                                {activeProduct.variants?.length > 8 && (
                                    <button 
                                        className="dock-reveal-arrow" 
                                        onClick={() => scrollDock('right')}
                                        aria-label="Scroll patterns"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </main>

                    {/* Progress Bar */}
                    <div className="carousel-progress-bar">
                        <div className="progress-fill" style={{ width: `${((activeIndex + 1) / PRODUCTS.length) * 100}%` }}></div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Collections;
