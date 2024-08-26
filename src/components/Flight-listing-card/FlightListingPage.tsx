import React from "react";
import { SelectPicker } from "rsuite";
import MemberIcon from "@rsuite/icons/Member";
import { AutoComplete } from "rsuite";
import { Input, InputGroup } from "rsuite";
import Twowayicon from "../../assets/images/TwoWay.svg";
import { DatePicker } from "rsuite";
import Calendar from "../../assets/images/Calendar.svg";
import { Navbar, Nav, Container, Content } from "rsuite";

import Image from "next/image";
import styles from "../../assets/styles/flight-listing.module.css";

import {
  List,
  Grid,
  Row,
  Col,
  Heading,
  Text,
  Stack,
  Panel,
  Button,
  ButtonGroup,
  Placeholder,
  IconButton,
  Drawer,
  RadioGroup,
  Radio,
  ButtonToolbar,
} from "rsuite";
import AvatarIcon from "@rsuite/icons/legacy/Avatar";
import Flightto from "../../assets/images/Toicon.svg";
import FlightFrom from "../../assets/images/FromIcon.svg";

import IndianFlag from "../../assets/images/IndianFlag.svg";
import FlightDropdown from "../landing-page-card/Flights/FlightDropdown";
import FlightListDropdown from "./FlightListDropdown";
import { Dropdown } from "rsuite";
import FlightBannerCard from "./FlightListBanner/FlightListBanner";
import { ItemDataType } from "rsuite/esm/MultiCascadeTree";
import { FormControlBaseProps } from "rsuite/esm/internals/types";
import TButton from "../Common/TButton";

type Option = {
  label: string;
  value: string;
  city: string;
  flag: any;
  airport: string;
  address: string;
};

const CustomCaret: React.FC = () => (
  <div style={{ width: "10px", height: "16px" }}></div> // Empty div or custom component
);

const renderMenuItem = (label: React.ReactNode, item: ItemDataType) => {
  const option = options.find((opt) => opt.value === String(item.value));
  return option ? (
    <div>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col>
          <Image
            src={option.flag}
            alt={`${option.label} Flag`}
            width={24}
            height={24}
            style={{ marginRight: 8 }}
          />
        </Col>
        <Col style={{ textAlign: "left", alignItems: "center" }}>
          {option.city}, {option.label}
          <div style={{ fontSize: "0.8em", color: "gray" }}>
            {option.airport}
          </div>
        </Col>
      </Row>

      {/* <div style={{ marginLeft: 5, fontSize: "0.8em", color: "gray" }}>
        {option.address}
      </div> */}
    </div>
  ) : null;
};

const renderValue = (value: any, item: any): any => {
  const option = options.find((opt) => opt.value === String(value));
  return option ? (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{option.label}</div>
      <div style={{ fontSize: "0.8em", color: "gray" }}>{option.airport}</div>
      <div style={{ fontSize: "0.8em", color: "gray" }}>{option.address}</div>
    </div>
  ) : (
    value
  );
};

