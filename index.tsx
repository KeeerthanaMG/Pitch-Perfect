import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background: #0f172a; color: white; font-family: sans-serif;">
      <div style="text-align: center;">
        <h1 style="color: #ef4444; font-size: 2rem; margin-bottom: 1rem;">Failed to Load App</h1>
        <p style="color: #cbd5e1;">${error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    </div>
  `;
}