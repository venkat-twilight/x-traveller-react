"use client";
import React from "react";
import {
  Heading,
  Row,
  Col,
  Grid,
  Text,
  Stack,
  VStack,
  Container,
} from "rsuite";
import styles from "@/src/app/page.module.css";
import landingStyle from "@/src/assets/styles/landing.module.css";
import Image from "next/image";
import {
  AdvantagesList,
  REGISTER,
  TravelAgentList,
} from "@/src/utils/constant";
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
import ConsolidatorBanner from "@/src/assets/images/ConsolidatorBanner.png";
import TButton from "../Common/TButton";
import { IconBoxProps } from "@/src/models/landing.model";
import ArrowIcon from "@/src/assets/icons/ArrowIcon.svg";

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
    color: "#FF5A5F",
    background: "#ffdedf",
    text: "Years of business experience",
    title: "30+",
  },
  {
    color: "#3A6AAB",
    title: "24/7",
    icon: TimerIcon,
    background: "#d8e1ee",
    text: "Agent support helpline",
  },
  {
    icon: Income,
    title: "Multiple Income",
    color: "#58BBFF",
    background: "#def1ff",
    text: "Get Awesome opportunities",
  },
  {
    icon: Commission,
    title: "Good Commissions",
    background: "#f0e8f7",
    color: "#B58ED6",
    text: "Earn good deals and commissions",
  },
  {
    icon: AgentsIcon,
    color: "#F88D02",
    background: "#fee8cc",
    title: "Multiple Agents",
    text: "Interactive exclusive portal",
  },
  {
    icon: latestDeals,
    background: "#dcf4e4",
    color: "#50C878",
    title: "Latest Deals",
    text: "Access to great deals",
  },
];

const LandingBase: React.FC = () => {
  return (
    <Container>
      <header className={landingStyle.header}>
        <div className={landingStyle.headerContent}>
          <Heading level={2}>Leading Travel Consolidator in India</Heading>
          <Text
            size="md"
            style={{
              padding: "10px 0px",
              color: "#fff",
            }}
          >
            Welcome to our trusted B2B travel portal, where reliability meets
            innovation!
          </Text>
          <TButton label="Register" background="white" link={REGISTER} />
        </div>
        <div>
          <Image src={ConsolidatorBanner} alt="ConsolidatorBanner" />
        </div>
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

      <Container
        style={{
          background: "#fff",
          padding: "30px 0px",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={20}
          style={{
            width: "80%",
            margin: "0 auto",
          }}
        >
          <Stack.Item flex={1}>
            <Heading level={2}>
              Start your profitable business today with the Best B2B Travel
              Portal in India
            </Heading>
            <Text size="md" muted>
              Travel website is one of India&apos;s foremost B2B travel portals,
              constantly evolving and adding value by providing distributors and
              agents with the best technology, deals, and a user-friendly
              platform to achieve financial freedom.
            </Text>
          </Stack.Item>

          <Stack.Item flex={2}>
            <Grid>
              <Row className="show-grid">
                {temp.map((item, index) => (
                  <Col key={index} style={{ padding: "20px" }} xs={12}>
                    <IconBox
                      keyIndex={index}
                      icon={item.icon}
                      title={item.title}
                      color={item.color}
                      background={item.background}
                      text={item.text}
                    />
                  </Col>
                ))}
              </Row>
            </Grid>
          </Stack.Item>
        </Stack>
      </Container>

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
                  <Image src={ArrowIcon} alt="arrowIcon" />
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
          padding: "30px",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="space-around"
          style={{ height: "100%" }}
        >
          <div>
            <Image
              src={AdvantagesBanner}
              alt="Advantages Banner"
              width={600}
              height={500}
            />
          </div>
          <div>
            {" "}
            <Heading level={2}>Advantages of Travel Website</Heading>
            <div
              style={{ padding: "10px 0px" }}
              className="t-steps t-steps-vertical"
            >
              {AdvantagesList.map((advantage, index) => (
                <div key={index} className="t-steps-item-active t-steps-item">
                  <div className="t-steps-item-tail"></div>
                  <div
                    className="t-steps-item-icon-wrapper"
                    style={{
                      backgroundColor: advantage.color,
                      borderColor: advantage.color,
                    }}
                  >
                    <span className="t-steps-item-icon t-steps-item-icon-process"></span>
                  </div>
                  <div className="t-steps-item-content">
                    <div
                      className="t-steps-item-title"
                      style={{ backgroundColor: advantage.color }}
                    >
                      {advantage.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Stack>
      </section>
    </Container>
  );
};

export default LandingBase;

// Reusable IconBox component
const IconBox: React.FC<IconBoxProps> = ({
  icon,
  background,
  text,
  keyIndex,
  color,
  title,
}) => (
  <div
    key={keyIndex}
    className={landingStyle.iconBox}
    style={{ backgroundColor: background }}
  >
    <div className={landingStyle.iconWrapper}>
      <Image src={icon} alt={text} width={60} height={60} />
    </div>
    <VStack spacing={0}>
      <Heading style={{ color: color }} level={3}>
        {title}
      </Heading>
      <Text size="md">{text}</Text>
    </VStack>
  </div>
);
