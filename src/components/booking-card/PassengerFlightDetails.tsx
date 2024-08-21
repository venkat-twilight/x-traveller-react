import React from "react";
import { FlightInfo } from "../Flight-listing-card/FlightListBanner/FlightDetailsPopup";
import FareDetails from "./FareDetails";
import { Accordion, Panel, InputGroup, Input } from "rsuite";
import Image from "next/image";
import InfoIcon from "../../assets/icons/InfoIcon.svg";
import PassengerDetailsAccordion from "./PassengerAccordion";

const PassengerFlightDetails: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid lightgrey",
        padding: "20px",
        position: "relative",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "14px",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "#222222",
          }}
        >
          Depart 14th July 2024
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Bangalore(BLE) → New Delhi(DEL)
        </div>
        <div style={{ color: "#9E9E9E", padding: "0px 0px 10px" }}>
          Non Stop | 02 hrs 50 min
        </div>
      </div>
      <div
        style={{
          border: "1px solid lightgrey",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "50px", // Adjust margin based on the height of the top text
        }}
      >
        <FlightInfo />
      </div>
     
     <PassengerDetailsAccordion/>
    
    </div>
  );
};



export default PassengerFlightDetails;
