import { VStack } from "rsuite";
import React, { useState } from "react";
import { Nav } from "rsuite";
import Dashboard from "./Dashboard";
import Booking from "./Booking";
import Accounts from "./Accounts";
import Recharge from "./Recharge";
import Sales from "./Sales";

const SearchItineryHeader = () => {
  const tabNavOptions = [
    { key: "dashboard", title: "Dashboard", content: <Dashboard /> },
    { key: "mybookings", title: "MyBookings", content: <Booking /> },
    { key: "accounts", title: "Accounts", content: <Accounts /> },
    { key: "recharge", title: "Recharge", content: <Recharge /> },
    { key: "sales", title: "Sales", content: <Sales /> },
  ];

  // State to track the active tab, defaulting to "dashboard"
  const [activeKey, setActiveKey] = useState("dashboard");

  // Find the content for the currently selected tab
  const activeTabContent = tabNavOptions.find(
    (option) => option.key === activeKey
  )?.content;

  return (
    <VStack spacing={30}>
      {/* Centering the Tabs and setting width to 80% */}
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Nav
          appearance="subtle"
          justified
          activeKey={activeKey}
          onSelect={setActiveKey}
        >
          {tabNavOptions.map((option) => (
            <Nav.Item key={option.key} eventKey={option.key}>
              {option.title}
            </Nav.Item>
          ))}
        </Nav>
      </div>

      {/* Display the content for the active tab */}
      <div style={{ width: "80%", margin: "0 auto", marginTop: "20px" }}>
        {activeTabContent}
      </div>
    </VStack>
  );
};

export default SearchItineryHeader;
