import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import './ControlPanel.css';

const ControlPanel = ({ 
  onStart, 
  onStop, 
  simulationRunning 
}) => {
  const handleStart = () => {
    onStart();
  };

  const handleStop = () => {
    onStop();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Simulation Control</CardTitle>
      </CardHeader>
      <CardContent className="flex space-x-4">
        <Button 
          onClick={handleStart} 
          variant="default" 
          className="flex-1"
          disabled={simulationRunning}
        >
          Start Simulation
        </Button>
        <Button 
          onClick={handleStop} 
          variant="destructive" 
          className="flex-1"
          disabled={!simulationRunning}
        >
          Stop Simulation
        </Button>
      </CardContent>
    </Card>
  );
};

export default ControlPanel;
