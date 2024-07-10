// src/components/ARScene.jsx
import React, { useEffect } from 'react';
import 'aframe';
import 'webxr-polyfill';

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
      newModel.setAttribute('position', '0 0 -1'); // Position the model 1 meter in front of the camera
      newModel.setAttribute('scale', '0.5 0.5 0.5');
      scene.appendChild(newModel);
    }
  }, [selectedModel]);

  return (
    <a-scene
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
      xrweb="mode: 'ar';"
      embedded
    >
      <a-camera position="0 0 0">
        <a-cursor></a-cursor>
      </a-camera>
      <a-light type="ambient" color="#445"></a-light>
      <a-light type="directional" color="#fff" position="1 1 1"></a-light>
    </a-scene>
  );
};

export default ARScene;
