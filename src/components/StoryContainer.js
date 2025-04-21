import React, { useEffect, useState, useRef } from 'react';
import ChoicesList from './ChoicesList';
import VisualState from './VisualState';
import '../styles/StoryContainer.css';

const StoryContainer = ({ story, addEcho }) => {
  const [storyContent, setStoryContent] = useState([]);
  const [choices, setChoices] = useState([]);
  const [currentTags, setCurrentTags] = useState([]);
  const [visualState, setVisualState] = useState(['cover']);
  const [timedChoiceActive, setTimedChoiceActive] = useState(false);
  const [defaultChoiceIndex, setDefaultChoiceIndex] = useState(0);
  const [timerDuration, setTimerDuration] = useState(0);
  const [isEnding, setIsEnding] = useState(false);
  const [endingType, setEndingType] = useState('');
  
  const storyContainerRef = useRef(null);
  const timerRef = useRef(null);
  
  useEffect(() => {
    if (!story) return;
    
    // Start the story
    continueStory();
    
    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [story]);
  
  const continueStory = () => {
    if (!story) return;
    
    // Cancel any active timers
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    setTimedChoiceActive(false);
    
    const newContent = [];
    
    // Keep getting content until we hit a choice or the end
    while(story.canContinue) {
      // Get the next line of story content
      const text = story.Continue();
      const tags = story.currentTags || [];
      
      // Process empty text (sometimes used for tags only)
      if (text.trim() === '') {
        processTags(tags);
        continue;
      }
      
      // Create a paragraph of content
      newContent.push({
        text: text,
        tags: tags
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
        text: choiceText,
        isChoice: true 
      }
    ]);
    
    // Tell the story which choice was made
    story.ChooseChoiceIndex(choiceIndex);
    
    // Cancel any active timers
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    // Continue the story
    continueStory();
  };
  
  const handleTimeExpired = () => {
    if (!timedChoiceActive) return;
    
    // Make the default choice
    makeChoice(defaultChoiceIndex);
    
    // Reset timed choice state
    setTimedChoiceActive(false);
  };
  
  const processTags = (tags) => {
    if (!tags || tags.length === 0) return;
    
    setCurrentTags(tags);
    
    // Update visual state based on tags
    const visualTags = tags.filter(tag => 
      tag === 'cover' || 
      tag === 'city_ruins' || 
      tag === 'whisper_caverns' || 
      tag === 'ghost_garden' || 
      tag === 'memory_gate' ||
      tag === 'show_wanderer' ||
      tag === 'show_watcher'
    );
    
    if (visualTags.length > 0) {
      setVisualState(visualTags);
    }
    
    // Check for ending tag (for special ending handling)
    const endingTag = tags.find(tag => tag.startsWith('ending:'));
    if (endingTag) {
      const type = endingTag.split(':')[1].trim();
      setIsEnding(true);
      setEndingType(type);
    }
    
    // Check for echo-lore tags and add to journal if found
    const echoLoreTag = tags.find(tag => tag.startsWith('echo-') && tag !== 'echo-lore');
    if (tags.includes('echo-lore') && echoLoreTag) {
      const echoId = echoLoreTag.split('-')[1].trim();
      if (!isNaN(parseInt(echoId))) {
        addEcho(echoId);
      }
    }
    
    // Check for timer tags
    if (tags.includes('timer-standard') || 
        tags.includes('timer-urgent') || 
        tags.includes('timer-critical')) {
      
      setTimedChoiceActive(true);
      
      // Set timer duration based on urgency
      let duration = 10; // Default 10 seconds
      if (tags.includes('timer-urgent')) duration = 7;
      if (tags.includes('timer-critical')) duration = 5;
      setTimerDuration(duration);
      
      // Find the default choice index (format: default-choice:X)
      const defaultChoiceTag = tags.find(tag => tag.startsWith('default-choice:'));
      if (defaultChoiceTag) {
        setDefaultChoiceIndex(parseInt(defaultChoiceTag.split(':')[1].trim(), 10));
      } else {
        setDefaultChoiceIndex(0); // Default to first choice
      }
      
      // Start timer
      timerRef.current = setTimeout(handleTimeExpired, duration * 1000);
    }
  };
  
  const restartGame = () => {
    window.location.reload();
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
  
  return (
    <div className="story-wrapper">
      <VisualState visualState={visualState} />
      
      <div id="story-container" ref={storyContainerRef}>
        <div id="story-content">
          {storyContent.map((content, index) => (
            <div 
              key={index} 
              className={`story-fragment ${content.isChoice ? 'player-choice' : ''}`}
              dangerouslySetInnerHTML={{ __html: processText(content.text) }}
            />
          ))}
          
          {isEnding && (
            <div className="ending-banner">
              <h2>{getEndingTitle(endingType)}</h2>
              <p>{getEndingDescription(endingType)}</p>
            </div>
          )}
        </div>
        
        <div id="choices-container">
          {choices.length > 0 ? (
            <ChoicesList 
              choices={choices} 
              onChoiceSelected={makeChoice} 
              timedChoiceActive={timedChoiceActive}
              timerDuration={timerDuration}
              processText={processText}
            />
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

export default StoryContainer; 