import React, { useState, useEffect } from 'react';
import { Story } from 'inkjs';
import GameContainer from './components/GameContainer';
import storyContent from './scripts/story_content';
import './App.css';

function App() {
  const [story, setStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Initialize the Ink story
    try {
      const inkStory = new Story(storyContent);
      setStory(inkStory);
      setIsLoading(false);
    } catch (err) {
      console.error('Error initializing story:', err);
      setError('Failed to load story. Please refresh the page.');
      setIsLoading(false);
    }
  }, []);
  
  // Loading state
  if (isLoading) {
    return (
      <div className="loading-screen">
        <h2>Loading Echoes of the Past...</h2>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className="error-screen">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }
  
  return (
    <div className="App">
      <GameContainer story={story} />
    </div>
  );
}

export default App;
