import React, { useState } from "react";
import TicketDisplay from "./TicketDisplay";
import ControlPanel from "./ControlPanel";
import LogDisplay from "./LogDisplay";
import "./TicketDisplayPage.css";

const TicketDisplayPage = ({ config }) => {
  const [simulationRunning, setSimulationRunning] = useState(false);

  return (
    <div className="ticket-display-page">
      <div className="ticket-display-section">
        <TicketDisplay simulationRunning={simulationRunning} />
      </div>

      <div className="control-panel-section">
        <ControlPanel
          simulationRunning={simulationRunning}
          setSimulationRunning={setSimulationRunning}
          config={config}
        />
      </div>

      <div className="log-display-section">
        <LogDisplay simulationRunning={simulationRunning} />
      </div>
    </div>
  );
};

export default TicketDisplayPage;
