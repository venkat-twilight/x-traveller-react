import React from "react";
import SideNav from "./SideNav";
import FlightContent from "./FlightContent";

// interface HotelCardProps {
//   backdrop: string;
// }

const FlightBannerCard: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          padding: "40px 0px",
          display: "flex",
          width: "70%",
          margin: "auto",
        }}
      >
        <SideNav />
        <FlightContent />
      </div>
    </div>
  );
};

export default FlightBannerCard;
