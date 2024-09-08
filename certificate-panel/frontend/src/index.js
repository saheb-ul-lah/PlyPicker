import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app
root.render(
  <Router>
    <App />
  </Router>
);
