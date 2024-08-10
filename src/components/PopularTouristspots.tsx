import React, { useState } from "react";
import { Row, Col, Stack, Panel, Text, Tag } from "rsuite";
import Image from "next/image";
import TajMahal from "../assets/images/Tajmahal.svg";
import Maldieves from "../assets/images/Maldieves.svg";
import EiffelTower from "../assets/images/EiffelTower.svg";
import BurjKhalifa from "../assets/images/BurjKhalifa.svg";
import LeftArrowIcon from "../assets/images/LeftArrowGrey.svg";
import RightArrowIcon from "../assets/images/RightArrowIconB.svg";
import Calendar from "../assets/images/Calendar.svg";
import TimerAlert from "../assets/images/TimeRedIcon.svg";
import Star from "../assets/images/Star.svg";
import styles from "../assets/styles/populartouristspots.module.css";

const cardData = [
  {
    image: TajMahal,
    text: "Taj Mahal",
    subtext: "Uttar Pradesh, India",
    icon: Calendar,
    roundTrip: "130",
    rating: "4.4",
  },
  {
    image: Maldieves,
    text: "Maldives",
    subtext: "South Asia",
    icon: TimerAlert,
    roundTrip: "130",
    rating: "4.4",
  },
  {
    image: EiffelTower,
    text: "Eiffel Tower",
    subtext: "France, Paris",
    icon: Calendar,
    roundTrip: "130",
    rating: "4.4",
  },
  {
    image: BurjKhalifa,
    text: "Burj Khalifa",
    subtext: "Dubai",
    icon: TimerAlert,
    roundTrip: "130",
    rating: "4.4",
  },
  {
    image: TajMahal,
    text: "Taj Mahal",
    subtext: "Uttar Pradesh, India",
    icon: Calendar,
    roundTrip: "130",
    rating: "4.4",
  },
  {
    image: Maldieves,
    text: "Maldives",
    subtext: "South Asia",
    icon: TimerAlert,
    roundTrip: "130",
    rating: "4.4",
  },
  {
    image: EiffelTower,
    text: "Eiffel Tower",
    subtext: "France, Paris",
    icon: Calendar,
    roundTrip: "130",
    rating: "4.4",
  },
  {
    image: BurjKhalifa,
    text: "Burj Khalifa",
    subtext: "Dubai",
    icon: TimerAlert,
    roundTrip: "130",
    rating: "4.4",
  },
];

interface CardProps {
  image: string;
  text: string;
  subtext: string;
  icon: string;
  roundTrip: string;
  rating: string;
}

const Card: React.FC<CardProps> = ({ image, text, subtext, icon, roundTrip, rating }) => (
  <Panel
    bordered
    bodyFill
    style={{
      padding: "0",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flex: "1 1 300px",
      marginTop: "20px",
    }}
  >
    <div style={{ flex: "1 1 auto", position: "relative", height: "200px" }}>
      <Image src={image} alt="Card Icon" layout="fill" objectFit="cover" />
    </div>
    <div
      style={{
        color: "black",
        padding: "10px 10px 0px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        flex: "1 1 auto",
      }}
    >
      <Row>
        <Col md={17}>
          <Stack
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                wordBreak: "break-word",
                fontSize: "1rem",
              }}
            >
              {text}
            </Text>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.875rem",
                marginTop: "5px",
              }}
            >
              <small>{subtext}</small>
            </Text>
          </Stack>
        </Col>
        <Col
          md={7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Image src={Star} alt="Star Icon" width={20} height={20} />
          <Text
            style={{
              fontWeight: "bold",
              wordBreak: "break-word",
              fontSize: "1rem",
              marginLeft: "5px",
            }}
          >
            {rating}
          </Text>
        </Col>
      </Row>
    </div>
    <div
      style={{
        color: "black",
        padding: "10px",
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        flex: "0 1 auto",
      }}
    >
      <div>
        <Stack style={{ display: "flex", justifyContent: "flex-start" }}>
          <Text
            style={{
              fontWeight: "bold",
              wordBreak: "break-word",
              fontSize: "1rem",
            }}
          >
            Round Trip
          </Text>
        </Stack>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Tag style={{ backgroundColor: "#DDECFC" }}>
          <Text
            style={{
              fontWeight: "bold",
              wordBreak: "break-word",
              color: "#0770E3",
              padding: "5px",
              fontSize: "15px",
            }}
          >
            ${roundTrip}
          </Text>
        </Tag>
      </div>
    </div>
  </Panel>
);

const PopularTouristspots: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cardData.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Stack className={styles.heading}>
            <h3>
              <span style={{ color: "#0770E3" }}>Popular</span> tourist spots
            </h3>
          </Stack>
          <Stack style={{ margin: "20px 0px" }}>
            <div style={{ padding: "0px 20px" }} onClick={handlePrevious}>
              <Image src={LeftArrowIcon} alt="LeftArrowIcon" />
            </div>
            <div onClick={handleNext}>
              <Image src={RightArrowIcon} alt="RightArrowIcon" />
            </div>
          </Stack>
        </div>

        <Row gutter={16}>
          {cardData.slice(currentIndex, currentIndex + 4).map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                image={card.image}
                text={card.text}
                subtext={card.subtext}
                icon={card.icon}
                roundTrip={card.roundTrip}
                rating={card.rating}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PopularTouristspots;
