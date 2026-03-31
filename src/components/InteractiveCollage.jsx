import React, { useState } from 'react';
import './InteractiveCollage.css';

import img1 from '../assets/grid images/grid-01.png';
import img2 from '../assets/grid images/grid-02.png';
import img3 from '../assets/grid images/grid-03.png';
import img4 from '../assets/grid images/grid-04.png';
import img5 from '../assets/grid images/grid-05.png';
import img6 from '../assets/grid images/grid-06.png';
import img7 from '../assets/grid images/grid-07.png';
import img8 from '../assets/grid images/grid-08.png';
import img9 from '../assets/grid images/grid-09.png';
import img10 from '../assets/grid images/grid-10.png';
import img11 from '../assets/grid images/grid-11.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

// Array dictating the masonry-like span of the grid
const tileClasses = [
    'span-large', 'span-normal', 'span-tall', 'span-wide',
    'span-normal', 'span-large', 'span-normal', 'span-tall',
    'span-wide', 'span-normal', 'span-normal', 'span-wide',
    'span-tall', 'span-large', 'span-normal', 'span-normal'
];

const getRandomImage = (imgList, exclude = null) => {
    let available = imgList;
    if (exclude) available = imgList.filter(img => img !== exclude);
    // fallback just in case
    if (available.length === 0) available = imgList;
    return available[Math.floor(Math.random() * available.length)];
};

export const InteractiveTile = ({ className }) => {
    const [frontImg, setFrontImg] = useState(() => getRandomImage(images));
    const [backImg, setBackImg] = useState(() => getRandomImage(images, frontImg));
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => setIsFlipped(true);
    const handleMouseLeave = () => setIsFlipped(false);

    const handleTransitionEnd = () => {
        if (isFlipped) {
            setFrontImg(getRandomImage(images, backImg));
        } else {
            setBackImg(getRandomImage(images, frontImg));
        }
    };

    return (
        <div 
            className={`collage-tile ${className}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className={`collage-tile-inner ${isFlipped ? 'flipping' : ''}`}
                onTransitionEnd={handleTransitionEnd}
            >
                <div 
                    className="collage-tile-front" 
                    style={{ backgroundImage: `url(${frontImg})` }} 
                />
                <div 
                    className="collage-tile-back" 
                    style={{ backgroundImage: `url(${backImg})` }} 
                />
            </div>
        </div>
    );
};

export const InteractiveCollage = () => {
    return (
        <div className="collage-container">
            {tileClasses.map((cls, idx) => (
                <InteractiveTile key={idx} className={cls} />
            ))}
        </div>
    );
};
