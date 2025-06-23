import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeForm from './components/HomeForm';
import QRResult from './components/QRResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeForm />} />
        <Route path="/result" element={<QRResult />} />
      </Routes>
    </Router>
  );
}

export default App;
