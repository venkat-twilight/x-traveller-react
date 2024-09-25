import React, { useState } from "react";
import TAccordion from "../../Common/TAccordion";
import TForm from "../../Common/TForm";
import styles from "../../../assets/styles/booking.module.css";
import Image from "next/image"; // Assuming you use next/image for loading the Calendar icon
import Calendar from "../../../assets/images/Calendar.svg"; // Path to your calendar icon
import {
  RadioGroup,
  Radio,
  InputGroup,
  DatePicker,
  Grid,
  Row,
  Col,
} from "rsuite";
import TButton from "../../Common/TButton";
import { PassengerFields } from "@/src/utils/constant";
import TTable from "../../Common/TTable";
import { headers } from "next/headers";
import TDPanel from "../../Common/TDPanel";

const CustomCaret: React.FC = () => (
  <div style={{ width: "10px", height: "16px" }}></div> // Empty div or custom component
);
const Itinerary = () => {
  const [selectedDateType, setSelectedDateType] = useState<string>("booking");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);

  const handleDepartureChange = (value: Date | null) => {
    setDepartureDate(value);
  };

  const handleArrivalChange = (value: Date | null) => {
    setArrivalDate(value);
  };

  // Handle changes for RadioGroup
  const handleDateTypeChange = (
    value: string | number,
    event: React.SyntheticEvent<Element, Event>
  ) => {
    setSelectedDateType(value as string); // Type assertion to ensure correct type
  };

  const headers = ["RefNo", "search", "Flight"];
  const data = [{ refNo: "Price", search: "flight", flight: "indigo" }];
  return (
    <div>
      <TDPanel
        header="Itinerary"
        defaultExpanded={true}
        classname={styles.bookingAccordian}
        render={
          PassengerFields.length > 0 && (
            <>
              <div style={rowStyle}>
                {PassengerFields.map((field, idx) => (
                  <TForm
                    key={idx}
                    title={field.title}
                    options={field.options}
                    placeholder={field.placeholder}
                    name={field.name}
                    type={field.type as "input" | "select" | "checkbox"}
                  />
                ))}
              </div>
              <RadioGroup
                inline
                value={selectedDateType}
                onChange={handleDateTypeChange} // Fix: State change handler for RadioGroup
              >
                <Radio value="booking">Booking Date</Radio>
                <Radio value="travel">Travel Date</Radio>
              </RadioGroup>

              <Grid fluid style={{ marginTop: "20px" }}>
                <Row gutter={16}>
                  <Col md={6}>
                    <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
                      From
                    </div>
                    <InputGroup inside>
                      <InputGroup.Addon>
                        <div
                          style={{
                            position: "absolute",
                            left: "4px",
                            top: "50%",
                            transform: "translateY(-50%)",
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
                        placeholder="Departure Date"
                        style={{ width: "100%" }}
                      />
                    </InputGroup>
                  </Col>

                  <Col md={6}>
                    <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
                      To
                    </div>
                    <InputGroup inside>
                      <InputGroup.Addon>
                        <div
                          style={{
                            position: "absolute",
                            left: "4px",
                            top: "50%",
                            transform: "translateY(-50%)",
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
                        value={arrivalDate}
                        caretAs={CustomCaret}
                        onChange={handleArrivalChange}
                        placeholder="Arrival Date"
                        style={{ width: "100%" }}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <TButton label="Search" />
                </div>
                <div>
                  <TTable headers={headers} data={data} />
                </div>
              </Grid>
            </>
          )
        }
      />
    </div>
  );
};

export default Itinerary;

// Styles for flexbox layout
const rowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  paddingTop: "20px",
};
