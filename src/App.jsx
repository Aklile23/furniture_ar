// src/App.jsx
import React from 'react';
import ARScene from './components/ARScene';
import Buttons from './components/Buttons';
import useModel from './hooks/useModel';
import './App.css';

const App = () => {
  const { selectedModel, handleModelChange, handleRotate, handleDelete } = useModel();

  return (
    <div>
      <ARScene selectedModel={selectedModel} />
      <Buttons
        onModelChange={handleModelChange}
        onRotate={handleRotate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
