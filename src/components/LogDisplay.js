import React, { useState, useEffect } from "react";
import './LogDisplay.css';

const LogDisplay = ({ simulationRunning }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let ws;
    if (simulationRunning) {
      ws = new WebSocket("ws://localhost:8080/ws/tickets");

      ws.onopen = () => console.log("WebSocket connected");
      ws.onclose = () => console.log("WebSocket disconnected");
      ws.onerror = (error) => console.error("WebSocket error:", error);

      ws.onmessage = (event) => {
        console.log("Received log:", event.data); // Print log in console
        setLogs((prevLogs) => [...prevLogs, event.data].slice(-10));
      };
    }

    return () => {
      if (ws) {
        ws.close();
        console.log("WebSocket closed");
      }
    };
  }, [simulationRunning]);

  return (
    <div className="log-display-container">
      <h2 className="log-header">Real-Time Ticketing Logs</h2>
      <div className="log-content">
        <ul className="log-list">
          {logs.map((log, index) => (
            <li key={index} className="log-item">{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogDisplay;