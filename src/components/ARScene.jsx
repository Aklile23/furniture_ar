// src/components/ARScene.jsx
import React, { useEffect } from 'react';

const ARScene = ({ selectedModel }) => {
  useEffect(() => {
    if (selectedModel) {
      const scene = document.querySelector('a-scene');
      const existingModel = scene.querySelector('#model');
      if (existingModel) {
        scene.removeChild(existingModel);
      }

      const newModel = document.createElement('a-entity');
      newModel.setAttribute('id', 'model');
      newModel.setAttribute('gltf-model', `url(/models/${selectedModel}.glb)`);
      newModel.setAttribute('position', '0 0 0');
      newModel.setAttribute('scale', '0.5 0.5 0.5');
      scene.appendChild(newModel);
    }
  }, [selectedModel]);

  return (
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-entity id="model"></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARScene;
