import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { ContextProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* We wrap App in context provider so we can use context in App */}
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

