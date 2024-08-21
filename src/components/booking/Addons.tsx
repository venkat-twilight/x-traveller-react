import React, { useState } from "react";
import {
  Accordion,
  Panel,
  InputGroup,
  Input,
  Radio,
  Tag,
  RadioGroup,
} from "rsuite";
import Image from "next/image";
import Burger from "../../assets/images/Burger.svg";
import TFrom from "../Common/TFrom";

// Define the AddonsAccordion component
const Addons: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState<string>("Meals");
  const [mealOption, setMealOption] = useState<string>("Veg");

  const handleChange = (
    value: any,
    event: React.SyntheticEvent<Element, Event>
  ) => {
    setMealOption(value as string);
  };

  const field = [
    {
      title: "Meal Preference",
      type: "radio",
      name: "mealPreference",
      options: [
        { label: "Veg", value: "veg" },
        { label: "Non-Veg", value: "non-veg" },
      ],
    },
  ];

  const TabNav = ["Meals", "Baggage", "Seat"];

  return (
    <>
      <nav
        style={{ marginBottom: "20px", borderBottom: "1px solid lightgrey" }}
      >
        {TabNav.map((item) => (
          <div
            style={navItemStyle(selectedNav === item)}
            onClick={() => setSelectedNav(item)}
          >
            {item}
          </div>
        ))}
      </nav>

      {selectedNav === "Meals" && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div>
              Bangalore <span>&rarr;</span> Delhi
            </div>
            <div>Price: ₹350</div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            {field.map((field, idx) => (
              <TFrom
                key={idx}
                title={field.title}
                name={field.name}
                type={field.type as "input" | "select" | "checkbox"}
                options={field.options}
              />
            ))}
          </div>
          {mealOption === "Veg" && (
            <div style={cardContainerStyle}>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} style={cardStyle}>
                  <Image
                    src={Burger}
                    alt="Example Image"
                    style={{ borderRadius: "8px" }}
                  />
                  <div style={{ padding: "10px", textAlign: "center" }}>
                    <div>Name of Dish</div>
                    <div>₹Price</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {selectedNav === "Baggage" && (
        <div style={{ padding: "20px" }}>
          <h3>Upcoming Baggage</h3>
          <p>Details about upcoming baggage will be displayed here.</p>
        </div>
      )}

      {selectedNav === "Seat" && (
        <div style={{ padding: "20px" }}>
          <h3>Upcoming Seats</h3>
          <p>Details about upcoming seats will be displayed here.</p>
        </div>
      )}
    </>
  );
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
};

const infoBoxStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginTop: "15px",
  padding: "10px",
  borderRadius: "52px",
  backgroundColor: "#f7f7f7",
  border: "1px solid lightgrey",
  gap: "10px",
};

const navItemStyle = (isSelected: boolean): React.CSSProperties => ({
  display: "inline-block",
  padding: "10px 20px",
  cursor: "pointer",
  fontWeight: isSelected ? "bold" : "normal",
  borderBottom: isSelected ? "2px solid #007bff" : "none",
});

const cardContainerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
};

const cardStyle: React.CSSProperties = {
  flex: "1 1 200px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  textAlign: "center",
  backgroundColor: "#fff",
};

export default Addons;
