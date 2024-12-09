import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import './TicketDisplay.css';

const TicketDisplay = ({ simulationRunning }) => {
  const [tickets, setTickets] = useState(0);

  useEffect(() => {
    let intervalId;
  
    if (simulationRunning) {
      intervalId = setInterval(() => {
        fetch("http://localhost:8080/api/tickets/count") // Updated to use the new endpoint
          .then(response => response.json())
          .then(data => setTickets(data)) // Directly set the count
          .catch(error => console.error("Error fetching ticket count:", error));
      }, 1000);
    }
  
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [simulationRunning]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ticket Availability</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Badge variant={tickets > 0 ? "default" : "destructive"} className="text-lg p-2">
          Available Tickets: {tickets}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default TicketDisplay;