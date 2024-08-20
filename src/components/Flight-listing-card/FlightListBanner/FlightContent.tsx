import React, { useState } from "react";
import { Panel, Button, Popover, Whisper } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Image from "next/image";
import ListBanner from "../../../assets/images/ListBanner.svg";
import Indigo from "../../../assets/images/Indigo.svg";
import Vistara from "../../../assets/images/Vistara.svg";
import AirIndia from "../../../assets/images/AirIndia.svg";
import ArrowDownLineIcon from "@rsuite/icons/ArrowDownLine";
import InfoOutlineIcon from "@rsuite/icons/InfoOutline";
import Seats from "../../../assets/images/Seat.svg";
import Iicon from "../../../assets/images/Iicon.svg";
import Fareicon from "../../../assets/images/FareIcon.svg";
import styles from "../../../assets/styles/flight-content.module.css";
import FlightDetailspopup from "./FlightDetailsPopup";

interface PricingOption {
  fare: string;
  code: string;
  seats: number;
  price: string;
  breakdown: Breakdown;
}
interface Breakdown {
  baseFare: string;
  adultFare: string;
  taxAndCharges: string;
  userDevelopmentFee: string;
  k3Tax: string;
  airlineMisc: string;
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
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
    ],
  },
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
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
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
      {
        fare: "SAVER",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
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
      {
        fare: "PUBLISHED",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SPECIAL",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
    ],
  },
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
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        breakdown: {
          baseFare: "₹7,246",
          adultFare: "₹7,246",
          taxAndCharges: "₹1,442",
          userDevelopmentFee: "₹649",
          k3Tax: "₹372",
          airlineMisc: "₹421",
        },
      },
    ],
  },
  // Add more flight objects here
];

const createFareDetailsPopover = (
  breakdown: Breakdown,
  option: PricingOption
) => (
  <Popover
    title={
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
          <Image
            src={Fareicon}
            alt="Fareicon"
            width={30}
            height={30}
            style={{ marginRight: "8px" }}
          />
          <span>Fare Details</span>
        </div>
      </div>
    }
    style={{ borderBottom: "1px solid black", borderRadius: "10px" }}
  >
    <div style={{ padding: "10px", width: "250px" }}>
      <div
        style={{ paddingBottom: "10px", borderBottom: "1px solid lightgrey" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <strong>Base Fare</strong>
          <strong>{breakdown.baseFare}</strong>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#5B5B5B",
            marginBottom: "10px",
          }}
        >
          <span>Adult (1 X {breakdown.adultFare})</span>
          <span>{breakdown.adultFare}</span>
        </div>
      </div>

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
            marginBottom: "10px",
          }}
        >
          <strong>Tax & Charges</strong>
          <strong>{breakdown.taxAndCharges}</strong>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#5B5B5B",
            marginBottom: "10px",
          }}
        >
          <span>User Dev. Fee</span>
          <span>{breakdown.userDevelopmentFee}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#5B5B5B",
            marginBottom: "10px",
          }}
        >
          <span>K3 Tax</span>
          <span>{breakdown.k3Tax}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#5B5B5B",
            marginBottom: "10px",
          }}
        >
          <span>Airline Misc</span>
          <span>{breakdown.airlineMisc}</span>
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
        <strong>{option.price}</strong>
      </div>
    </div>
  </Popover>
);

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
        <span style={{ color: "#222222", fontWeight: "500", fontSize: "16px" }}>
          Sort By
        </span>
        <span style={{ color: "#9E9E9E", fontWeight: "600", fontSize: "14px" }}>
          Showing {flights.length} Flights
        </span>
      </div>

      <div
        className={styles.header}
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      >
        <div style={{ flex: 1, textAlign: "center" }}>Airlines</div>
        <div style={{ flex: 1, textAlign: "center" }}>Departure</div>
        <div style={{ flex: 1, textAlign: "center" }}>Duration</div>
        <div style={{ flex: 1, textAlign: "center" }}>Arrival</div>
        <div style={{ flex: 1, textAlign: "center" }}>Price</div>
      </div>

      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} index={index} />
      ))}
    </div>
  );
};

