import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, Search, X } from 'lucide-react';
import ProductModal from '../components/ProductModal';
import { PRODUCTS } from '../data/collectionsData';
import './Collections.css';

const Collections = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    // Currently all products are in 'Designer Collection'. 
    // We could filter by Name/Alphabet instead if desired. Let's just create some dummy categories or use A-Z.
    const filters = ['All', 'A-E', 'F-J', 'K-O', 'P-T', 'U-Z'];

    const getAlphabetGroup = (name) => {
        const firstLetter = name.charAt(0).toUpperCase();
        if (firstLetter >= 'A' && firstLetter <= 'E') return 'A-E';
        if (firstLetter >= 'F' && firstLetter <= 'J') return 'F-J';
        if (firstLetter >= 'K' && firstLetter <= 'O') return 'K-O';
        if (firstLetter >= 'P' && firstLetter <= 'T') return 'P-T';
        return 'U-Z';
    };

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = activeFilter === 'All' || getAlphabetGroup(product.name) === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, [searchQuery, activeFilter]);

    const handleClearFilters = () => {
        setSearchQuery('');
        setActiveFilter('All');
    };

    return (
        <>
            <Helmet>
                <title>Collections | EVERLOOP CARPET</title>
                <meta name="description" content="Explore our premium range of commercial carpet tiles." />
            </Helmet>

            {/* ─── PAGE HEADER ─────────────────────────────── */}
            <section className="collections-header">
                <div className="container">
                    <span className="page-eyebrow">Our Range</span>
                    <h1 className="page-title fade-in">Collections</h1>
                    <p className="page-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
                        Architecturally inspired modular flooring systems for world-class commercial spaces.
                    </p>
                </div>
            </section>

            {/* ─── FILTER WIDGET ─────────────────────────────── */}
            <section className="collections-filters">
                <div className="container">
                    <div className="filter-bar fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="search-box">
                            <Search className="search-icon" size={18} />
                            <input
                                type="text"
                                placeholder="Search collections..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                        <div className="category-filters">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <button className="clear-all-btn" onClick={handleClearFilters}>
                            Clear All
                        </button>
                    </div>
                </div>
            </section>

            {/* ─── PRODUCT GRID ─────────────────────────────── */}
            <section className="section collections-catalog">
                <div className="container">
                    {filteredProducts.length === 0 ? (
                        <div className="no-results">
                            <h3>No collections found.</h3>
                            <button className="btn btn-outline" onClick={handleClearFilters}>Reset Filters</button>
                        </div>
                    ) : (
                        <div className="product-grid">
                            {filteredProducts.map((product, i) => (
                                <div
                                    key={product.id}
                                    className="product-card fade-in"
                                    style={{ animationDelay: `${(i % 10) * 0.05}s` }}
                                    onClick={() => setSelectedProduct(product)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && setSelectedProduct(product)}
                                >
                                    <div className="product-image">
                                        {/* Primary Image (e.g. thumb) */}
                                        <img className="img-primary" src={product.img} alt={product.name} loading="lazy" />

                                        {/* Secondary Image for Hover (e.g. lifestyle/zoom) */}
                                        {product.lifestyleImg && product.lifestyleImg !== product.img && (
                                            <img className="img-secondary" src={product.lifestyleImg} alt={`${product.name} Lifestyle`} loading="lazy" />
                                        )}

                                        <div className="product-hover-actions">
                                            <button className="btn btn-primary btn-sm">Explore Gallery</button>
                                        </div>
                                    </div>
                                    <div className="product-details glass-panel">
                                        <div className="details-header">
                                            <span className="product-cat">{product.variants.length} Variants</span>
                                            <button className="download-btn" onClick={(e) => e.stopPropagation()} aria-label="Download Specs">
                                                <Download size={18} />
                                            </button>
                                        </div>
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className="product-spec">{product.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ─── PRODUCT MODAL ─────────────────────────────── */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
};

export default Collections;
