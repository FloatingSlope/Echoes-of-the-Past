import React, { useEffect, useState } from 'react';
import '../styles/VisualState.css';

const VisualState = ({ visualState }) => {
  const [backgroundClass, setBackgroundClass] = useState('cover-bg');
  const [characterClass, setCharacterClass] = useState('');
  const [effectClass, setEffectClass] = useState('');
  
  useEffect(() => {
    if (!visualState || visualState.length === 0) return;
    
    // Handle location backgrounds
    if (visualState.includes('cover')) {
      setBackgroundClass('cover-bg');
    } else if (visualState.includes('city_ruins')) {
      setBackgroundClass('city-ruins-bg');
    } else if (visualState.includes('whisper_caverns')) {
      setBackgroundClass('whisper-caverns-bg');
    } else if (visualState.includes('ghost_garden')) {
      setBackgroundClass('ghost-garden-bg');
    } else if (visualState.includes('memory_gate')) {
      setBackgroundClass('memory-gate-bg');
    }
    
    // Handle character silhouettes
    if (visualState.includes('show_wanderer')) {
      setCharacterClass('wanderer-silhouette');
    } else if (visualState.includes('show_watcher')) {
      setCharacterClass('watcher-silhouette');
    } else {
      setCharacterClass('');
    }
    
    // Handle effects (would be expanded in a full implementation)
    if (visualState.some(tag => tag.includes('effect-echo_pulse'))) {
      setEffectClass('echo-pulse-effect');
      
      // Clear effect after animation completes
      const timer = setTimeout(() => {
        setEffectClass('');
      }, 2000); // 2 seconds
      
      return () => clearTimeout(timer);
    }
  }, [visualState]);
  
  return (
    <div className={`visual-container ${backgroundClass}`}>
      {characterClass && (
        <div className={`character ${characterClass}`}></div>
      )}
      
      {effectClass && (
        <div className={`effect ${effectClass}`}></div>
      )}
    </div>
  );
};

export default VisualState; 