const FlightCard: React.FC<{ flight: Flight; index: number }> = ({
  flight,
  index,
}) => {
  const [showPricingOptions, setShowPricingOptions] = useState(false);

  return (
    <div className={styles.text}>
      <Panel className={styles.border} style={{ marginBottom: "10px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "10px", textAlign: "center" }}>
            <h5>
              <span style={{ flex: "0 0 auto", marginRight: "10px" }}>
                <Image
                  src={flight.icon}
                  alt="Airline Icon"
                  width={28.65}
                  height={28.65}
                  style={{ borderRadius: "4px", marginRight: "10px" }}
                />
                {flight.airline}
              </span>
            </h5>
          </div>
          <div style={{ flex: 1, padding: "10px", textAlign: "center" }}>
            <p
              style={{ fontSize: "22px", fontWeight: "600", color: "#222222" }}
            >
              {flight.departure}
            </p>
            <p style={{ color: "#9E9E9E", textAlign: "center" }}>
              {flight.departureLocation}
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px", textAlign: "center" }}>
            <p
              style={{ fontSize: "22px", fontWeight: "600", color: "#222222" }}
            >
              {flight.duration}
            </p>
            <p style={{ color: "#9E9E9E", textAlign: "center" }}>
              {flight.durationDetails}
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px", textAlign: "center" }}>
            <p
              style={{ fontSize: "22px", fontWeight: "600", color: "#222222" }}
            >
              {flight.arrival}
            </p>
            <p style={{ color: "#9E9E9E", textAlign: "center" }}>
              {flight.arrivalLocation}
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px", textAlign: "center" }}>
            <div
              style={{ fontSize: "22px", fontWeight: "600", color: "#222222" }}
            >
              <p style={{ position: "relative", display: "inline-block" }}>
                {flight.pricingOptions[0].price}{" "}
                <Whisper
                  trigger="hover"
                  placement="bottomEnd"
                  speaker={createFareDetailsPopover(
                    flight.pricingOptions[0].breakdown,
                    flight.pricingOptions[0]
                  )}
                >
                  <Image
                    src={Iicon}
                    alt="I-icon"
                    width={15}
                    height={15}
                    style={{
                      position: "absolute",
                      top: "-5px", // Adjust as needed
                      right: "-20px", // Adjust as needed
                      cursor: "pointer",
                    }}
                  />
                </Whisper>
              </p>
            </div>
            <Button
              appearance="link"
              onClick={() => setShowPricingOptions(!showPricingOptions)}
              style={{
                textDecoration: "none",
                color: "#0770E3",
                fontWeight: "600",
              }}
            >
              View Fares <ArrowDownLineIcon />
            </Button>
          </div>
        </div>
        {showPricingOptions && (
          <Panel bordered style={{ backgroundColor: "#fbfbfb" }}>
            {flight.pricingOptions.map((option, optionIndex) => (
              <PricingOptionRow key={optionIndex} option={option} />
            ))}
          </Panel>
        )}
      </Panel>
      {index === 1 && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Image
            src={ListBanner}
            alt="Promotional Banner"
            width="955"
            height="160"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
};

const PricingOptionRow: React.FC<{ option: PricingOption }> = ({ option }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <div
      className={styles.text}
      style={{ padding: "2px 10px 10px", borderBottom: "1px solid #c7c7c7" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, textAlign: "left" }}>
          <p style={{ fontSize: "22px", fontWeight: "600", color: "#222222" }}>
            {option.fare}
          </p>
          <p style={{ color: "#9E9E9E", fontWeight: "600", fontSize: "14px" }}>
            {option.code}
          </p>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: "500", color: "#222222" }}>
            <span style={{ flex: "0 0 auto", marginRight: "10px" }}>
              <Image
                src={Seats} // Use flight.icon here
                alt="Airline Icon"
                width={20}
                height={20}
                style={{ borderRadius: "4px", marginRight: "5px" }} // Optional: square shape
              />
              {option.seats}
            </span>
            Seats
          </p>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <Button
            appearance="link"
            style={{
              textDecoration: "none",
              color: "#0770E3",
              fontWeight: "600",
            }}
            onClick={handleOpen}
          >
            View Flight Details
          </Button>
          <FlightDetailspopup open={openModal} onClose={handleClose} />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <p
            style={{
              position: "relative",
              display: "inline-block",
              fontSize: "22px",
              fontWeight: "600",
              color: "#222222",
            }}
          >
            {option.price}{" "}
            <Whisper
              trigger="hover"
              placement="bottomEnd"
              speaker={createFareDetailsPopover(option.breakdown, option)}
            >
              <Image
                src={Iicon}
                alt="I-icon"
                width={15}
                height={15}
                style={{
                  position: "absolute",
                  top: "-5px", // Adjust as needed
                  right: "-20px", // Adjust as needed
                  cursor: "pointer",
                }}
              />
            </Whisper>
          </p>
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
