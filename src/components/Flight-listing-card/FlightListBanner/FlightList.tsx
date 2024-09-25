import React, { useState } from "react";
import { Panel, Button, Popover, Whisper, Row, Col, Dropdown } from "rsuite";
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
import TButton from "../../Common/TButton";
import stop from "../../../assets/images/Stop.svg";
import SortUpIcon from "@rsuite/icons/SortUp";
import SortDownIcon from "@rsuite/icons/SortDown";
import { AutoComplete, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import VisibleIcon from "../../../assets/icons/VisibleIcon.svg";
import BarchartIcon from "../../../assets/icons/BarIcon.svg";
import WeeklyFareSlider from "./WeeklyFareSlider";
import Copyitienery from "../../../assets/icons/Copyitinery.svg";
import Printitienery from "../../../assets/icons/Printitinery.svg";
import Shareitienery from "../../../assets/icons/Share.svg";
import OnestopIcon from "../../../assets/icons/Onestopicon.svg";
import Flight from "../../../assets/images/RightArrowIconB.svg"
import { useDispatch, useSelector } from 'react-redux';
import { setFlightType } from '../../../features/flightSlice';

const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
  "Louisa",
  "Lester",
  "Lola",
  "Lydia",
  "Hal",
  "Hannah",
  "Harriet",
  "Hattie",
  "Hazel",
  "Hilda",
];

