import React from 'react';
import './App.css';
import Index from './pages/Index';
// import FlightResult from './pages/FlightResult'; // Corrected import name
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flight_result from './pages/Flight_result';

function App() {
  return (
    <Router>
      <div class="App">
        <Routes>
          <Route path="/" element={<Index />} /> {/* Updated route */}
          <Route path="/Flight_result" element={<Flight_result />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;