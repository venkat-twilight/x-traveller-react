import React from "react";
import { Grid, Row, Col, Panel, Tag } from "rsuite";
import WhatsApp from "../../assets/icons/WhatsApp.svg";
import Gmail from "../../assets/icons/Gmail.svg";
import { FlightInfo } from "@/src/components/Flight-listing-card/FlightListBanner/FlightDetailsPopup";
import styles from "../../assets/styles/booking.module.css";
import TTimer from "../Common/TTimer";
import TAccordion from "../Common/TAccordion";
import FareDetailsPanel from "./FareDetails";
import Image from "next/image";
import TFrom from "../Common/TFrom";
import Addons from "./Addons";
import TTable from "../Common/TTable";
import TButton from "../Common/TButton";
import StepperHeader from "../StepperHeader";
import TravellerIcon from "../../assets/icons/TravellerIcon.svg";
import GSTIcon from "../../assets/icons/GSTIcon.svg";
import ShareIcon from "../../assets/icons/ShareIcon.svg";
import AddonIcon from "../../assets/icons/AddonIcon.svg";
import FlightSummaryIcon from "../../assets/icons/FlightSummaryIcon.svg";
import ContectIcon from "../../assets/icons/ContactIcon.svg";
import PromoCode from "./PromoCode";
import FlightSeatSelection from "./AddonsComponent/SeatSelection";
import SeatBlue from "../../assets/icons/SeatBlue.svg";

const fontColor: string = "#F88D02";

const privacyPolicyUrl = "#";
const userAgreementUrl = "#";
const termsOfServiceUrl = "#";
const flightListUrl = "/flightlist";

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

const dataCancellation = [
  { price: "Price", amount: "8999" },
  // Add more rows if needed
];

const dataReschedule = [
  { price: "Price", amount: "8999" },
  // Add more rows if needed
];

const headers = ["Price", "Amount"];

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
    title: "Aadhar number",
    placeholder: "Aadhar number",
    type: "input",
    name: "aadharNumber",
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

