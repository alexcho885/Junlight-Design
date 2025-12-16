// This file is the legacy entry point for Vite/CRA.
// Since the app has been migrated to Next.js (App Router), this file should no longer be the active entry.
// We replace it with a placeholder to prevent runtime errors if the environment tries to load it.

import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <div style={{ 
      fontFamily: 'system-ui, sans-serif', 
      padding: '2rem', 
      textAlign: 'center', 
      lineHeight: '1.5' 
    }}>
      <h1 style={{ color: '#2E5C6E' }}>Migration in Progress</h1>
      <p>This application has been migrated to <strong>Next.js</strong>.</p>
      <p>Please ensures you are viewing the app via the Next.js server.</p>
    </div>
  );
}