const options: Option[] = [
  {
    label: "United States",
    value: "United States",
    flag: IndianFlag,
    city: "New York", // City name for United States
    airport: "John F. Kennedy International Airport",
    address: "Jamaica, NY 11430, USA",
  },
  {
    label: "Canada",
    value: "Canada",
    flag: IndianFlag,
    city: "Toronto", // City name for Canada
    airport: "Toronto Pearson International Airport",
    address: "Toronto, ON M9P 1A6, Canada",
  },
  {
    label: "United Kingdom",
    value: "United Kingdom",
    flag: IndianFlag,
    city: "London", // City name for United Kingdom
    airport: "Heathrow Airport",
    address: "London, UK",
  },
  {
    label: "Australia",
    value: "Australia",
    flag: IndianFlag,
    city: "Sydney", // City name for Australia
    airport: "Sydney Airport",
    address: "Sydney, NSW 2020, Australia",
  },
  {
    label: "Germany",
    value: "Germany",
    flag: IndianFlag,
    city: "Frankfurt", // City name for Germany
    airport: "Frankfurt Airport",
    address: "Frankfurt, Germany",
  },
  // {
  //   label: "France",
  //   value: "France",
  //   flag: IndianFlag,
  //   city: "Paris", // City name for France
  //   airport: "Charles de Gaulle Airport",
  //   address: "Paris, France",
  // },
  // {
  //   label: "Italy",
  //   value: "Italy",
  //   flag: IndianFlag,
  //   city: "Rome", // City name for Italy
  //   airport: "Leonardo da Vinci International Airport",
  //   address: "Rome, Italy",
  // },
  // {
  //   label: "Spain",
  //   value: "Spain",
  //   flag: IndianFlag,
  //   city: "Madrid", // City name for Spain
  //   airport: "Adolfo Suárez Madrid–Barajas Airport",
  //   address: "Madrid, Spain",
  // },
  // {
  //   label: "Japan",
  //   value: "Japan",
  //   flag: IndianFlag,
  //   city: "Tokyo", // City name for Japan
  //   airport: "Narita International Airport",
  //   address: "Tokyo, Japan",
  // },
  {
    label: "China",
    value: "China",
    flag: IndianFlag,
    city: "Beijing", // City name for China
    airport: "Beijing Capital International Airport",
    address: "Beijing, China",
  },
  {
    label: "India",
    value: "India",
    flag: IndianFlag,
    city: "New Delhi", // City name for India
    airport: "Indira Gandhi International Airport",
    address: "New Delhi, India",
  },
  // {
  //   label: "Brazil",
  //   value: "Brazil",
  //   flag: IndianFlag,
  //   city: "São Paulo", // City name for Brazil
  //   airport:
  //     "São Paulo/Guarulhos–Governador André Franco Montoro International Airport",
  //   address: "São Paulo, Brazil",
  // },
  // {
  //   label: "Mexico",
  //   value: "Mexico",
  //   flag: IndianFlag,
  //   city: "Mexico City", // City name for Mexico
  //   airport: "Mexico City International Airport",
  //   address: "Mexico City, Mexico",
  // },
  // {
  //   label: "South Africa",
  //   value: "South Africa",
  //   flag: IndianFlag,
  //   city: "Johannesburg", // City name for South Africa
  //   airport: "O.R. Tambo International Airport",
  //   address: "Johannesburg, South Africa",
  // },
  // {
  //   label: "Russia",
  //   value: "Russia",
  //   flag: IndianFlag,
  //   city: "Moscow", // City name for Russia
  //   airport: "Sheremetyevo International Airport",
  //   address: "Moscow, Russia",
  // },
  {
    label: "Bangalore",
    value: "Bangalore",
    flag: IndianFlag,
    city: "Bangalore", // City name for Bangalore
    airport: "Kempegowda International Airport",
    address: "Bangalore, India",
  },
  {
    label: "Delhi",
    value: "Delhi",
    flag: IndianFlag,
    city: "Delhi", // City name for Delhi
    airport: "Indira Gandhi International Airport",
    address: "Delhi, India",
  },
];

const ways = ["One-way", "Two-way", "Multi-City"];
const today = new Date();

