import React from "react";
import { Heading, Row, Col, Grid, Text, Steps } from "rsuite";
import styles from "@/src/app/page.module.css";

const LandingBase: React.FC = () => {
  return (
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
    </div>
  );
};
export default LandingBase;
