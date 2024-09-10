"use client";
import React from "react";
import { Heading, Row, Col, Grid, Text, Stack } from "rsuite";
import styles from "@/src/app/page.module.css";
import landingStyle from "@/src/assets/styles/landing.module.css";
import Image from "next/image";
import StepperHeader from "@/src/components/StepperHeader";
import { REGISTER } from "@/src/utils/constant";
// Import Icons and Images
import TravelAgent from "@/src/assets/icons/TravelAgentCountIcon.svg";
import Booking from "@/src/assets/icons/BookingCountIcon.svg";
import Customer from "@/src/assets/icons/CustomerCountIcon.svg";
import CupIcon from "@/src/assets/icons/CupIcon.svg";
import TimerIcon from "@/src/assets/icons/TimerIcon.svg";
import Income from "@/src/assets/icons/IncomeIcon.svg";
import Commission from "@/src/assets/icons/CommissionsIcon.svg";
import AgentsIcon from "@/src/assets/icons/AgentsIcon.svg";
import latestDeals from "@/src/assets/icons/LatestDeals.svg";
import AdvantagesBanner from "@/src/assets/images/AdvantagesBanner.svg";

import TButton from "../Common/TButton";

// Stepper data
const steperList = [
  { title: "Select Flight" },
  { title: "Addons" },
  { title: "Seat Selection" },
  { title: "Review and Confirm" },
];

const statsData = [
  {
    src: Customer,
    alt: "Customers Icon",
    count: "1 Million+",
    label: "Customers",
  },
  {
    src: Booking,
    alt: "Booking Count Icon",
    count: "2 Million+",
    label: "Bookings",
  },
  {
    src: TravelAgent,
    alt: "Travel Agents Icon",
    count: "1000+",
    label: "Travel Agents",
  },
];

const temp = [
  {
    icon: CupIcon,

    background: "#FF5A5F",
    text: "Years of business experience",
  },
  {
    icon: TimerIcon,
    background: "#3A6AAB",
    text: "Agent support helpline",
  },
  {
    icon: Income,
    background: "#58BBFF",
    text: "Get Awesome opportunities",
  },
  {
    icon: Commission,
    background: "#B58ED6",
    text: "Earn good deals and commissions",
  },
  {
    icon: AgentsIcon,
    background: "#F88D02",
    text: "Interactive exclusive portal",
  },
  {
    icon: latestDeals,
    background: "#50C878",
    text: "Access to great deals",
  },
];

const TravelAgentList = [
  {
    number: 1,
    fontColor: "#564FFD",
    color: "#FD6922",
    text: "Fill in the join us form",
  },
  {
    number: 2,
    fontColor: "#E34444",
    color: "#68B7FF",
    text: "Send us your documents",
  },
  {
    number: 3,
    fontColor: "#50C878",
    color: "#50C878",
    text: "Receive your authorized license and start your travel business",
  },
];

// Reusable IconBox component
const IconBox = ({
  icon,
  background,
  text,
}: {
  icon: string;
  background: string;
  text: string;
}) => (
  <div className={landingStyle.iconBox} style={{ background }}>
    <div className={landingStyle.iconWrapper}>
      <Image src={icon} alt={text} width={40} height={40} />
    </div>
    <Text size="md">{text}</Text>
  </div>
);

const LandingBase: React.FC = () => {
  return (
    <>
      <header className={landingStyle.header}>
        <div className={landingStyle.headerContent}>
          <Heading level={1}>Leading Travel Consolidator in India</Heading>
          <Text className={styles.headerText}>
            Welcome to our trusted B2B travel portal, where reliability meets
            innovation!
          </Text>
          <TButton label="Register" background="white" link={REGISTER} />
        </div>
        {/* <div>
          <Image src={ConsolidatorBanner} alt="ConsolidatorBanner" />
        </div> */}
      </header>

      <section className={landingStyle.statsSection}>
        {statsData.map((stat, index) => (
          <div key={index} className={landingStyle.statItem}>
            <Image src={stat.src} alt={stat.alt} width={60} height={60} />
            <Heading level={3}>{stat.count}</Heading>
            <Text size="md" muted>
              {stat.label}
            </Text>
          </div>
        ))}
      </section>

      <section className={landingStyle.businessSection}>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <Heading level={2}>
                Start your profitable business today with the Best B2B Travel
                Portal in India
              </Heading>
              <Text size="md" muted>
                Travel website is one of India&apos;s foremost B2B travel
                portals, constantly evolving and adding value by providing
                distributors and agents with the best technology, deals, and a
                user-friendly platform to achieve financial freedom.
              </Text>
            </Col>

            <Col xs={12}>
              <Grid>
                <Row gutter={16}>
                  {temp.map((item, index) => (
                    <Col key={index} xs={12}>
                      <IconBox
                        icon={item.icon}
                        background={item.background}
                        text={item.text}
                      />
                    </Col>
                  ))}
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </section>

      <section className={styles.processSection}>
        <Stack
          alignItems="center"
          direction="column"
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Heading level={3}>How to become a Travel Agent?</Heading>
          <Text size="md">
            Follow these three simple steps and you are good to go!
          </Text>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          style={{ height: "100%", padding: "20px" }}
        >
          {TravelAgentList.map((step, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                borderBottom: `6px solid ${step.color}`,
              }}
            >
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-around"
                spacing={15}
                style={{ height: "100%", padding: "15px" }}
              >
                <div
                  style={{
                    padding: "10px",
                    background: "#fff",
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    as="b"
                    size="xl"
                    style={{
                      color: step.fontColor,
                    }}
                  >
                    {step.number}
                  </Text>
                </div>
                <Text
                  style={{
                    width: "250px",
                  }}
                  size="lg"
                >
                  {step.text}
                </Text>
                {TravelAgentList.length - 1 > index && (
                  <Text size="lg"> {`---------->`}</Text>
                )}
              </Stack>
            </div>
          ))}
        </Stack>
      </section>

      <section
        className={styles.advantagesSection}
        style={{
          background: "#fff",
          width: "100%",
        }}
      >
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Image
                src={AdvantagesBanner}
                alt="Advantages Banner"
                width={500}
                height={400}
              />
            </Col>
            <Col xs={12}>
              <Heading level={2}>Advantages of Travel Website</Heading>
              <StepperHeader step={0} list={steperList} />
            </Col>
          </Row>
        </Grid>
      </section>
    </>
  );
};

export default LandingBase;