const ContectFields = [
  {
    title: "Mobile Number",
    placeholder: "Mobile Number",
    name: "mobile_number",
    type: "input",
  },
  {
    title: "Email Id",
    placeholder: "Email Id",
    name: "email_id",
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
const flightDetails = {
  fareRules: [
    {
      title: "Additional Information",
      content: [
        "* GST and RAF charges will be applicable on the cancellation penalty.",
        "* The above data is indicative, fare rules are subject to changes by the airline depending upon Fare class, and change/cancellation fee amounts may fluctuate in currency conversion rates.",
        "* Although we try to keep this section updated regularly.",
        "* Cancellation/Reissue fee will follow the more restrictive fare type.",
        "* Feel free to call our Contact Centre for exact cancellation/change fee.",
        "* Cancellation/date change request will be accepted 30hrs prior to departure.",
      ],
    },
  ],
};

const steperList = [
  {
    title: "Select Flight",
  },
  {
    title: "Addons",
  },
  {
    title: "Seat Selection",
  },
  {
    title: "Review and Confirm",
  },
];

const BookingBase: React.FC = () => {
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
  const [step, setStep] = React.useState<number>(0);
  const [showAccordion, setShowAccordion] = React.useState<boolean>(true);
  const [isAccordionExpanded, setIsAccordionExpanded] =
    React.useState<boolean>(false);

  const handleNextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4));
    setShowAccordion(false);
  };

  return (
    <>
      <Grid
        fluid
        style={{
          background: "linear-gradient(to right, #0770E3, #0087E1, #174495)",
          padding: "0 20px",
          color: "#fff",
        }}
      >
        <Row>
          <Col
            xs={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "77%",
                margin: "0 auto",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <StepperHeader step={step} list={steperList} />
            </div>
          </Col>
        </Row>
      </Grid>
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
                  padding: "10px 0px 20px",
                }}
              >
                Complete Your Booking Details
              </div>
              {step === 0 ? (
                <>
                  <Panel
                    bordered
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "15px",
                      padding: "2px",
                      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                      marginBottom: "20px", // Add margin-bottom to create a gap between the two panels
                    }}
                  >
                    <Grid fluid>
                      <Row gutter={16}>
                        <Col xs={6}>
                          <div
                            style={{
                              borderLeft: "4px solid orange",
                              padding: "10px",
                            }}
                          >
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
                            <div
                              style={{
                                color: "#9E9E9E",
                                padding: "0px 0px 10px",
                              }}
                            >
                              Non Stop | 02 hrs 50 min
                            </div>
                          </div>
                        </Col>
                        <Col xs={6} xsPush={14}>
                          <div>
                            <TButton
                              label={"Change Flight"}
                              link={flightListUrl}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Grid>
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

                  <br />
                  <TAccordion
                    header="Traveller Details"
                    icon={TravellerIcon}
                    defaultExpanded={true}
                    classname={styles.bookingAccordian}
                    render={
                      PassengerFields.length > 0 && (
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
                            />
                          ))}
                        </div>
                      )
                    }
                  />
                  <br />

                  <TAccordion
                    header="GST Details for Business travel (Optional)"
                    icon={GSTIcon}
                    defaultExpanded={true}
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
                                type={
                                  field.type as "input" | "select" | "checkbox"
                                }
                              />
                            ))}
                          </div>
                        )}
                      </>
                    }
                  />
                  <br />

                  <TAccordion
                    defaultExpanded={true}
                    header="Cancellation & Reshedule Policy"
                    classname={styles.bookingAccordian}
                    render={
                      <>
                        {/* Cancellation and Reschedule Sub-headers */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginTop: "20px",
                          }}
                        >
                          {/* Cancellation Section */}
                          <div style={{ flex: 1, marginRight: "20px" }}>
                            <div
                              style={{
                                display: "flex",
                                backgroundColor: "#f7f7f7",
                                borderBottom: "2px solid #e5e5e5",

                                fontWeight: "bold",
                                borderRadius: "10px",
                                marginBottom: "10px",
                                padding: "10px",
                              }}
                            >
                              Cancellation
                            </div>
                            <TTable data={dataCancellation} headers={headers} />
                          </div>

                          {/* Reschedule Section */}
                          <div style={{ flex: 1, marginLeft: "20px" }}>
                            <div
                              style={{
                                display: "flex",
                                backgroundColor: "#f7f7f7",
                                borderBottom: "2px solid #e5e5e5",

                                fontWeight: "bold",
                                borderRadius: "10px",
                                marginBottom: "10px",
                                padding: "10px",
                              }}
                            >
                              Reschedule
                            </div>
                            <TTable data={dataReschedule} headers={headers} />
                          </div>
                        </div>
                        <>
                          {flightDetails.fareRules.map((section, index) => (
                            <div
                              key={index}
                              style={{
                                border: "1px solid lightgrey",
                                borderRadius: "10px",
                                padding: "15px",
                                marginBottom: "20px",
                                height:
                                  section.title === "Changes"
                                    ? "300px"
                                    : "null",
                                backgroundColor:
                                  section.title === "Changes"
                                    ? "null"
                                    : "#f7f7f7",
                                overflowY:
                                  section.title === "Changes"
                                    ? "auto"
                                    : "visible",
                              }}
                              className={styles.scrollbar}
                            >
                              <div
                                style={{
                                  fontWeight: "bold",
                                  marginBottom: "10px",
                                }}
                              >
                                {section.title}
                              </div>
                              {section.content.map((paragraph, i) => (
                                <div key={i}>{paragraph}</div>
                              ))}
                            </div>
                          ))}
                        </>
                      </>
                    }
                  />
                  <br />

                  <TAccordion
                    header="Share"
                    classname={styles.bookingAccordian}
                    icon={ShareIcon}
                    defaultExpanded={true}
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                  >
                    <TButton label={"Continue"} onClick={handleNextStep} />
                  </div>
                </>
              ) : (
                <div
                  style={{
                    background: "#b9d7fa",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid fluid>
                    <Row gutter={16}>
                      <Col xs={12}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            gap: "10px",
                          }}
                        >
                          <div>
                            <Image
                              style={{
                                width: "55px",
                                height: "100%",
                              }}
                              src={FlightSummaryIcon}
                              alt="FlightSummaryIcon"
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "1px",
                              flexDirection: "column",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "700",
                                fontSize: "18px",
                                marginBottom: "2px",
                              }}
                            >
                              Flight Summary Flight Summary
                            </div>
                            <div
                              style={{
                                fontWeight: "600",
                                fontSize: "15px",
                                marginBottom: "10px",
                              }}
                            >
                              Bangalore (BLE) → New Delhi (DEL)
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} xsPush={8}>
                        <div>
                          <TButton
                            label={"Change Flight"}
                            link={flightListUrl}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </div>
              )}
              <br />

              <TAccordion
                header="Addons (Optional)"
                classname={styles.bookingAccordian}
                icon={AddonIcon}
                defaultExpanded={step === 1 ? true : undefined}
                render={<Addons />}
              />
              {step === 1 ? (
                <div
                  style={{
                    display: "flex",
                    padding: "20px",
                    justifyContent: "center",
                  }}
                >
                  <TButton label={"Continue"} onClick={handleNextStep} />
                </div>
              ) : (
                <br />
              )}

              <TAccordion
                header="Seat Selection"
                classname={styles.bookingAccordian}
                icon={SeatBlue}
                defaultExpanded={step === 2 ? true : undefined}
                render={<FlightSeatSelection />}
              />
              {step === 2 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px",
                  }}
                >
                  <TButton label={"Continue"} onClick={handleNextStep} />
                </div>
              ) : (
                <br />
              )}

              <TAccordion
                header="Contact Details"
                icon={ContectIcon}
                defaultExpanded={step === 3 ? true : undefined}
                classname={styles.bookingAccordian}
                render={
                  ContectFields.length > 0 && (
                    <div style={rowStyle}>
                      {ContectFields.map((field, idx) => (
                        <TFrom
                          key={idx}
                          title={field.title}
                          placeholder={field.placeholder}
                          name={field.name}
                          type={field.type as "input" | "select" | "checkbox"}
                        />
                      ))}
                    </div>
                  )
                }
              />
              {step === 3 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px",
                  }}
                >
                  <TButton label={"Continue"} onClick={handleNextStep} />
                </div>
              ) : (
                <br />
              )}
            </Panel>
          </Col>
          <Col xs={5}>
            <FareDetailsPanel list={FareDetailsList} Total="₹9,246" />
            <div style={{ padding: "20px" }}>
              <TTimer fontColor={fontColor} timeInSec={1200} />
            </div>
            <PromoCode />
          </Col>
        </Row>
        {/* Terms and condition */}
      </div>
      {step === 4 ? (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "20px",
            fontSize: "14px",
            background: "#fff",
            padding: "20px",
            boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          {/* Checkbox with Label */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" id="agree" name="agree" />
            <label htmlFor="agree" style={{ marginLeft: "10px" }}>
              By continuing to pay, I understand and agree with the {""}
              <a
                href={privacyPolicyUrl}
                style={{ textDecoration: "none", color: "#0770E3" }}
              >
                privacy policy
              </a>
              , <br />
              <a
                href={userAgreementUrl}
                style={{ textDecoration: "none", color: "#0770E3" }}
              >
                user agreement
              </a>{" "}
              and
              <a
                href={termsOfServiceUrl}
                style={{ textDecoration: "none", color: "#0770E3" }}
              >
                terms of service
              </a>
              .
            </label>
          </div>

          {/* Total Amount and Make Payment Button */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontWeight: 700, marginRight: "20px" }}>₹9999</span>
            <TButton label={"ConfirmPayment"} link="/payment" />
          </div>
        </div>
      ) : (
        <br />
      )}
    </>
  );
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  paddingTop: "20px",
};

export default BookingBase;
