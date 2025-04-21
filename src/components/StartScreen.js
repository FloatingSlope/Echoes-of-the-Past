import React from 'react';
import '../styles/StartScreen.css';

const StartScreen = ({ onStart }) => {
  return (
    <div id="start-screen">
      <div className="instructions">
        <p><strong>Instructions:</strong> Click on choices to progress through the story. You can also use number keys (1-9) to select choices.</p>
        <p>Some choices may be timed, requiring you to make a quick decision. The Echo Journal in the top right tracks your discoveries.</p>
      </div>
      
      <div id="start-game">
        <button id="begin-button" className="begin-button" onClick={onStart}>
          Begin Journey
        </button>
      </div>
    </div>
  );
};

export default StartScreen; 