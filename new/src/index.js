import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from 'react-redux';
import store from './store';

// Wrap your entire app inside <BrowserRouter> so routing works
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
  
 
);
