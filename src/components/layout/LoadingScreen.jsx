import React from 'react';
import { motion } from 'motion/react';
import logoUrl from '../../assets/logo.png';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.src = logoUrl;
    img.onload = () => setIsImageLoaded(true);

    // Attempt to play sound effect on mount
    const audio = new Audio('/startup.mp3');
    audio.volume = 0.5; // Adjust volume as needed
    audio.play().catch(error => {
      console.warn("Autoplay prevented by browser policy:", error);
    });
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Blurred Hero Background */}
      <div className="loading-bg-image" style={{ backgroundImage: `url('/bg-image.jpg')` }} />
      <div className="loading-bg-overlay" />
      
      <div className="loading-content">
        <motion.div
          className="loading-logo-container"
          style={{
            WebkitMaskImage: `url(${logoUrl})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskImage: `url(${logoUrl})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: isImageLoaded ? 1 : 0.9,
            opacity: isImageLoaded ? 1 : 0 
          }}
          exit={{ 
            scale: 1.15, 
            opacity: 0,
            filter: "blur(4px)"
          }}
          transition={{ 
            scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            exit: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          <img src={logoUrl} alt="Everloop Logo" className="loading-logo" />
          {/* Shimmer / Shine Layer */}
          <motion.div 
            className="logo-shimmer"
            initial={{ x: '-150%' }}
            animate={{ x: '150%' }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "linear",
              delay: 0.5 
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
