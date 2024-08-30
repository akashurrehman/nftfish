import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import './sass/index.scss';
import { MoonPayProvider } from '@moonpay/moonpay-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MoonPayProvider 
      apiKey="pk_test_123" 
    >
      <App />
    </MoonPayProvider>
    </BrowserRouter>
  </React.StrictMode>
);
