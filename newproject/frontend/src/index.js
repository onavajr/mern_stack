import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PortfolioContextProvider } from './context/portfoliocontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </React.StrictMode>
);
