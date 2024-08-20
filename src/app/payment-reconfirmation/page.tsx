/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import styles from "../page.module.css";
import { List, Grid, Row, Col, Heading, Text, Stack } from "rsuite";
import Image from "next/image";
import GearIcon from "@rsuite/icons/Gear";
import Link from "next/link";
import { User, UsersResponse } from "@/src/models/users.model";
import AppHeader from "@/src/components/AppHeader";
import AppBanner from "@/src/components/AppBanner";
import AppFooter from "@/src/components/AppFooter";




export default async function FlightList() {
  

  return (
    <div>
      <AppHeader />
      
      
      <AppFooter />
    
    </div>
  );
}
