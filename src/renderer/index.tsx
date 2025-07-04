import React from 'react';
import ReactDOM from 'react-dom/client';  // 确保使用 'react-dom/client'
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);  // 使用 createRoot
    root.render(<App />);
}