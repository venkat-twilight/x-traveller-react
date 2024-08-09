import React from "react";
import {
  Row,
  Col,
  Stack,
  Panel,
  Text,
  TagGroup,
  Tag,
  Button,
  ButtonToolbar,
} from "rsuite";
import Image from "next/image";
import TajMahal from "../assets/images/Tajmahal.svg";
import Maldieves from "../assets/images/Maldieves.svg";
import EiffelTower from "../assets/images/EiffelTower.svg";
import BurjKhalifa from "../assets/images/BurjKhalifa.svg";
import LeftArrowIcon from "../assets/images/LeftArrowGrey.svg";
import RightArrowIcon from "../assets/images/RightArrowIconB.svg";
import styles from "../assets/styles/OfferforYou.module.css";
import Calendar from "../assets/images/Calendar.svg";
import TimerAlert from "../assets/images/TimeRedIcon.svg";
import Star from "../assets/images/Star.svg";

// const optionFilter = [
//   {
//     value: "all",
//     key: "1",
//     name: "All",
//   },
//   {
//     value: "flights",
//     key: "2",
//     name: "Flights",
//   },
//   {
//     value: "hotels",
//     key: "3",
//     name: "Hotels",
//   },
//   {
//     value: "Cabs",
//     key: "4",
//     name: "Cabs",
//   },
//   {
//     value: "bus",
//     key: "5",
//     name: "Bus",
//   },
//   {
//     value: "train",
//     key: "6",
//     name: "Train",
//   },
// ];

const cardData = [
  {
    image: TajMahal,
    text: "TajMahal",
    subtext: "UttarPradesh,India",
    icon: Calendar,
    roundTrip: "Roundtrip",
    rating: 4.4,
  },
  {
    image: Maldieves,
    text: "Maldieves",
    subtext: "SouthAsia",
    icon: TimerAlert,
    roundTrip: "Roundtrip",
    rating: 4.4,
  },
  {
    image: EiffelTower,
    text: "EiffelTower",
    subtext: "France,Paris",
    icon: Calendar,
    roundTrip: "Roundtrip",
    rating: 4.4,
  },
  {
    image: BurjKhalifa,
    text: "BurjKhalifa",
    subtext: "Dubai",
    icon: TimerAlert,
    roundTrip: "Roundtrip",
    rating: 4.4,
  },
];

interface CardProps {
  image: string;
  text: string;
  subtext: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ image, text, subtext, icon }) => (
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
      minWidth: "300px",
      flex: "1 1 300px",
      height: "350px",
    }}
  >
    <div
      style={{
        flex: "1 1 50%",
        position: "relative",
        minHeight: "150px",
        height: "200px",
      }}
    >
      <Image src={image} alt="Card Icon" layout="fill" objectFit="cover" />
    </div>

    <div
      style={{
        color: "black",
        flex: "1 1 50%",
        padding: "10px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
              {text}
            </Text>
          </Stack>
          <Stack
            style={{
              display: "flex",
              marginLeft: "0px",
              marginTop: "5px",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.875rem",
              }}
            >
              <small style={{ marginLeft: "5px" }}>{subtext}</small>
            </Text>
          </Stack>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src={Star} alt="Star Icon" width={20} height={20} />
          <Text
            style={{
              fontWeight: "bold",
              wordBreak: "break-word",
              fontSize: "1rem",
              marginLeft: "5px",
            }}
          >
            4.4
          </Text>
        </div>
      </div>
    </div>
    <div
      style={{
        color: "black",
        flex: "1 1 auto",
        padding: "10px",
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div>
        <Stack
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "10px",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              wordBreak: "break-word",
              fontSize: "1rem",
            }}
          >
            RoundTrip
          </Text>
        </Stack>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Tag style={{ backgroundColor: "#DDECFC" }}>
          <Text style={{ fontWeight: "bold", wordBreak: "break-word" }}>
            $ 130
          </Text>
        </Tag>
      </div>
    </div>
  </Panel>
);

const PopularTouristspots: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");
  return (
    <div style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Stack className={styles.heading}>
            <h3>
              <span style={{ color: "blue" }}>Popular</span> Tourist Spots
            </h3>
          </Stack>
          <Stack style={{ margin: "20px 0px" }}>
            <div style={{ padding: "0px 20px" }}>
              <Image src={LeftArrowIcon} alt="LeftArrowIcon" />
            </div>
            <div>
              {" "}
              <Image src={RightArrowIcon} alt="RightArrowIcon" />
            </div>
          </Stack>
        </div>

        <Row gutter={16}>
          {cardData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                image={card.image}
                text={card.text}
                subtext={card.subtext}
                icon={card.icon}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PopularTouristspots;
