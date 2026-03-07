import React, { useEffect, useState } from 'react';
import { X, Download, ChevronRight } from 'lucide-react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
    const [activeVariant, setActiveVariant] = useState(0);

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!product) return null;

    const variants = product.variants || [{ name: product.color, img: product.img, lifestyleImg: product.lifestyleImg }];
    const current = variants[activeVariant];

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>

                <button className="modal-close" onClick={onClose} aria-label="Close">
                    <X size={22} />
                </button>

                <div className="modal-inner">

                    {/* ─── LANDSCAPE HERO IMAGE ──────────────── */}
                    <div className="modal-image-col">
                        <div className="modal-lifestyle-wrap">
                            <img
                                key={current.lifestyleImg || current.img}
                                src={current.lifestyleImg || current.img}
                                alt={`${product.name} — ${current.name}`}
                                className="modal-lifestyle-img"
                            />
                        </div>
                    </div>

                    {/* ─── INFO ROW: left (title+specs) | right (swatches) ─── */}
                    <div className="modal-info-row">

                        {/* LEFT: name + specs + actions */}
                        <div className="modal-left-col">
                            <div className="modal-header">
                                <span className="modal-eyebrow">{product.category}</span>
                                <h2 className="modal-title">{product.name}</h2>
                                <p className="modal-meta">{current.name} · {product.backing}</p>
                            </div>

                            {product.specs && (
                                <div className="modal-specs">
                                    <h3 className="specs-heading">Specifications</h3>
                                    <div className="specs-list">
                                        {product.specs.map((spec, i) => (
                                            <div className="spec-row" key={i}>
                                                <span className="spec-key">{spec.key}</span>
                                                <span className="spec-val">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="modal-actions">
                                <button className="btn btn-primary">
                                    Request Quote <ChevronRight size={16} />
                                </button>
                                <button className="btn btn-outline">
                                    <Download size={15} /> Datasheet
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: colour varieties in the void space */}
                        {variants.length > 1 && (
                            <div className="modal-right-col">
                                <span className="variant-label">Colour Varieties</span>
                                <div className="swatch-grid">
                                    {variants.map((v, i) => (
                                        <button
                                            key={i}
                                            className={`swatch-btn ${i === activeVariant ? 'active' : ''}`}
                                            onClick={() => setActiveVariant(i)}
                                            title={v.name}
                                        >
                                            <img src={v.img} alt={v.name} className="swatch-img" />
                                            <span className="swatch-name">{v.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
