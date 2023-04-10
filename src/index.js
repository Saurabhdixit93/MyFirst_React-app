import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FooterOfCart from './FooterOfCart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <FooterOfCart />
  </React.StrictMode>
);


