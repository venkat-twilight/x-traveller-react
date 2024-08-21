import React from "react";
import { List, Grid, Row, Col, Heading, Text, Stack, Panel } from "rsuite";
import FareDetails from "@/src/components/booking-card/FareDetails";
import { FlightInfo } from "@/src/components/Flight-listing-card/FlightListBanner/FlightDetailsPopup";
import FlightListingPage from "@/src/components/Flight-listing-card/FlightListingPage";
import styles from "../../assets/styles/app-footer.module.css";

export default function PaymentBase() {
  return (
    <Grid
      style={{
        padding: "20px 0px",
      }}
    >
      <Row className="show-grid">
        <Col xs={18}>
          <Panel
            className={styles.panel}
            style={{
              textWrap: "wrap",
              border: "1px solid lightgrey",
              lineHeight: "2",
              marginLeft: "-20px",
            }}
          >
            <FlightInfo />
          </Panel>
        </Col>
        <Col xs={6}>
          <FareDetails />
        </Col>
      </Row>
    </Grid>
  );
}
