import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfigurationForm from "./components/ConfigurationForm";
import TicketDisplayPage from "./components/TicketDisplayPage"; // Updated import for combined page
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
          <Route
            path="/"
            element={<ConfigurationForm setSimulationRunning={setSimulationRunning} />}
          />
          <Route
            path="/tickets"
            element={
              <TicketDisplayPage
                simulationRunning={simulationRunning}
                setSimulationRunning={setSimulationRunning}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
