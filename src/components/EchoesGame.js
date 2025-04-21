import React, { useEffect, useState, useRef } from 'react';
import './EchoesGame.css';

const EchoesGame = ({ story }) => {
  const [storyContent, setStoryContent] = useState([]);
  const [choices, setChoices] = useState([]);
  const [currentTags, setCurrentTags] = useState([]);
  const [echoJournal, setEchoJournal] = useState([]);
  const [timedChoiceActive, setTimedChoiceActive] = useState(false);
  const [defaultChoiceIndex, setDefaultChoiceIndex] = useState(0);
  const [isEnding, setIsEnding] = useState(false);
  const [endingType, setEndingType] = useState('');
  
  const storyContainerRef = useRef(null);
  const choicesContainerRef = useRef(null);
  
  useEffect(() => {
    if (!story) return;
    
    // Set up global timeExpired function
    window.timeExpired = handleTimeExpired;
    
    // Start the story
    continueStory();
    
    // Cleanup
    return () => {
      window.timeExpired = null;
    };
  }, [story]);
  
  const continueStory = () => {
    if (!story) return;
    
    // Cancel any active timers
    if (window.cancelDecisionTimer) {
      window.cancelDecisionTimer();
    }
    setTimedChoiceActive(false);
    
    const newContent = [];
    
    // Keep getting content until we hit a choice or the end
    while(story.canContinue) {
      // Get the next line of story content
      const text = story.Continue();
      const tags = story.currentTags;
      setCurrentTags(tags || []);
      
      // Process empty text (sometimes used for tags only)
      if (text.trim() === '') {
        processTags(tags);
        continue;
      }
      
      // Create a paragraph of content
      newContent.push({
        text: processText(text),
        tags: tags || []
      });
      
      // Process tags
      processTags(tags);
    }
    
    // Add new content to state
    setStoryContent(prev => [...prev, ...newContent]);
    
    // Update choices
    displayChoices();
    
    // Scroll to bottom after content updates
    setTimeout(() => {
      if (storyContainerRef.current) {
        storyContainerRef.current.scrollTop = storyContainerRef.current.scrollHeight;
      }
    }, 10);
  };
  
  const displayChoices = () => {
    if (!story) return;
    
    if (story.currentChoices.length > 0) {
      setChoices(story.currentChoices);
    } else if (!story.canContinue) {
      // End of story
      setChoices([]);
    }
  };
  
  const makeChoice = (choiceIndex) => {
    if (!story) return;
    if (choiceIndex < 0 || choiceIndex >= story.currentChoices.length) return;
    
    // Add the choice text to the story content
    const choiceText = story.currentChoices[choiceIndex].text;
    setStoryContent(prev => [
      ...prev, 
      { 
        text: processText(choiceText),
        isChoice: true 
      }
    ]);
    
    // Tell the story which choice was made
    story.ChooseChoiceIndex(choiceIndex);
    
    // Cancel any active timers
    if (window.cancelDecisionTimer) {
      window.cancelDecisionTimer();
    }
    
    // Continue the story
    continueStory();
  };
  
  const processTags = (tags) => {
    if (!tags || tags.length === 0) return;
    
    // Update visuals based on tags
    if (window.updateVisualState) {
      window.updateVisualState(tags);
    }
    
    // Check for ending tag (for special ending handling)
    const endingTag = tags.find(tag => tag.startsWith('ending:'));
    if (endingTag) {
      const type = endingTag.split(':')[1].trim();
      setIsEnding(true);
      setEndingType(type);
      handleEnding(type);
    }
    
    // Check for echo-lore tags and add to journal if found
    const echoLoreTag = tags.find(tag => tag.startsWith('echo-') && tag !== 'echo-lore');
    if (tags.includes('echo-lore') && echoLoreTag) {
      const echoId = echoLoreTag.split('-')[1].trim();
      if (!isNaN(parseInt(echoId)) && !echoJournal.includes(echoId)) {
        setEchoJournal(prev => [...prev, echoId]);
        console.log(`Added echo ${echoId} to journal. Total echoes: ${echoJournal.length + 1}`);
      }
    }
    
    // Check for timer tags
    if (tags.includes('timer-standard') || 
        tags.includes('timer-urgent') || 
        tags.includes('timer-critical')) {
      
      setTimedChoiceActive(true);
      
      // Find the default choice index (format: default-choice:X)
      const defaultChoiceTag = tags.find(tag => tag.startsWith('default-choice:'));
      if (defaultChoiceTag) {
        setDefaultChoiceIndex(parseInt(defaultChoiceTag.split(':')[1].trim(), 10));
      } else {
        setDefaultChoiceIndex(0); // Default to first choice
      }
    }
  };
  
  const processText = (text) => {
    // Replace ** for bold text
    let processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Replace * for italic text
    processedText = processedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Replace newlines with <br>
    processedText = processedText.replace(/\n/g, '<br>');
    
    return processedText;
  };
  
  const handleTimeExpired = () => {
    if (!timedChoiceActive) return;
    
    console.log('Time expired, making default choice:', defaultChoiceIndex);
    
    // Make the default choice
    makeChoice(defaultChoiceIndex);
    
    // Reset timed choice state
    setTimedChoiceActive(false);
  };
  
  const handleEnding = (endingType) => {
    console.log('Reached ending:', endingType);
    
    // The ending banner will be rendered based on the isEnding and endingType state
  };
  
  const restartGame = () => {
    window.location.reload();
  };
  
  return (
    <div className="echoes-game">
      <div 
        id="story-container" 
        ref={storyContainerRef} 
        className="story-container"
      >
        {storyContent.map((content, index) => (
          <div 
            key={index} 
            className={`story-fragment ${content.isChoice ? 'player-choice' : ''}`}
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
        ))}
        
        {isEnding && (
          <div className="ending-banner">
            <h2>{getEndingTitle(endingType)}</h2>
            <p>{getEndingDescription(endingType)}</p>
            <p className="echo-count">Echoes collected: {echoJournal.length}</p>
          </div>
        )}
      </div>
      
      <div 
        id="choices-container" 
        ref={choicesContainerRef} 
        className="choices-container"
      >
        {choices.length > 0 ? (
          <ul className="choices-list">
            {choices.map((choice, index) => (
              <li 
                key={index} 
                className="choice"
                onClick={() => makeChoice(index)}
              >
                <span className="choice-number">{index + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: processText(choice.text) }} />
              </li>
            ))}
          </ul>
        ) : !story?.canContinue && (
          <>
            <p className="story-end">The End</p>
            <button 
              className="begin-button" 
              onClick={restartGame}
            >
              Start Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// Helper functions
function getEndingTitle(endingType) {
  switch(endingType) {
    case 'restoration': return 'Restoration Ending';
    case 'curator': return 'Curator Ending';
    case 'transcendence': return 'Transcendence Ending';
    case 'watcher': return 'Watcher Ending';
    case 'release': return 'Release Ending';
    case 'rebirth': return 'Rebirth Ending';
    case 'fading': return 'Fading Ending';
    case 'demo': return 'Demo Complete';
    default: return 'The End';
  }
}

function getEndingDescription(endingType) {
  switch(endingType) {
    case 'restoration': 
      return 'You chose to restore the city as it was, though the restoration remains unstable.';
    case 'curator': 
      return 'You preserved only select memories, becoming a keeper of a curated history.';
    case 'transcendence': 
      return 'You rejected restoration and moved beyond being bound by memory.';
    case 'watcher': 
      return 'You took the place of the Silent Watcher, becoming a guardian of memory.';
    case 'release': 
      return 'You freed all collected echoes, allowing them to dissipate naturally.';
    case 'rebirth': 
      return 'You transformed the echoes into something entirely new.';
    case 'fading': 
      return 'With too few echoes collected, you lost your sense of self and became just another echo.';
    case 'demo': 
      return 'You\'ve reached the end of the demo. The full game will continue the journey.';
    default: 
      return 'Your journey has concluded.';
  }
}

export default EchoesGame; 