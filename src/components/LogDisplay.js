import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import './LogDisplay.css';

const LogDisplay = ({ simulationRunning }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let intervalId;
    
    if (simulationRunning) {
      intervalId = setInterval(() => {
        // Simulated log fetch - replace with actual API call
        fetch("http://localhost:8080/api/logs")
          .then(response => response.json())
          .then(data => {
            setLogs(prevLogs => {
              // Limit log history to last 100 entries
              const updatedLogs = [...prevLogs, ...data.logs].slice(-100);
              return updatedLogs;
            });
          })
          .catch(error => console.error("Error fetching logs:", error));
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [simulationRunning]);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Simulation Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          {logs.map((log, index) => (
            <div key={index} className="text-sm py-1 border-b last:border-b-0">
              {log}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default LogDisplay;
