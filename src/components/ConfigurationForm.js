import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ConfigurationForm({ setSimulationRunning }) {
  const [formData, setFormData] = useState({
    totalTickets: "",
    ticketReleaseRate: "",
    customerRetrievalRate: "",
    maxTicketCapacity: "",
    numberOfVendors: "",
    numberOfCustomers: "",
    eventName: "",
    ticketPrice: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call
      const response = await axios.post("http://localhost:8080/api/configuration", formData);

      // Set simulation state and navigate
      setSimulationRunning(true);
      alert("Configuration saved successfully!");
      console.log(response.data);

      // Navigate to TicketDisplay
      navigate("/tickets");
    } catch (error) {
      console.error("Error saving configuration:", error);
      alert("Failed to save configuration.");
    }
  };

  return (
    <div className="configuration-form">
      <h2>System Configuration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="totalTickets">Total Tickets:</label>
          <input
            type="number"
            id="totalTickets"
            name="totalTickets"
            value={formData.totalTickets}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="ticketReleaseRate">Ticket Release Rate:</label>
          <input
            type="number"
            id="ticketReleaseRate"
            name="ticketReleaseRate"
            value={formData.ticketReleaseRate}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="customerRetrievalRate">Customer Retrieval Rate:</label>
          <input
            type="number"
            id="customerRetrievalRate"
            name="customerRetrievalRate"
            value={formData.customerRetrievalRate}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="maxTicketCapacity">Max Ticket Capacity:</label>
          <input
            type="number"
            id="maxTicketCapacity"
            name="maxTicketCapacity"
            value={formData.maxTicketCapacity}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="numberOfVendors">Number Of Vendors:</label>
          <input
            type="number"
            id="numberOfVendors"
            name="numberOfVendors"
            value={formData.numberOfVendors}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="numberOfCustomers">Number Of Customers:</label>
          <input
            type="number"
            id="numberOfCustomers"
            name="numberOfCustomers"
            value={formData.numberOfCustomers}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ticketPrice">Ticket Price:</label>
          <input
            type="number"
            id="ticketPrice"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <button type="submit">Save Configuration</button>
      </form>
    </div>
  );
}

export default ConfigurationForm;