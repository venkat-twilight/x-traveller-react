"use client";

import React from "react";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import styles from "@/src/app/page.module.css";
import Background from "@/src/assets/images/FooterRightImg.svg";
import { useEffect } from "react";
import { HOME } from "../utils/constant";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ClientAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/");
    }
  }, [auth]);

  return (
    <>
      <AppHeader />
      {children}
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
    </>
  );
};

export default ClientAuth;
