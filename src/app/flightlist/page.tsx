/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import FlightListingPage from "../../components/Flight-listing-card/FlightListSearch";
import FlightBannerCard from "@/src/components/Flight-listing-card/FlightListBanner/FlightListBanner";

export default function FlightList() {
  return (
    <div>
      <FlightListingPage />
      <FlightBannerCard />
    </div>
  );
}
