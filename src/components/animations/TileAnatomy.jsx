import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TileAnatomy = () => {
    const [hoveredLayer, setHoveredLayer] = useState(null);

    const layers = [
        {
            id: 1,
            name: "Wear Layer",
            desc: "High-performance Nylon 6,6 with advanced soil resistance.",
            color: "rgba(255, 255, 255, 0.5)",
            thickness: 8,
            offset: 0
        },
        {
            id: 2,
            name: "Primary Backing",
            desc: "Dimensionally stable woven polyester for structural integrity.",
            color: "rgba(255, 255, 255, 0.3)",
            thickness: 6,
            offset: -10
        },
        {
            id: 3,
            name: "Pre-coat Layer",
            desc: "Yarn-locking polymer system for superior tuft bind.",
            color: "rgba(255, 255, 255, 0.2)",
            thickness: 4,
            offset: -18
        },
        {
            id: 4,
            name: "Reinforcement",
            desc: "Non-woven fiberglass mesh for absolute stability.",
            color: "rgba(255, 255, 255, 0.15)",
            thickness: 4,
            offset: -24
        },
        {
            id: 5,
            name: "Acoustic Base",
            desc: "High-density recycled foam for 30dB+ impact sound reduction.",
            color: "rgba(255, 255, 255, 0.1)",
            thickness: 15,
            offset: -35
        }
    ];

    const containerVariants = {
        initial: { rotateX: 60, rotateZ: -45, scale: 0.8 },
        animate: { rotateX: 60, rotateZ: -45, scale: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <div className="tile-anatomy-scene relative h-[600px] w-full flex items-center justify-center overflow-visible">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%) blur-3xl pointer-events-none"></div>

            <motion.div
                className="isometric-stack relative transform-gpu"
                variants={containerVariants}
                initial="initial"
                animate="animate"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {layers.map((layer, index) => {
                    const isHovered = hoveredLayer === layer.id;
                    const flyOffset = isHovered ? -120 : (hoveredLayer && hoveredLayer < layer.id ? 20 : 0);

                    return (
                        <motion.div
                            key={layer.id}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            style={{
                                width: '300px',
                                height: '300px',
                                transformStyle: 'preserve-3d',
                                zIndex: layers.length - index
                            }}
                            animate={{
                                z: index * -25 + flyOffset,
                                opacity: hoveredLayer && !isHovered ? 0.4 : 1,
                                scale: isHovered ? 1.05 : 1
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            onHoverStart={() => setHoveredLayer(layer.id)}
                            onHoverEnd={() => setHoveredLayer(null)}
                        >
                            {/* Layer Surface */}
                            <div
                                className="absolute inset-0 shadow-2xl"
                                style={{
                                    background: layer.color,
                                    backdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    transform: `translateZ(${layer.thickness}px)`,
                                    boxShadow: '0 0 40px rgba(0,0,0,0.5)'
                                }}
                            >
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                                        style={{ transform: 'rotateZ(45deg) rotateX(-60deg) scale(0.8)' }}
                                    >
                                        <h4 className="text-white text-xl font-bold mb-2 tracking-tighter uppercase whitespace-nowrap">{layer.name}</h4>
                                    </motion.div>
                                )}
                            </div>

                            {/* Layer Sides (3D Thickness) */}
                            {/* Right Side */}
                            <div
                                className="absolute top-0 right-0 h-full origin-right"
                                style={{
                                    width: `${layer.thickness}px`,
                                    background: 'rgba(255,255,255,0.1)',
                                    transform: 'rotateY(90deg)',
                                    borderLeft: '1px solid rgba(255,255,255,0.1)'
                                }}
                            ></div>
                            {/* Bottom Side */}
                            <div
                                className="absolute bottom-0 left-0 w-full origin-bottom"
                                style={{
                                    height: `${layer.thickness}px`,
                                    background: 'rgba(255,255,255,0.05)',
                                    transform: 'rotateX(-90deg)',
                                    borderTop: '1px solid rgba(255,255,255,0.1)'
                                }}
                            ></div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Floating Information Panel */}
            <AnimatePresence>
                {hoveredLayer && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute right-10 top-1/2 -translate-y-1/2 w-80 p-8 glass-panel border-white/20 z-50"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-3xl font-black text-white/10">{hoveredLayer}</span>
                            <div className="h-px flex-1 bg-white/20"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                            {layers.find(l => l.id === hoveredLayer).name}
                        </h3>
                        <p className="text-[#86868b] leading-relaxed text-sm">
                            {layers.find(l => l.id === hoveredLayer).desc}
                        </p>
                        <div className="mt-6 flex gap-2">
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/50 uppercase tracking-widest">Premium Grade</span>
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/50 uppercase tracking-widest">ISO Certified</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Instruction Callout */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-[#86868b] animate-pulse">
                Hover layers to explore technical depth
            </div>
        </div>
    );
};

export default TileAnatomy;
