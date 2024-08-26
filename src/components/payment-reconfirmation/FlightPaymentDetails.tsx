import React from "react";
import { List, Grid, Row, Col, Heading, Text, Stack, Panel, Tag } from "rsuite";
import WhatsApp from "../../assets/icons/WhatsApp.svg";
import Gmail from "../../assets/icons/Gmail.svg";
import { FlightInfo } from "@/src/components/Flight-listing-card/FlightListBanner/FlightDetailsPopup";
import styles from "../../assets/styles/booking.module.css";
import TTimer from "../Common/TTimer";
import TAccordion from "../Common/TAccordion";
import FareDetailsPanel from "../booking/FareDetails";
import Image from "next/image";
import TFrom from "../Common/TFrom";
import TWarning from "../Common/TWarning";
import Addons from "../booking/Addons";
import TTable from "../Common/TTable";
import luggage from "../../assets/images/Luggage.svg";
import TButton from "../Common/TButton";

const fontColor: string = "#F88D02";

const FareDetailsList = [
  {
    title: "Base Fare",
    value: "₹7,246",
  },
  {
    title: "Tax & charges",
    value: "₹1,500",
  },
];

const PassengerFields = [
  {
    title: "Title",
    placeholder: "Mr/...",
    type: "select",
    name: "title",
    options: [
      { label: "Mr", value: "mr" },
      { label: "Ms", value: "ms" },
      { label: "Mrs", value: "mrs" },
    ],
  },
  {
    title: "First Name",
    placeholder: "First Name",
    type: "input",
    name: "firstName",
  },
  {
    title: "Last Name",
    placeholder: "Last Name",
    type: "input",
    name: "lastName",
  },
  {
    title: "Mobile Number",
    placeholder: "Mobile Number",
    type: "input",
    name: "mobile",
  },
  {
    title: "Email ID",
    placeholder: "Email ID",
    type: "input",
    name: "email",
  },
];

const GSTFields = [
  { title: "GSTIN", placeholder: "GSTIN", name: "gstin", type: "input" },
  {
    title: "GSTIN Mobile Number",
    placeholder: "GSTIN Mobile Number",
    name: "gstinMobile",
    type: "input",
  },
  {
    title: "GSTIN Email Address",
    placeholder: "GSTIN Email Address",
    name: "gstinEmail",
    type: "input",
  },
  {
    title: "GSTIN Phone Number",
    placeholder: "GSTIN Phone Number",
    name: "gstinPhone",
    type: "input",
  },
];

const Tabledata = {
  sections: [
    {
      title: "Passenger Details",
      headers: ["BaggageType", "Check in", "Cabin"],
      data: [
        {
          baggagetype: "Adult",
          checkin: "15 Kgs (1 Piece only)",
          cabin: "7 Kgs (1 Piece only)",
        },
      ],
      icons: {
        "Check in": luggage,
        Cabin: luggage,
      },
    },
    {
      title: "Fare Details",
      headers: ["Pax Name", "Base Fare", "Tax and Charges", "Total Booking"],
      data: [
        {
          paxname: "Mr.Varatharajan",
          basefare: "₹9999",
          taxandcharges: "₹723",
          totalbooking: "₹9999",
        },
      ],
    },
    {
      title: "Payment methods",
      headers: ["Payment Mode", "Gateway Charges"],
      data: [
        {
          paymentmode: "Deposit Account/UPI",
          gatewaycharges: "Nil",
        },
      ],
    },
    {
      title: "Contact Details",
      headers: ["Mobile", "Email"],
      data: [
        {
          mobile: "+91 9751759216",
          email: "varadharajan@gmail.com",
        },
      ],
    },
    
  ],
};

export default function FlightPaymentDetails() {
  // const [formData, setFormData] = useState(() =>
  //   fields.reduce((acc, field) => {
  //     acc[field.name] = field.type === "checkbox" ? false : "";
  //     return acc;
  //   }, {} as Record<string, string | boolean>)
  // );

  // // Handle field changes
  // const handleFieldChange = (name: string, value: string | boolean) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  return (
    <div
      style={{
        width: "72%",
        padding: "20px 0px",
        margin: "auto",
      }}
    >
      <Row>
        <Col>
          <Panel className={styles.bookingPanel}>
            <div>
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
            <Row>
              <Col xs={18}>
                <Panel className={styles.bookingPanel}>
                  <FlightInfo />
                </Panel>
              </Col>
              <Col xs={6}>
                <FareDetailsPanel list={FareDetailsList} Total="₹9,999" />
              </Col>
            </Row>
            <div>
              {Tabledata.sections.map((section, index) => (
                <div key={index}>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      marginBottom: "10px",
                      marginTop: index !== 0 ? "20px" : "0px",
                    }}
                  >
                    {section.title}
                  </div>
                  <TTable
                    headers={section.headers}
                    data={section.data}
                    icons={section.icons as { [key: string]: string }}
                  />
                </div>
              ))}
            </div>
            {/* Terms and condition */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
                fontSize: "14px",
              }}
            >
              {/* Checkbox with Label */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" id="agree" name="agree" />
                <label htmlFor="agree" style={{ marginLeft: "10px" }}>
                  I agree with the booking policies, Privacy policy, Terms &
                  Conditions
                </label>
              </div>

              {/* Total Amount and Make Payment Button */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontWeight: 700, marginRight: "20px" }}>
                  ₹9999
                </span>
                <TButton label={"Make Payment"} />
              </div>
            </div>
          </Panel>
        </Col>
      </Row>
    </div>
  );
}

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
};
