import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Banner.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RentList from './compoments/RentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>
);

reportWebVitals();
