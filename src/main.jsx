import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { Amplify } from 'aws-amplify';
import { apiRest } from '@aws-amplify/api/rest'; // <-- Import the REST API plugin
import awsExports from './aws-exports.js'; 

// Configure Amplify with the REST API plugin
Amplify.configure(awsExports);
Amplify.addPlugin(apiRest);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);