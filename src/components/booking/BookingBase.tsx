import React from "react";
import { List, Grid, Row, Col, Heading, Text, Stack, Panel, Tag } from "rsuite";
import WhatsApp from "../../assets/icons/WhatsApp.svg";
import Gmail from "../../assets/icons/Gmail.svg";
import { FlightInfo } from "@/src/components/Flight-listing-card/FlightListBanner/FlightDetailsPopup";
import styles from "../../assets/styles/booking.module.css";
import TTimer from "../Common/TTimer";
import TAccordion from "../Common/TAccordion";
import FareDetailsPanel from "./FareDetails";
import Image from "next/image";
import TFrom from "../Common/TFrom";
import TWarning from "../Common/TWarning";
import Addons from "./Addons";

const fontColor: string = "#F88D02";

const FareDetailsList = [
  {
    title: "Base Fare",
    value: "₹7,246",
  },
  {
    title: "Taxes",
    value: "₹1,500",
  },
  {
    title: "Service Fee",
    value: "₹500",
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
  {
    title: "Address",
    placeholder: "Address",
    type: "input",
    name: "Address",
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

const CancelFields = [
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

export default function PaymentBase() {
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
        <Col xs={19}>
        <Panel>
  <div
    style={{
      fontSize: "22px",
      fontWeight: 700,
      padding:"10px 0px 20px"
    }}
  >
    Complete Your Booking Details
  </div>
  <div>
    <Panel
      bordered
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        padding: "10px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        marginBottom: "20px", // Add margin-bottom to create a gap between the two panels
      }}
    >
      <div style={{ borderLeft: "4px solid orange", padding: "10px" }}>
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
          Bangalore (BLE) → New Delhi (DEL)
        </div>
        <div style={{ color: "#9E9E9E", padding: "0px 0px 10px" }}>
          Non Stop | 02 hrs 50 min
        </div>
      </div>
    </Panel>

              <Panel
                bordered
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "15px",
                  padding: "10px",
                  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                  marginTop: "20px", // Gap between the two panels
                }}
              >
                <FlightInfo />
              </Panel>
              <div
                style={{
                  marginTop: "20px", // Add gap between the Accordion and Panel
                }}
              >
                <TAccordion
                  header="Passenger Information"
                  classname={styles.bookingAccordian}
                  render={
                    <>
                      {PassengerFields.length > 0 && (
                        <div style={rowStyle}>
                          {PassengerFields.map((field, idx) => (
                            <TFrom
                              key={idx}
                              title={field.title}
                              placeholder={field.placeholder}
                              name={field.name}
                              type={
                                field.type as "input" | "select" | "checkbox"
                              }
                              options={field.options}
                            />
                          ))}
                        </div>
                      )}
                      <TWarning content="These details will be passed to the Airlines for booking" />
                    </>
                  }
                />
              </div>
            </div>

            <br />
           
            <TAccordion
              header="GST Details for Business travel (Optional)"
              classname={styles.bookingAccordian}
              render={
                <>
                  {GSTFields.length > 0 && (
                    <div style={rowStyle}>
                      {GSTFields.map((field, idx) => (
                        <TFrom
                          key={idx}
                          title={field.title}
                          placeholder={field.placeholder}
                          name={field.name}
                          type={field.type as "input" | "select" | "checkbox"}
                        />
                      ))}
                    </div>
                  )}
                </>
              }
            />
             <br />
           
           <TAccordion
             header="Cancellation & Reshedule Policy"
             classname={styles.bookingAccordian}
             render={
               <>
                 {CancelFields.length > 0 && (
                   <div style={rowStyle}>
                     {CancelFields.map((field, idx) => (
                       <TFrom
                         key={idx}
                         title={field.title}
                         placeholder={field.placeholder}
                         name={field.name}
                         type={field.type as "input" | "select" | "checkbox"}
                       />
                     ))}
                   </div>
                 )}
               </>
             }
           />
            {/* <br />
            <TAccordion
              header="Addons (Optional)"
              classname={styles.bookingAccordian}
              render={<Addons />}
            />
            <br />
            <TAccordion
              header="Pay Now"
              classname={styles.bookingAccordian}
              render={
                <>
                  <p>Payment rules & Restriction</p>
                  <p>
                    1. Kindly check the spelling & reconfirm the passenger
                    name(s) before you book.
                    <br />
                    2. Ticket name changes are not permitted once issues
                  </p>
                  <p>
                    The above mentioned purchase are subject to cancellation,
                    date changes fees ans\d once purchased tickets are
                    non-transferable and names changes are permitted. For
                    further details,read the overview of all the Resctriction,
                    Penalitites & Cancellation Charges.
                  </p>
                </>
              }
            />
            <br />
            <TAccordion
              header="Payment option"
              classname={styles.bookingAccordian}
              render={<Addons />}
            />
             <br />
             <TAccordion
              header="Share and Confirm"
              classname={styles.bookingAccordian}
              render={
                <div style={{ padding: "10px" }}>
                  <p style={{ marginBottom: "15px" }}>
                    Share the entered details to customer so that they can
                    verify and confirm.
                  </p>
                  <Tag
                    style={{
                      padding: "8px 15px",
                      border: "1px solid gray",
                      borderRadius: "30px",
                      background: "#fff",
                    }}
                  >
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp Icon"
                      width={24}
                      height={24}
                    />
                    <span>WhatsApp</span>
                  </Tag>
                  <Tag
                    style={{
                      padding: "8px 15px",
                      border: "1px solid gray",
                      borderRadius: "30px",
                      background: "#fff",
                    }}
                  >
                    <Image
                      src={Gmail}
                      alt="Gmail Icon"
                      width={22}
                      height={22}
                    />
                    <span style={{ marginLeft: "5px" }}>Gmail</span>
                  </Tag>
                </div>
              }
            />
            <br /> */}
          </Panel>
        </Col>
        <Col xs={5}>
          <FareDetailsPanel list={FareDetailsList} Total="₹9,246" />
          <div style={{ padding: "20px" }}>
            <TTimer fontColor={fontColor} timeInSec={630} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  paddingTop:"20px"
};
