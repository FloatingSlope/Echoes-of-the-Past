import React from 'react';
import '../styles/EchoJournal.css';

const EchoJournal = ({ echoes }) => {
  return (
    <div id="echo-journal">
      <h3>Echo Journal</h3>
      <p className="echo-count">Echoes: {echoes.length}</p>
      
      {echoes.length > 0 && (
        <div className="echo-list">
          {echoes.map((echoId) => (
            <div key={echoId} className="echo-item">
              Echo #{echoId}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EchoJournal; 