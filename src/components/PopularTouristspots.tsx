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

const optionFilter = [
  {
    value: "all",
    key: "1",
    name: "All",
  },
  {
    value: "flights",
    key: "2",
    name: "Flights",
  },
  {
    value: "hotels",
    key: "3",
    name: "Hotels",
  },
  {
    value: "Cabs",
    key: "4",
    name: "Cabs",
  },
  {
    value: "bus",
    key: "5",
    name: "Bus",
  },
  {
    value: "train",
    key: "6",
    name: "Train",
  },
];

// const cardData = [
//   {
//     image: TajMahal,
//     text: "Pilgrimage Special: Upto 50% off on stays",
//     subtext: "Valid till 30 Sep 24",
//     tags: ["Flight", "Hotels", "Train", "Cabs"],
//     icon: Calendar,
//   },
//   {
//     image: Maldieves,
//     text: "Book Hotel Royal Park  Starting @upto 20%",
//     subtext: "Limited Period Offer",
//     tags: ["Hotels"],
//     icon: TimerAlert,
//   },
//   {
//     image: EiffelTower,
//     text: "Get 24x7 Live Assistance for int’t Flight Bookings!",
//     subtext: "Valid till 30 Sep 24",
//     tags: ["Flight"],
//     icon: Calendar,
//   },
//   {
//     image: BurjKhalifa,
//     text: "Book Akasa Air Flights Starting @upto 20%",
//     subtext: "Limited Period Offer",
//     tags: ["Flights"],
//     icon: TimerAlert,
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
  tags: string[];
  icon: string;
}

const Card: React.FC<CardProps> = ({ image, text, subtext, tags, icon }) => (
  <Panel
    bordered
    bodyFill
    style={{
      padding: "0",
      textAlign: "center",
      height: "350px",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    <div style={{ flex: "1 1 50%", position: "relative", height: "200px" }}>
      <Image src={image} alt="Card Icon" layout="fill" objectFit="cover" />
    </div>
    <div
      style={{
        color: "black",
        flex: "1 1 50%",
        padding: "10px 88px",
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div >
        <Stack style={{ display: "flex", justifyContent: "flex-start",  }}>
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
        <Image src={Star} alt="Calendar Icon" width={20} height={20} />
        <Text
          style={{
            fontWeight: "bold",
            wordBreak: "break-word",
            fontSize: "1rem",
          }}
        >
          4.4
        </Text>
      </div>
    </div>
    <div
      style={{
        color: "black",
        flex: "1 1 50%",
        padding: "10px",
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
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
                tags={card.tags}
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
