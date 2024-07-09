// src/hooks/useModel.js
import { useState } from 'react';

const useModel = () => {
  const [selectedModel, setSelectedModel] = useState('');

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  const handleRotate = () => {
    const model = document.querySelector('#model');
    if (model) {
      const rotation = model.getAttribute('rotation');
      model.setAttribute('rotation', `${rotation.x} ${rotation.y + 15} ${rotation.z}`);
    }
  };

  const handleDelete = () => {
    const model = document.querySelector('#model');
    if (model) {
      model.parentNode.removeChild(model);
    }
  };

  return {
    selectedModel,
    handleModelChange,
    handleRotate,
    handleDelete,
  };
};

export default useModel;
