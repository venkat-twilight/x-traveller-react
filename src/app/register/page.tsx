/* eslint-disable @next/next/no-async-client-component */
"use client";

import React from "react";
import styles from "@/src/app/page.module.css";
import { User, UsersResponse } from "@/src/models/users.model";
import AppHeader from "@/src/components/AppHeader";
import AppBanner from "@/src/components/AppBanner";
import AppFooter from "@/src/components/AppFooter";

import Background from "../../assets/images/FooterRightImg.svg";
import RegisterBase from "@/src/components/register/RegisterBase";

async function fetchData() {
  const res = await fetch(`${process.env.API_URL}/api/users?page=2`);
  const data: UsersResponse = await res.json();
  return data.data;
}

export default async function Paymentconfirmation() {
  const data: User[] = await fetchData();

  return (
    <div>
      <AppHeader isLogedin={true} />

      <RegisterBase />
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
