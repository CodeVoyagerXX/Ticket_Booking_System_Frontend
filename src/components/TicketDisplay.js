import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import './TicketDisplay.css';

const TicketDisplay = ({ simulationRunning }) => {
  const [tickets, setTickets] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0);
  const [customerBoughtTickets, setCustomerBoughtTickets] = useState(0);

  useEffect(() => {
    let intervalId;

    if (simulationRunning) {
      intervalId = setInterval(() => {
        // Fetch current available tickets
        fetch("http://localhost:8080/api/tickets/count")
          .then(response => response.json())
          .then(data => setTickets(data))
          .catch(error => console.error("Error fetching ticket count:", error));

        // Fetch total tickets
        fetch("http://localhost:8080/api/tickets/total")
          .then(response => response.json())
          .then(data => setTotalTickets(data))
          .catch(error => console.error("Error fetching total ticket count:", error));

        // Fetch customer bought tickets
        fetch("http://localhost:8080/api/tickets/bought")
          .then(response => response.json())
          .then(data => setCustomerBoughtTickets(data))
          .catch(error => console.error("Error fetching customer bought ticket count:", error));
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [simulationRunning]);

  return (
    <div className="ticket-display">
        <Card>
        <CardHeader>
          <CardTitle>Total Tickets</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Badge variant="default" className="text-lg p-2">
            Total Tickets: {totalTickets}
          </Badge>
        </CardContent>
      </Card>

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

      <Card>
        <CardHeader>
          <CardTitle>Customers Bought Tickets</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Badge variant="default" className="text-lg p-2">
            Sold Tickets: {customerBoughtTickets}
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};

export default TicketDisplay;
