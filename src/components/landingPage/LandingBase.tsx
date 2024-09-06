/* eslint-disable @next/next/no-async-client-component */
"use client";
import React from "react";
import { Heading, Row, Col, Grid, Text, Steps } from "rsuite";
import styles from "@/src/app/page.module.css";
import TravelAgent from "@/src/assets/icons/TravelAgentCountIcon.svg";
import Booking from "@/src/assets/icons/BookingCountIcon.svg";
import Customer from "@/src/assets/icons/CustomerCountIcon.svg";
import AgentsIcon from "@/src/assets/icons/AgentsIcon.svg";
import CupIcon from "@/src/assets/icons/CupIcon.svg";
import TimerIcon from "@/src/assets/icons/TimerIcon.svg";
import Income from "@/src/assets/icons/IncomeIcon.svg";
import Commission from "@/src/assets/icons/CommissionsIcon.svg";
import latestDeals from "@/src/assets/icons/LatestDeals.svg";
import AdvantagesBanner from "@/src/assets/images/AdvantagesBanner.svg";
import Image from "next/image";
import StepperHeader from "@/src/components/StepperHeader";
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

const LandingBase: React.FC = () => {
  return (
    <>
      <div
        className={styles.container}
        style={{
          background: "#0770E3",
          color: "#fff",
          display: "flex",
          justifyContent: "start",
          padding: "10px",
        }}
      >
        <div>
          <Heading level={1}>Leading Travel Consolidator in India</Heading>
          <Text
            style={{
              fontSize: "18px",
              color: "#fff",
            }}
          >
            Welcome to our trusted B2B travel portal, where reliability meets
            innovation!
          </Text>
        </div>
      </div>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          padding: "10px 0px",
        }}
      >
        <div className={styles.main}>
          <Image src={Customer} alt="TravelAgent" />
          <Heading level={3}>1 Million+</Heading>
          <Text size="md" muted>
            customers
          </Text>
        </div>
        <div className={styles.main}>
          <Image src={Booking} alt="BookingCount" />
          <Heading level={3}>2 Million+</Heading>
          <Text size="md" muted>
            Bookings
          </Text>
        </div>
        <div className={styles.main}>
          <Image src={TravelAgent} alt="TravelAgent" />
          <Heading level={3}>1000+</Heading>
          <Text size="md" muted>
            Travel Agents
          </Text>
        </div>
      </div>
      <div
        style={{
          background: "#fff",
          padding: "10px 0px",
        }}
      >
        <Grid fluid>
          <Row gutter={16}>
            <Col xs={6}>
              <div>
                <Heading>
                  Start your profitable business today with Best B2B Travel
                  Portal in India
                </Heading>
              </div>
              <div>
                <Text size="md" muted>
                  Travel website is one of India's foremost B2B travel portals,
                  constantly evolving and adding value in business by giving
                  it's distributors and agents the best technology,deals and a
                  user-friendly platform to transact and achieve their own
                  financial freedom
                </Text>
              </div>
            </Col>
            <Col xs={12}>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <div
                      style={{
                        background: "#FF5A5F",
                        padding: "20px",
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        <Image src={CupIcon} alt="CupIcon" />
                      </div>
                      <Text size="md">Years of business experience</Text>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div
                      style={{
                        background: "#3A6AAB",
                        padding: "20px",
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        <Image src={TimerIcon} alt="TimerIcon" />
                      </div>
                      <Text size="md">Agent support helpline</Text>
                    </div>
                  </Col>{" "}
                  <Col xs={12}>
                    <div
                      style={{
                        background: "#58BBFF",
                        padding: "20px",
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        <Image src={Income} alt="Income" />
                      </div>{" "}
                      <Text size="md">Get Awesome oppturnities</Text>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div
                      style={{
                        background: "#B58ED6",
                        padding: "20px",
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        <Image src={Commission} alt="Commission" />
                      </div>{" "}
                      <Text size="md">Earn good deals and commissions</Text>
                    </div>
                  </Col>{" "}
                  <Col xs={12}>
                    <div
                      style={{
                        background: "#F88D02",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        <Image src={AgentsIcon} alt="AgentsIcon" />
                      </div>{" "}
                      <Text size="md">Get Interactive exclusive portal</Text>
                    </div>
                  </Col>{" "}
                  <Col xs={12}>
                    <div
                      style={{
                        background: "#50C878",
                        padding: "20px",
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                      >
                        <Image src={latestDeals} alt="latestDeals" />
                      </div>{" "}
                      <Text size="md">Access to the great deals</Text>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={12}>
              <Image src={AdvantagesBanner} alt="AdvantagesBanner" />
            </Col>
            <Col xs={12}>
              <Heading level={2}>Advantages of Travel Website</Heading>
              <StepperHeader step={0} list={steperList} />
            </Col>
          </Row>{" "}
        </Grid>
      </div>
    </>
  );
};
export default LandingBase;
