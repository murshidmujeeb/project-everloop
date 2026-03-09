import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
const FPS = 30;

const TilePopAnimation = () => {
    const [currentFrame, setCurrentFrame] = useState(1);
    const rafRef = useRef(null);
    const lastTimeRef = useRef(null);
    const frameRef = useRef(1);

    const getFrameSrc = (frame) => {
        const padded = String(frame).padStart(3, '0');
        return `/tile-animation-png/ezgif-frame-${padded}.png`;
    };

    useEffect(() => {
        const INTERVAL = 1000 / FPS;

        const tick = (timestamp) => {
            if (!lastTimeRef.current) lastTimeRef.current = timestamp;
            const elapsed = timestamp - lastTimeRef.current;

            if (elapsed >= INTERVAL) {
                frameRef.current = frameRef.current >= TOTAL_FRAMES ? 1 : frameRef.current + 1;
                setCurrentFrame(frameRef.current);
                lastTimeRef.current = timestamp - (elapsed % INTERVAL);
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div className="tile-pop-wrapper">
            <img
                src={getFrameSrc(currentFrame)}
                alt="Tile pop animation"
                className="tile-pop-frame"
            />
        </div>
    );
};

export default TilePopAnimation;
