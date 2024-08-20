import React from "react";
import Image from "next/image";
import Background from "../assets/images/BackgroundImage.svg";
import { Text, Stack } from "rsuite";
import styles from "../assets/styles/app-banner.module.css";
import HomeCard from "./HomeCard";
import OffersforYou from "./OffersforYou";
import PopularTouristspots from "./PopularTouristspots";
import AppFooter from "./AppFooter";

export default function AppBanner() {
  return (
    <div>
      <div
        className={styles.bannerContainer}
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <div className={styles.centeredTextContainer}>
          <Stack className={styles.centeredStack}>
            <h3 className={styles.heading}>
              The world is a{" "}
              <span className={styles.italicText}>canvas</span>{" "}
              to the imagination.
            </h3>
          </Stack>
          <Stack className={styles.subTextStack}>
            <Text className={styles.subText}>
              we&apos;ve got you covered. Our easy-to-use platform allows you to
              seamlessly book flights, accommodations, and activities,
              ensuring a hassle-free travel experience from start to finish.
            </Text>
          </Stack>
          <div style={{width:"100%"}}>
            <HomeCard />
          </div>
        </div>
      </div>
      <div  style={{margin:"auto",width:"67%"}}>
        <div >
          <OffersforYou />
         
        </div>
      </div>
      <div className={styles.centeredCard}>
      <div className={styles.centeredpopCard}>
      <PopularTouristspots />
      </div>
      </div>
    </div>
  );
}
