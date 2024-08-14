import React, { useState } from "react";
import { Panel, Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Image from "next/image";
import ListBanner from "../../../assets/images/ListBanner.svg";

import Indigo from "../../../assets/images/Indigo.svg";
import Vistara from "../../../assets/images/Vistara.svg";
import AirIndia from "../../../assets/images/AirIndia.svg";
import ArrowDownLineIcon from "@rsuite/icons/ArrowDownLine";
import Seats from "../../../assets/images/Seat.svg";

interface PricingOption {
  fare: string;
  code: string;
  seats: number;
  price: string;
}

interface Flight {
  icon: any;
  airline: string;
  departure: string;
  departureLocation: string;
  duration: string;
  durationDetails: string;
  arrival: string;
  arrivalLocation: string;
  pricingOptions: PricingOption[];
}

const flights: Flight[] = [
  {
    icon: Indigo,
    airline: "IndiGo",
    departure: "BLR 19:15",
    departureLocation: "Bengaluru International Airport, India",
    duration: "2hrs 50min",
    durationDetails: "Non Stop",
    arrival: "DEL 22:05",
    arrivalLocation: "Indira Gandhi International Airport, India",
    pricingOptions: [
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
    ],
  },
  {
    icon: Vistara,
    airline: "Vistara",
    departure: "BLR 19:15",
    departureLocation: "Bengaluru International Airport, India",
    duration: "2hrs 50min",
    durationDetails: "Non Stop",
    arrival: "DEL 22:05",
    arrivalLocation: "Indira Gandhi International Airport, India",
    pricingOptions: [
      { fare: "SAVER", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
    ],
  },
  {
    icon: AirIndia,
    airline: "Air India",
    departure: "BLR 19:15",
    departureLocation: "Bengaluru International Airport, India",
    duration: "2hrs 50min",
    durationDetails: "Non Stop",
    arrival: "DEL 22:05",
    arrivalLocation: "Indira Gandhi International Airport, India",
    pricingOptions: [
      { fare: "PUBLISHED", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SPECIAL", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
      { fare: "SME FARE", code: "(PUIP)", seats: 2, price: "₹8,688" },
    ],
  },
  // Add more flight objects here
];

const FlightContent: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <span>Sort By</span>
        <span>Showing {flights.length} Flights</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <div style={{ flex: 1,  textAlign:"center" }}>Airlines</div>
        <div style={{ flex: 1,  textAlign:"center"}}>Departure</div>
        <div style={{ flex: 1,  textAlign:"center" }}>Duration</div>
        <div style={{ flex: 1,  textAlign:"center"}}>Arrival</div>
        <div style={{ flex: 1, textAlign:"center" }}>Price</div>
      </div>

      {flights.map((flight, index) => (
        <div key={index}>
          <Panel bordered style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  flex: 1,
                   padding: "10px",
                  //   display: "flex",
                  //   flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <h5>
                  {" "}
                  <span style={{ flex: "0 0 auto", marginRight: "10px" }}>
                    <Image
                      src={flight.icon} // Use flight.icon here
                      alt="Airline Icon"
                      width={28.65}
                      height={28.65}
                      style={{ borderRadius: "4px", marginRight: "5px" }} // Optional: square shape
                    />
                    {flight.airline}
                  </span>
                </h5>
              </div>
              <div
                style={{
                flex: 1,
                   padding: "10px",
                  //   display: "flex",
                  //   flexDirection: "column",
                  textAlign:"center",
                }}
              >
                <p>{flight.departure}</p>
                <p style={{color:"#9E9E9E",textAlign:"center"}}>{flight.departureLocation}</p>
              </div>
              <div
                style={{
                flex: 1,
                 padding: "10px",
                  //   display: "flex",
                  //   flexDirection: "column",
                  textAlign:"center",
                }}
              >
                <p>{flight.duration}</p>
                <p style={{color:"#9E9E9E",textAlign:"center"}}>{flight.durationDetails}</p>
              </div>
              <div
                style={{
                   flex: 1,
                  padding: "10px",
                  //   display: "flex",
                  //   flexDirection: "column",
                  textAlign:"center",
                }}
              >
                <p>{flight.arrival}</p>
                <p style={{color:"#9E9E9E",textAlign:"center"}}>{flight.arrivalLocation}</p>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "10px",
                  //   display: "flex",
                  //   flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <Button
                  appearance="primary"
                  style={{
                    background:
                      "linear-gradient(to right, #0087E1 0%, #174495 100%)",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>

            <Panel bordered style={{ marginTop: "10px" }}>
              {flight.pricingOptions.length > 3 ? (
                <PricingOptionsPanel options={flight.pricingOptions} />
              ) : (
                flight.pricingOptions.map((option, optionIndex) => (
                  <PricingOptionRow key={optionIndex} option={option} />
                ))
              )}
            </Panel>
          </Panel>

          {/* Insert image after every 2nd flight card */}
          {index % 2 === 1 && (
            <div style={{ textAlign: "center", margin: "20px 0" }}>
              <Image
                src={ListBanner} // Replace with your image URL
                alt="Promotional Banner"
                width="955"
                height="160"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const PricingOptionsPanel: React.FC<{ options: PricingOption[] }> = ({
  options,
}) => {
  const [showMore, setShowMore] = useState(false);
  const visibleOptions = showMore ? options : options.slice(0, 3);

  return (
    <div>
      {visibleOptions.map((option, index) => (
        <PricingOptionRow key={index} option={option} />
      ))}

      {options.length > 3 && (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Button
            appearance="link"
            onClick={() => setShowMore(!showMore)}
            style={{ textDecoration: "none" }}
          >
            {showMore ? (
              <>
                Show {options.length - 3} Less{" "}
                <ArrowDownLineIcon style={{ marginLeft: "8px" }} />
              </>
            ) : (
              <>
                Show {options.length - 3} More Fares{" "}
                <ArrowDownLineIcon style={{ marginLeft: "8px" }} />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

const PricingOptionRow: React.FC<{ option: PricingOption }> = ({ option }) => {
  return (
    <div style={{ padding: "10px", borderBottom: "1px solid grey" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, textAlign: "left" }}>
          <p>{option.fare}</p>
          <p>{option.code}</p>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <p>
            {" "}
            <span style={{ flex: "0 0 auto", marginRight: "10px" }}>
              <Image
                src={Seats} // Use flight.icon here
                alt="Airline Icon"
                width={20}
                height={20}
                style={{ borderRadius: "4px", marginRight: "5px" }} // Optional: square shape
              />
              {option.seats}
            </span>{" "}
            Seats
          </p>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <Button appearance="link">View Flight Details</Button>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <p>{option.price}</p>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <Button
            appearance="primary"
            style={{
              background: "linear-gradient(to right, #0087E1 0%, #174495 100%)",
              border: "none",
              borderRadius: "4px",
              color: "white",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightContent;
