/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import AppHeader from "@/src/components/AppHeader";
import AppFooter from "@/src/components/AppFooter";
import FlightListingPage from "@/src/components/Flight-listing-card/FlightListingPage";
import { User, UsersResponse } from "@/src/models/users.model";
import BookingBase from "../../components/booking/BookingBase";
import styles from "../page.module.css";
import Background from "../../assets/images/FooterRightImg.svg";

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
      <BookingBase />
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
      </div>
    </div>
  );
}
