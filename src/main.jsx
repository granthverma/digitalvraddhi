import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import ChatbotWidget from './components/ChatbotWidget';
import './styles/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <ChatbotWidget /> */}
    </BrowserRouter>
  </StrictMode>
);
