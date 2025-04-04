import React from "react";
import axios from "axios";
import "./ControlPanel.css";

const ControlPanel = ({ simulationRunning, setSimulationRunning, config }) => {
  const handleStart = async () => {
    try {
      // Send the start simulation request to the backend with the config
      await axios.post("http://localhost:8080/api/start-simulation", config);
      setSimulationRunning(true);
      alert("Simulation started successfully!");
    } catch (error) {
      console.error("Error starting simulation:", error);
      alert("Failed to start the simulation.");
    }
  };

  const handleStop = async () => {
    try {
      // Send the stop simulation request to the backend
      await axios.post("http://localhost:8080/api/stop-simulation");
      setSimulationRunning(false);
      alert("Simulation stopped successfully!");
    } catch (error) {
      console.error("Error stopping simulation:", error);
      alert("Failed to stop the simulation.");
    }
  };

  return (
    <div className="control-panel">
      <button
        onClick={handleStart}
        disabled={simulationRunning}
        className="start-button"
      >
        Start Simulation
      </button>
      <button
        onClick={handleStop}
        disabled={!simulationRunning}
        className="stop-button"
      >
        Stop Simulation
      </button>
    </div>
  );
};

export default ControlPanel;
