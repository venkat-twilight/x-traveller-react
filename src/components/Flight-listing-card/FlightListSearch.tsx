import React from "react";
import { AutoComplete } from "rsuite";
import { InputGroup, CheckPicker } from "rsuite";
import Twowayicon from "../../assets/images/TwoWay.svg";
import { DatePicker } from "rsuite";
import Calendar from "../../assets/images/Calendar.svg";
import Image from "next/image";
import styles from "../../assets/styles/flight-listing.module.css";
import { Grid, Row, Col, Checkbox, Stack, RadioGroup, Radio } from "rsuite";
import Flightto from "../../assets/images/Toicon.svg";
import FlightFrom from "../../assets/images/FromIcon.svg";
import IndianFlag from "../../assets/images/IndianFlag.svg";
import FlightListDropdown from "./FlightListDropdown";
import { Dropdown } from "rsuite";
import { ItemDataType } from "rsuite/esm/MultiCascadeTree";
import TButton from "../Common/TButton";

const data = [
  "Select All",
  "Trujet [2t]",
  "IndiGo [6E]",
  "Airliance Air [9I]",
  "Air India Express-AX [AX]",
  "Coupon Indigo [C6E]",
].map((item) => ({ label: item, value: item }));

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
    <div style={{ margin: "auto", width: "55%" }}>
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
      <Row
        className={styles.showgrid}
        style={{
          justifyContent: "center", // Center the columns horizontally
          gap: "15px", // Add gap between columns
          width: "100%",
          margin: "0px auto",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <Col xs={24} sm={12} md={4} lg={4} xl={2} xxl={2}  >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center the content within the column
                marginBottom: "20px",
                marginTop: "20px", // Add marginTop to the main container
              }}
            >
              <CustomDropdown title="Select way" items={ways} trigger="click" />
            </div>
          </Col>
        </div>

        <Col xs={24} sm={12} md={6}>
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

        <Col xs={24} sm={12} md={2}>
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

        <Col xs={24} sm={12} md={2}>
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
      </Row>
      <Row
        className={styles.showgrid}
        style={{
          justifyContent: "center",
          gap: "15px",
          padding: "10px",
          width: "100%",
          margin: "0px auto",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
         
            <Col xs={24} sm={12} md={4} lg={4} xl={2} xxl={2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  position: "relative",
                }}
              >
                <Stack spacing={10} direction="column" alignItems="flex-start">
                  <CheckPicker
                    data={data}
                    searchable={false}
                    style={{ width: "100%" }}
                    placeholder="Select Your Airlines"
                  />
                </Stack>
              </div>
            </Col>
            </div>
            <Col xs={24} sm={12} md={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    border: "1px solid white",
                    display: "flex",
                    background: "#fff",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", paddingRight: "20px" }}>
                    <Checkbox style={{ color: "black" }}>
                      Low Cost Airlines
                    </Checkbox>
                    <Checkbox style={{ color: "black" }}>
                      <span
                        style={{
                          borderRight: "1px solid Lightgrey",
                          paddingRight: "10px",
                        }}
                      >
                        GDS Airlines
                      </span>
                    </Checkbox>
                  </div>
                  <RadioGroup
                    name="radio-group-inline"
                    inline
                    defaultValue="A"
                    style={{ gap: "10px" }}
                  >
                    <Radio
                      value="A"
                      style={{
                        paddingRight: "10px",
                      }}
                    >
                      <span style={{ color: "black" }}> Direct flight</span>
                    </Radio>
                    <Radio
                      value="B"
                      style={{
                        paddingRight: "10px",
                      }}
                    >
                      <span style={{ color: "black" }}>Near By Airports</span>
                    </Radio>
                    <Radio
                      value="C"
                      style={{
                        paddingRight: "10px",
                      }}
                    >
                      <span style={{ color: "black" }}> Students Fare</span>
                    </Radio>
                    <Radio
                      value="D"
                      style={{
                        paddingRight: "10px",
                      }}
                    >
                      <span style={{ color: "black" }}>
                        Senior Citizen Fare
                      </span>
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={2}>
              <TButton label="Search Flight" />
            </Col>
          
       
      </Row>
    </Grid>
  );
};

export default FlightListingPage;
