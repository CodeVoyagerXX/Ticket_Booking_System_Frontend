import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ConfigurationForm from "./components/ConfigurationForm";
import TicketDisplay from "./components/TicketDisplay";
import "./App.css";

function App() {
  const [simulationRunning, setSimulationRunning] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Ticket Booking System</h1>
        </header>
        <Routes>
          <Route path="/" element={<ConfigurationForm setSimulationRunning={setSimulationRunning} />} />
          <Route path="/tickets" element={<TicketDisplay simulationRunning={simulationRunning} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
