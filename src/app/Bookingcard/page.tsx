/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import styles from "../page.module.css";
import { List, Grid, Row, Col, Heading, Text, Stack } from "rsuite";
import AppHeader from "@/src/components/AppHeader";
import AppFooter from "@/src/components/AppFooter";
import FareDetails from "@/src/components/booking-card/FareDetails";
import { FlightInfo } from "@/src/components/Flight-listing-card/FlightListBanner/FlightDetailsPopup";
import FlightListingPage from "@/src/components/Flight-listing-card/FlightListingPage";
import FlightInfoBanner from "@/src/components/booking-card/FlightInfoBanner";
import { User, UsersResponse } from "@/src/models/users.model";

async function fetchData() {
  const res = await fetch(`${process.env.API_URL}/api/users?page=1`);
  const data: UsersResponse = await res.json();
  return data.data;
}

export default async function FlightList() {
  const data: User[] = await fetchData();
  return (
    <div>
      <AppHeader />
      <FlightListingPage />
    
      <FlightInfoBanner/>
      <AppFooter />
    </div>
  );
}
