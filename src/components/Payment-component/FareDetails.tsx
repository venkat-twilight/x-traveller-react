"use client";

import Image from "next/image";
import React from "react";
import IconsPlus from "../../assets/icons/IconsPlus.svg";
import { Panel } from "rsuite";

const FareDetails: React.FC = () => {
  return (
    <Panel shaded>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#F2F4F5",
          padding: "10px",
          borderBottom: "1px solid lightgrey",
          margin: "-10px -10px 0 -10px", // Ensure the title covers full width
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>Fare Details</span>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        <div
          style={{
            marginTop: "10px",
            borderBottom: "1px solid lightgrey",
            paddingLeft: "10px",
            paddingBottom: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#5B5B5B",
              marginBottom: "10px",
            }}
          >
            <span>
              <Image src={IconsPlus} alt="Brand Logo" />
              <span>User Dev. Fee</span>
            </span>
            <strong>₹9,999</strong>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#5B5B5B",
              marginBottom: "10px",
            }}
          >
            <span>
              <Image src={IconsPlus} alt="Brand Logo" />
              K3 Tax
            </span>
            <strong>₹9,999</strong>{" "}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#5B5B5B",
              marginBottom: "10px",
            }}
          >
            <span>
              <Image src={IconsPlus} alt="Brand Logo" />
              Airline Misc
            </span>
            <strong>₹9,999</strong>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "10px",
          }}
        >
          <strong>Total Amount</strong>
          <strong
            style={{
              color: "#0770E3",
            }}
          >
            ₹9,999
          </strong>
        </div>
      </div>
    </Panel>
  );
};

export default FareDetails;
