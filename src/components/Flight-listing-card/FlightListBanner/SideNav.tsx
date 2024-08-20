import React, { useState } from "react";
import { Sidenav, Nav, Slider, Checkbox, Radio, RadioGroup } from "rsuite";
import styles from "../../../assets/styles/sidenav-listing.module.css"
import Vistara from "../../../assets/images/Vistara.svg"
import AirIndia from "../../../assets/images/AirIndia.svg"
import Indigo from "../../../assets/images/Indigo.svg"
import Image from "next/image";

const headerStyles: React.CSSProperties = {
  padding: 20,
  fontSize: 16,
  fontWeight: "bold",
  borderBottom:"1px solid lightgrey"
     
  //   color: '#fff',
  //   textAlign: 'center'
};
const bodyStyles: React.CSSProperties = {
  backgroundColor: "blue",
};

const sliderContainerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px 0",
};
const navItemStyles: React.CSSProperties = {
  borderBottom: "1px solid lightgrey",
  width: "93%",
  margin: "auto 10px",
};

const sliderLabelStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  paddingBottom: 10,
};

const formatMinutes = (minutes: number) => {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs}h ${mins}m`;
};

interface FilterOption {
  value: string;
  label: string;
  price?: number;
  icon:any;
}

interface Filter {
  type: string;
  label: string;
  options?: FilterOption[];
  minValue?: number; // In minutes
  maxValue?: number; // In minutes
}

const filters: Filter[] = [
  {
    type: "departure",
    label: "Departure",
    options: [
      { value: "before6am",icon: Vistara, label: "Before 6AM" },
      { value: "6am-12pm",icon: Vistara, label: "6AM-12PM" },
      { value: "12pm-6pm",icon: Vistara, label: "12PM-6PM" },
      { value: "after6pm",icon: Vistara, label: "After 6PM" },
    ],
  },
  {
    type: "arrival",
    label: "Arrival",
    options: [
      { value: "before6am",icon: Vistara, label: "Before 6AM" },
      { value: "6am-12pm",icon: Vistara, label: "6AM-12PM" },
      { value: "12pm-6pm", icon: Vistara,label: "12PM-6PM" },
      { value: "after6pm", icon: Vistara,label: "After 6PM" },
    ],
  },
  {
    type: "stops",
    label: "Stops",
    options: [
      { value: "nonstop",icon: Vistara, label: "Non stop" },
      { value: "1stop",icon: Vistara, label: "1 Stop" },
      { value: "2plusstop",icon: Vistara, label: "2+ Stops" },
    ],
  },
  {
    type: "price",
    label: "Price",
    minValue: 6196,
    maxValue: 18688,
  },
  {
    type: "duration",
    label: "Onward Duration",
    minValue: 165,
    maxValue: 1080,
  },
  {
    type: "airlines",
    label: "Preferred Airlines",
    options: [
      { value: "airIndia",icon: Indigo, label: "Air India", price: 6196 },
      { value: "indiGo",icon: Vistara, label: "IndiGo", price: 6399 },
      { value: "vistara",icon: AirIndia, label: "Vistara", price: 6448 },
      { value: "multiAirline",icon: Vistara, label: "Multi-Airline", price: 7416 },
    ],
  },
];

const SideNav = () => {
  const [checkedOptions, setCheckedOptions] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (value: string) => {
    setCheckedOptions((prev) => {
      const newCheckedOptions = new Set(prev);
      if (newCheckedOptions.has(value)) {
        newCheckedOptions.delete(value);
      } else {
        newCheckedOptions.add(value);
      }
      return newCheckedOptions;
    });
  };

  return (
    <div style={{ width: 340, borderRadius: "8px", }}>
      <Sidenav
        defaultOpenKeys={[
          "departure",
          "arrival",
          "stops",
          "price",
          "duration",
          "airlines",
        ]}
      >
        <Sidenav.Header>
          <div style={headerStyles}>Filters</div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            {filters.map((filter) => (
              <Nav.Menu
                key={filter.type}
                eventKey={filter.type}
                title={filter.label}
                style={{fontWeight:"bold"}}
              >
                <Nav.Item style={navItemStyles}>
                  {filter.type === "price" ? (
                    <div style={sliderContainerStyles}>
                      <div style={sliderLabelStyles}>
                        <span>₹{filter.minValue}</span>
                        <span>₹{filter.maxValue}</span>
                      </div>
                      <Slider
                        progress
                        style={{ width: 200, margin: "0 10px" }}
                        min={filter.minValue}
                        max={filter.maxValue}
                      />
                    </div>
                  ) : filter.type === "duration" ? (
                    <div style={sliderContainerStyles}>
                      <div style={sliderLabelStyles}>
                        <span>
                          {filter.minValue !== undefined
                            ? formatMinutes(filter.minValue)
                            : ""}
                        </span>
                        <span>
                          {filter.maxValue !== undefined
                            ? formatMinutes(filter.maxValue)
                            : ""}
                        </span>
                      </div>
                      <Slider
                        progress
                        style={{ width: 200, margin: "0 10px" }}
                        min={filter.minValue}
                        max={filter.maxValue}
                      />
                    </div>
                  ) : filter.type === "airlines" ? (
                    filter.options?.map((option) => (
                      <div key={option.value} style={{ padding: "5px 0", }}>
                        <Checkbox
                          checked={checkedOptions.has(option.value)}
                          onClick={() => handleCheckboxChange(option.value)}
                          style={{ display: "block"  }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",width: "95%",
                            margin: "auto 10px", }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <Image src={option.icon} alt="Vistara" width={20} height={20} />
                              <span style={{marginLeft:"10px"}}>{option.label}</span>
                            </div>
                            <div>₹{option.price ?? 0}</div>
                          </div>
                        </Checkbox>
                      </div>
                    ))
                  ) : filter.options ? (
                    <RadioGroup name={filter.type}>
                      {filter.options.map((option) => (
                        <Radio key={option.value} value={option.value}>
                          {option.label}
                        </Radio>
                      ))}
                    </RadioGroup>
                  ) : null}
                </Nav.Item>
              </Nav.Menu>
            ))}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
