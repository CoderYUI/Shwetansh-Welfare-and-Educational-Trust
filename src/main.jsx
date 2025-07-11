// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import TermsConditions from './components/TermsConditions';
import Seminars from './components/Seminars'; // ✅ Import Seminars component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/seminars" element={<Seminars />} /> {/* ✅ Added Seminars route */}
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/refund_policy" element={<RefundPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

