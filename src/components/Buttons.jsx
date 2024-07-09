// src/components/Buttons.jsx
import React from 'react';
import './Buttons.css';

const Buttons = ({ onModelChange, onRotate, onDelete }) => {
  return (
    <div>
      <div id="buttons">
        <button className="model-button" onClick={() => onModelChange('model1')}>Model 1</button>
        <button className="model-button" onClick={() => onModelChange('model2')}>Model 2</button>
        <button className="model-button" onClick={() => onModelChange('model3')}>Model 3</button>
      </div>

      <div id="actions">
        <button className="action-button" onClick={onRotate}>Rotate</button>
        <button className="action-button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Buttons;
