import React, { useState, useEffect } from 'react';
import '../styles/TimerBar.css';

const TimerBar = ({ duration }) => {
  const [timeRemaining, setTimeRemaining] = useState(100);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) return 0;
        return prev - (100 / (duration * 10));  // Smooth animation (10 updates per second)
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [duration]);
  
  // Determine color based on remaining time
  const getTimerColor = () => {
    if (timeRemaining > 60) return '#4caf50';  // Green
    if (timeRemaining > 30) return '#ff9800';  // Orange
    return '#f44336';  // Red
  };
  
  return (
    <div className="timer-container">
      <div 
        className="timer-bar" 
        style={{ 
          width: `${timeRemaining}%`,
          backgroundColor: getTimerColor()
        }}
      ></div>
      <div className="timer-label">Time Remaining</div>
    </div>
  );
};

export default TimerBar; 