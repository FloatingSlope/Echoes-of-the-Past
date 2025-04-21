import React, { useState } from 'react';
import StartScreen from './StartScreen';
import StoryContainer from './StoryContainer';
import EchoJournal from './EchoJournal';
import '../styles/GameContainer.css';

const GameContainer = ({ story }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [echoJournal, setEchoJournal] = useState([]);

  const startGame = () => {
    setGameStarted(true);
  };

  const addEcho = (echoId) => {
    if (!echoJournal.includes(echoId)) {
      setEchoJournal(prev => [...prev, echoId]);
    }
  };

  return (
    <div className="game-container">
      <header className="game-header">
        <h1 className="game-title">ECHOES OF THE PAST</h1>
        <p className="game-subtitle">A journey through memory and time</p>
      </header>

      {!gameStarted ? (
        <StartScreen onStart={startGame} />
      ) : (
        <>
          <EchoJournal echoes={echoJournal} />
          <StoryContainer story={story} addEcho={addEcho} />
        </>
      )}
    </div>
  );
};

export default GameContainer; 