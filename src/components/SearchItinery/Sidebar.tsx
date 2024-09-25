// Sidebar.tsx
import { SidebarProps } from "@/src/models/sidebar.model";
import React from "react";
import { Nav } from "rsuite";

const Sidebar: React.FC<SidebarProps> = ({ activeKey, onSelect }) => {
  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <Nav
        appearance="subtle"
        vertical
        activeKey={activeKey}
        onSelect={onSelect}
      >
        <Nav.Item eventKey="itinerary">Itinerary</Nav.Item>
        <Nav.Item eventKey="returnitinerary">Return Ticket Itinerary</Nav.Item>
        <Nav.Item eventKey="viewcancellation">View Cancellations</Nav.Item>
        <Nav.Item eventKey="travelcalendar">Travel Calendar</Nav.Item>
        <Nav.Item eventKey="reissue">Re-Issue Itinerary</Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