const FlightListingPage: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState("null");
  const [isFocused, setIsFocused] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<string | null>(
    "Date"
  );
  const [departureDate, setDepartureDate] = React.useState<Date | null>(today);
  const [arrivalDate, setArrivalDate] = React.useState<Date | null>(null);
  const [departurePickerOpen, setDeparturePickerOpen] = React.useState(false);
  const [arrivalPickerOpen, setArrivalPickerOpen] = React.useState(false);

  const [fromValue, setFromValue] = React.useState<string | null>();
  const [toValue, setToValue] = React.useState<string | null | undefined>(null);

  const adjustedFromValue: string | undefined =
    fromValue === null ? undefined : fromValue;

  const adjustedToValue: string | undefined =
    toValue === null ? undefined : toValue;

  const handleSwap = () => {
    setFromValue(toValue);
    setToValue(fromValue);
  };

  const handleDepartureChange = (date: Date | null) => {
    setDepartureDate(date);
    setDeparturePickerOpen(false);
  };

  const handleArrivalChange = (date: Date | null) => {
    setArrivalDate(date);
    setArrivalPickerOpen(false);
  };

  const disableBeforeDeparture = (date?: Date): boolean => {
    if (!date || !departureDate) return false;
    return date < departureDate;
  };
  //   const handleChange = (value: string | null) => {
  //     setSelectedValue(value);

  //     // Handle the selected value here
  //   };

  //   const handleIconClick = () => {
  //     setOpen(!open); // Toggle the visibility of the calendar
  //   };
  interface CustomDropdownProps {
    title: string;
    items: string[];
    [key: string]: any; // Allow any additional props
  }

  const CustomDropdown: React.FC<CustomDropdownProps> = ({
    title,
    items,
    ...props
  }) => (
    <div style={{ margin: "auto", width: "80%" }}>
      <Dropdown title={title} size="lg" className={styles.dropdownbtn}>
        <Dropdown.Item>New File</Dropdown.Item>
      </Dropdown>
    </div>
  );
  return (
    <Grid
      fluid
      style={{
        background: "linear-gradient(to right,  #0770E3 ,#0087E1,#174495)",
      }}
    >
      <Row className={styles.showgrid}>
        <Col xs={24} sm={12} md={4} lg={4} xl={2} xxl={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              marginBottom: "20px",
              marginTop: "20px", // Add marginTop to the main container
            }}
          >
            <CustomDropdown title="Select way" items={ways} trigger="click" />
          </div>
        </Col>

        <Col xs={24} sm={12} md={5}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              marginBottom: "20px",
              marginTop: "20px", // Add marginTop to the main container
            }}
          >
            {/* "From" TextField */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                position: "relative",
              }}
            >
              <InputGroup
                inside
                style={{
                  position: "relative",
                  width: "100%",
                  outline: "none",
                }}
              >
                <InputGroup.Addon
                  style={{
                    padding: "0 17px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "4px",
                      top: "45%",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src={FlightFrom}
                      alt="Flight Icon"
                      style={{ width: 25, height: 25 }}
                    />
                  </div>
                </InputGroup.Addon>
                <AutoComplete
                  data={options.map((option) => ({
                    label: option.label,
                    value: option.value,
                    airport: option.airport,
                    address: option.address,
                  }))}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Select a location"
                  renderMenuItem={renderMenuItem}
                  value={adjustedFromValue}
                  onChange={setFromValue}
                />
              </InputGroup>
            </div>

            {/* Centered Icon */}
            <div
              style={{
                position: "absolute",
                left: "51%",
                transform: "translateX(-50%)",
                top: "7px",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
              onClick={handleSwap}
            >
              <Image
                src={Twowayicon}
                alt="icon"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* "To" TextField */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                position: "relative",
              }}
            >
              <InputGroup
                inside
                style={{
                  position: "relative",
                  width: "100%",
                  //   borderRadius: '0 8px 8px 0',
                  outline: "none",
                  marginLeft: "9px", // Add a small gap between the text fields
                }}
              >
                <InputGroup.Addon
                  style={{
                    padding: "0 17px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src={Flightto}
                      alt="Flight Icon"
                      style={{ width: 20, height: 20 }}
                    />
                  </div>
                </InputGroup.Addon>
                <AutoComplete
                  data={options.map((option) => ({
                    label: option.label,
                    value: option.value,
                  }))}
                  placeholder="Select a location"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  renderMenuItem={renderMenuItem}
                  value={adjustedToValue}
                  onChange={setToValue}
                />
              </InputGroup>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={3}>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <InputGroup
                inside
                style={{ position: "relative", flex: 1 }}
                onClick={() =>
                  departureDate
                    ? setDeparturePickerOpen(false)
                    : setDeparturePickerOpen(true)
                }
              >
                <InputGroup.Addon>
                  <div
                    style={{
                      position: "absolute",
                      left: "4px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src={Calendar}
                      alt="Calendar Icon"
                      style={{ width: 17, height: 16 }}
                    />
                  </div>
                </InputGroup.Addon>
                <DatePicker
                  format="dd/MM/yyyy"
                  value={departureDate}
                  caretAs={CustomCaret}
                  onChange={handleDepartureChange}
                  // open={departurePickerOpen}
                  // onOpen={() => setDeparturePickerOpen(true)}
                  // onClose={() => setDeparturePickerOpen(false)}
                  placeholder="Departure Date"
                  style={{ width: "100%" }}
                />
              </InputGroup>
            </div>
          </div>
        </Col>
        {/* <Col xs={24} sm={12} md={4}>
          <div style={{ display: "flex", alignItems: "center", position: "relative", marginBottom: "20px", marginTop: "20px" }}>
            
          <DatePicker
                  format="dd/MM/yyyy"
                  value={departureDate}
                  caretAs={CustomCaret}
                  onChange={handleDepartureChange}
                  // open={departurePickerOpen}
                  // onOpen={() => setDeparturePickerOpen(true)}
                  // onClose={() => setDeparturePickerOpen(false)}
                  placeholder="Departure Date"
                 
                />
          </div>
        </Col> */}
        <Col xs={24} sm={12} md={3}>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* <Text
                  style={{
                    marginBottom: "8px",
                    color: "grey",
                  }}
                >
                  Arrival
                </Text> */}
              <InputGroup
                inside
                style={{ position: "relative", flex: 1 }}
                onClick={() =>
                  !arrivalDate
                    ? setArrivalPickerOpen(true)
                    : setArrivalPickerOpen(false)
                }
                className={styles.calendar}
              >
                <InputGroup.Addon>
                  <div
                    style={{
                      position: "absolute",
                      left: "4px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src={Calendar}
                      alt="Calendar Icon"
                      style={{ width: 17, height: 16 }}
                    />
                  </div>
                </InputGroup.Addon>
                <DatePicker
                  format="dd/MM/yyyy"
                  caretAs={CustomCaret}
                  value={arrivalDate}
                  onChange={handleArrivalChange}
                  // open={arrivalPickerOpen}
                  // onOpen={() => setArrivalPickerOpen(true)}
                  // onClose={() => setArrivalPickerOpen(false)}
                  placeholder="Click to add the return flight"
                  disabledDate={disableBeforeDeparture}
                  style={{ width: "100%" }}
                />
              </InputGroup>
            </div>
          </div>
        </Col>
        <Col md={4} style={{ marginTop: "20px" }}>
          <FlightListDropdown />
        </Col>
        <Col xs={24} sm={12} md={2} style={{ marginTop: "20px" }}>
          <TButton label="Search Flight" />
        </Col>
      </Row>
    </Grid>
  );
};

export default FlightListingPage;