interface PricingOption {
  fare: string;
  code: string;
  seats: number;
  price: string;
  netfare: string;
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
  minprice: string;
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
    minprice: "₹8,688",
    pricingOptions: [
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
    durationDetails: "one Stop",
    arrival: "DEL 22:05",
    arrivalLocation: "Indira Gandhi International Airport, India",
    minprice: "₹8,680",
    pricingOptions: [
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
    minprice: "₹8,500",
    pricingOptions: [
      {
        fare: "SAVER",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
    minprice: "₹8,688",
    pricingOptions: [
      {
        fare: "PUBLISHED",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
    minprice: "₹8,688",
    pricingOptions: [
      {
        fare: "SME FARE",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",

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
        netfare: "₹8,600",
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
    minprice: "₹8,688",
    pricingOptions: [
      {
        fare: "PUBLISHED",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
    minprice: "₹8,500",
    pricingOptions: [
      {
        fare: "SAVER",
        code: "(PUIP)",
        seats: 2,
        price: "₹8,688",
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
        netfare: "₹8,600",
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
    style={{
      borderBottom: "1px solid black",
      borderRadius: "10px",
      width: "12%",
    }}
  >
    <div style={{ padding: "10px", width: "100%" }}>
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
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  }>({
    key: "airlines",
    direction: "ascending",
  });
  const [sortedFlights, setSortedFlights] = useState<Flight[]>(flights);
  const [showFare, setshowFare] = useState<boolean>(false); // State with boolean type
  const [showDate, setshowDate] = useState<boolean>(false);
   // const [cities, setCities] = useState([1]);

  const handleClick = () => {
    setshowFare(!showFare); // Toggle visibility on click
  };
  const handleDateClick = () => {
    setshowDate(!showDate); // Toggle visibility on click
  };
  // const addCity = () => {
  //   setCities([...cities, cities.length + 1]);
  // };

  const sortFlights = (key: string) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedFlights = [...flights].sort((a, b) => {
      if (key === "price") {
        const priceA = parseInt(a.minprice.replace("₹", "").replace(",", ""));
        const priceB = parseInt(b.minprice.replace("₹", "").replace(",", ""));
        return direction === "ascending" ? priceA - priceB : priceB - priceA;
      } else if (key === "departure") {
        const timeA = new Date(`1970-01-01T${a.departure}`);
        const timeB = new Date(`1970-01-01T${b.departure}`);
        return direction === "ascending"
          ? timeA.getTime() - timeB.getTime()
          : timeB.getTime() - timeA.getTime();
      } else if (key === "duration") {
        const durationA = parseInt(a.duration.replace("h", ""));
        const durationB = parseInt(b.duration.replace("h", ""));
        return direction === "ascending"
          ? durationA - durationB
          : durationB - durationA;
      } else if (key === "arrival") {
        const timeA = new Date(`1970-01-01T${a.arrival}`);
        const timeB = new Date(`1970-01-01T${b.arrival}`);
        return direction === "ascending"
          ? timeA.getTime() - timeB.getTime()
          : timeB.getTime() - timeA.getTime();
      } else if (key === "airlines") {
        return direction === "ascending"
          ? a.airline.localeCompare(b.airline)
          : b.airline.localeCompare(a.airline);
      }
      return 0;
    });

    setSortedFlights(sortedFlights);
  };

  const getSortIcon = (key: string) => {
    if (key === "airlines") {
      return null; // No icon for Airlines
    }
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <SortUpIcon />
      ) : (
        <SortDownIcon />
      );
    }
    return <SortUpIcon />; // Default to up arrow for other columns
  };

  // const [flightType, setFlightType] = useState("One Way"); // Default to "One Way"

  // const handleFlightTypeChange = (value: any) => {
  //   setFlightType(value);
  // };

  const flightType = useSelector((state: any) => state.flight.flightType);

  // const dispatch = useDispatch();


  // const handleFlightTypeChange = (eventKey: string) => {
  //   dispatch(setFlightType(eventKey)); // Dispatch the Redux action
  // };

  return (
    <div style={{ padding: "20px" }}>
    {/* Flight Type Dropdown */}
    {/* <Dropdown
      onSelect={handleFlightTypeChange} // Call the handle function on selection
      title={flightType || 'Select Flight Type'} // Use the Redux state as the title
      style={{ marginBottom: '20px' }}
    >
      <Dropdown.Item eventKey="One Way">One Way</Dropdown.Item>
      <Dropdown.Item eventKey="Round Trip">Round Trip</Dropdown.Item>
      <Dropdown.Item eventKey="Multi City">Multi City</Dropdown.Item>
    </Dropdown> */}
  
    {/* Flight Cards based on flightType */}
    {flightType === "One Way" ? (
      <div>
        {/* One Way Flight Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "#222222", fontWeight: "500", fontSize: "16px" }}>
            Flights from Bangalore → New Delhi
          </span>
          <span style={{ color: "#9E9E9E", fontWeight: "600", fontSize: "14px" }}>
            Showing {sortedFlights.length} Flights
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <InputGroup inside style={{ width: 300 }}>
            <AutoComplete data={data} />
            <InputGroup.Button tabIndex={-1}>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              border: "1px solid white",
              padding: "10px",
              gap: "10px",
              borderRadius: "5px",
            }}
          >
            <Image
              src={VisibleIcon}
              alt="VisibleIcon"
              width={24}
              onClick={handleClick}
            />
            <Image
              src={BarchartIcon}
              alt="BarchartIcon"
              width={17}
              onClick={handleDateClick}
            />
          </div>
        </div>
        <div>{showDate && <WeeklyFareSlider flightType={flightType}/>}</div>
        <div
          className={styles.header}
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          {["Airlines", "Departure", "Duration", "Arrival", "Price"].map(
            (label, index) => (
              <div
                key={index}
                style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
                onClick={() => sortFlights(label.toLowerCase())}
              >
                {label} {getSortIcon(label.toLowerCase())}
              </div>
            )
          )}
        </div>
        {sortedFlights.map((flight, index) => (
          <FlightCard key={index} flight={flight} index={index} showFare={showFare} />
        ))}
      </div>
    ) : flightType === "Round Trip" ? (
      <div>
      {/* Render Round Trip Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <span
          style={{ color: "#222222", fontWeight: "500", fontSize: "16px" }}
        >
          Flights from Bangalore → New Delhi
        </span>
        <span
          style={{ color: "#9E9E9E", fontWeight: "600", fontSize: "14px" }}
        >
          Showing {sortedFlights.length} Flights
        </span>
      </div>

      {/* Search Input */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <InputGroup inside style={{ width: 300 }}>
          <AutoComplete data={data} />
          <InputGroup.Button tabIndex={-1}>
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            border: "1px solid white",
            padding: "10px",
            gap: "10px",
            borderRadius: "5px",
          }}
        >
          <Image
            src={VisibleIcon}
            alt="VisibleIcon"
            width={24}
            onClick={handleClick}
          />
          <Image
            src={BarchartIcon}
            alt="BarchartIcon"
            width={17}
            onClick={handleDateClick}
          />
        </div>
      </div>

      {/* Weekly Fare Slider */}

      {/* Flight Cards for Round Trip */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ flex: "0 0 calc(50% - 10px)", marginRight: "10px" }}>
          <h4>Departure Flight</h4>
          {showDate && <WeeklyFareSlider flightType={flightType}/>}
          <div
            className={styles.header}
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            {["Airlines", "Departure", "Duration", "Arrival", "Price"].map(
              (label:string , index:number) => (
                <div
                  key={index}
                  style={{
                    flex:  label === "Departure" ? "3" : "2", 
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => sortFlights(label.toLowerCase())}
                >
                  {label} {getSortIcon(label.toLowerCase())}
                </div>
              )
            )}
          </div>
          {sortedFlights
            .slice(0, Math.ceil(sortedFlights.length / 2))
            .map((flight, index) => (
              <FlightCard
                key={index}
                flight={flight}
                index={index}
                showFare={showFare}
              />
            ))}
        </div>
        <div style={{ flex: "0 0 calc(50% - 10px)" }}>
          <h4>Return Flight</h4>
          {showDate && <WeeklyFareSlider flightType={flightType}/>}
          <div
            className={styles.header}
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            {["Airlines", "Departure", "Duration", "Arrival", "Price"].map(
              (label:string, index:number) => (
                <div
                  key={index}
                  style={{
                    flex:  label === "Departure" ? "3" : "2",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => sortFlights(label.toLowerCase())}
                >
                  {label} {getSortIcon(label.toLowerCase())}
                </div>
              )
            )}
          </div>
          {sortedFlights
            .slice(Math.ceil(sortedFlights.length / 2))
            .map((flight, index) => (
              <FlightCard
                key={index}
                flight={flight}
                index={index}
                showFare={showFare}
              />
            ))}
        </div>
      </div>
    </div>
    ) 
    : (
      // <div>
      //   {/* Multi City Flight Content */}
      //     {/* Add More Cities Button */}
      //     {cities.length < 3 && (
      //     <div style={{ display: "flex", justifyContent: "center" }}>
      //       <button onClick={addCity} style={{ cursor: "pointer" }}>
      //         Add City <Image src={Flight} width={16} height={16} alt="Add" />
      //       </button>
      //     </div>
      //   )}
      //   <div
      //     style={{
      //       display: "flex",
      //       justifyContent: "space-between",
      //       marginBottom: "20px",
      //     }}
      //   >
      //     {/* Loop through cities for Multi City flights */}
      //     {cities.map((city, cityIndex) => (
      //       <div
      //         key={cityIndex}
      //         style={{ flex: "0 0 calc(50% - 10px)", marginRight: "10px" }}
      //       >
      //         <h4>
      //           Flight {cityIndex + 1}: From {city.from} → {city.to}
      //         </h4>
      //         <InputGroup inside style={{ width: 300 }}>
      //           <AutoComplete data={data} />
      //           <InputGroup.Button tabIndex={-1}>
      //             <SearchIcon />
      //           </InputGroup.Button>
      //         </InputGroup>
      //         {showDate && <WeeklyFareSlider />}
      //         <div className={styles.header}>
      //           {["Airlines", "Departure", "Duration", "Arrival", "Price"].map(
      //             (label, index) => (
      //               <div key={index} style={{ flex: 1, textAlign: "center" }}>
      //                 {label} {getSortIcon(label.toLowerCase())}
      //               </div>
      //             )
      //           )}
      //         </div>
      //         {sortedFlights.slice(0, Math.ceil(sortedFlights.length / 2)).map(
      //           (flight, index) => (
      //             <FlightCard key={index} flight={flight} showFare={showFare} />
      //           )
      //         )}
      //       </div>
      //     ))}
      //   </div>
  
      
      // </div>
      null
    )
    }
  </div>
  );
};

const FlightCard: React.FC<{
  flight: Flight;
  index: number;
  showFare: boolean;
}> = ({ flight, index, showFare }) => {
  const [showPricingOptions, setShowPricingOptions] = useState(false);

  return (
    <div className={styles.text}>
      <Panel
        className={styles.border}
        style={{ marginBottom: "10px", backgroundColor: "#fff" }}
      >
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
            <p>
              {flight.durationDetails === "Non Stop" ? (
                <Image src={stop} alt="rect" />
              ) : (
                <Image src={OnestopIcon} alt="rect" />
              )}
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
                {flight.minprice}{" "}
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
              <PricingOptionRow
                key={optionIndex}
                option={option}
                showFare={showFare}
              />
            ))}
          </Panel>
        )}
      </Panel>
      {/* {index === 1 && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Image
            src={ListBanner}
            alt="Promotional Banner"
            width="1055"
            height="160"
            style={{ objectFit: "cover" }}
          />
        </div>
      )} */}
    </div>
  );
};

const PricingOptionRow: React.FC<{
  option: PricingOption;
  showFare: boolean;
}> = ({ option, showFare }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const flightType = useSelector((state: any) => state.flight.flightType);
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
        <div style={{ flex:flightType === 'One Way' ? 1 :3, textAlign: "left" }}>
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
        <div style={{ flex:flightType === 'One Way' ? 1 :3, textAlign: "center" }}>
          <Button
            appearance="link"
            style={{
              textDecoration: "none",
              color: "#0770E3",
              fontWeight: "600",
              textWrap: flightType === 'One Way' ? 'nowrap' : 'wrap',
            }}
            onClick={handleOpen}
          >
            View Flight Details
          </Button>
          <FlightDetailspopup open={openModal} onClose={handleClose} />
        </div>
        <div style={{ flex:flightType === 'One Way' ? 1 :4, textAlign: "center" }}>
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
          {showFare && <div>Net Fare: {option.netfare}</div>}
        </div>

        <div style={{ flex:flightType === 'One Way' ? 1 :5, textAlign: "center", position: "relative" }}>
          {/* Button */}
          <TButton label="Book Now" link="/booking" />

          {/* Hidden icons (initially) */}
          <div className={styles.Copyitienery}>
            <div style={{ flex: 1, flexDirection: "row" }}>
              <div style={{ cursor: "pointer" }}>
                <Image src={Copyitienery} alt="Copy Itinerary" />
              </div>
              <div style={{ cursor: "pointer" }}>
                <Image src={Printitienery} alt="Print Itinerary" />
              </div>
              <div style={{ cursor: "pointer" }}>
                <Image src={Shareitienery} alt="Share Itinerary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightContent;
