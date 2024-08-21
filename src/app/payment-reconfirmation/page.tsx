/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import styles from "../page.module.css";
import { List, Grid, Row, Col, Heading, Text, Stack } from "rsuite";
import AppHeader from "@/src/components/AppHeader";
import AppFooter from "@/src/components/AppFooter";
import FareDetails from "@/src/components/Payment-component/FareDetails";
import { FlightInfo } from "@/src/components/Flight-listing-card/FlightListBanner/FlightDetailsPopup";
import FlightListingPage from "@/src/components/Flight-listing-card/FlightListingPage";

export default async function FlightList() {
  return (
    <div>
      <AppHeader />
      <FlightListingPage />
      <Grid>
        <Row className="show-grid">
          <Col xs={18}>
            <FlightInfo />
          </Col>
          <Col xs={6}>
            <FareDetails />
          </Col>
        </Row>
      </Grid>
      <AppFooter />
    </div>
  );
}
