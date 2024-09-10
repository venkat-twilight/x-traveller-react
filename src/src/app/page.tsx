import { Heading, Row, Col, Grid, Text, Steps } from "rsuite";
import React from "react";
import Image from "next/image";
import styles from "@/src/app/page.module.css";
import RootLayout from "./layout";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import LandingBase from "../components/landingPage/LandingBase";
import Background from "@/src/assets/images/FooterRightImg.svg";

export default function Main() {
  return (
    <RootLayout>
      <AppHeader isLogedin={false} />
      <LandingBase />
      <div
        className={styles.appFooter}
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <AppFooter />
      </div>{" "}
    </RootLayout>
  );
}

const rowStyle: React.CSSProperties = {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  gap: "10px",
};
