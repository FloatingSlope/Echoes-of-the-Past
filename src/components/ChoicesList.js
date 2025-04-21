import React, { useEffect } from 'react';
import TimerBar from './TimerBar';
import '../styles/ChoicesList.css';

const ChoicesList = ({ choices, onChoiceSelected, timedChoiceActive, timerDuration, processText }) => {
  
  useEffect(() => {
    // Add keyboard handlers
    const handleKeyPress = (e) => {
      const key = e.key;
      // Number keys 1-9
      if (/^[1-9]$/.test(key)) {
        const choiceIndex = parseInt(key) - 1;
        if (choiceIndex >= 0 && choiceIndex < choices.length) {
          onChoiceSelected(choiceIndex);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [choices, onChoiceSelected]);
  
  return (
    <div className="choices-container">
      {timedChoiceActive && (
        <TimerBar duration={timerDuration} />
      )}
      
      <ul className="choices-list">
        {choices.map((choice, index) => (
          <li 
            key={index} 
            className="choice"
            onClick={() => onChoiceSelected(index)}
          >
            <span className="choice-number">{index + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: processText(choice.text) }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChoicesList; 