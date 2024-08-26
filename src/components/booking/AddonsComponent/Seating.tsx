import React from "react";
import { Text } from "rsuite";
import FlightLayout from "../../../assets/images/FlightLayout.svg";
import Image from "next/image";
import styles from "../../../assets/styles/app-banner.module.css";

const SeatingList: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          padding: "10px",
          background: "#efefef",
        }}
      >
        <div>
          <div>
            Bangalore <span>&rarr;</span> Delhi
          </div>
          <span> --</span>
        </div>
        <div>
          {" "}
          <div>
            <Text weight="semibold">₹350</Text>
          </div>
          <span>Added to fare</span>
        </div>
      </div>
      <div
        style={{
          backgroundSize: "cover",
          //   backgroundPosition: "center",
          backgroundColor: "#F6F6FB",
          backgroundImage: `url(${FlightLayout.src})`,
          width: "100%",
          height: "100vh  ",
        }}
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <Text weight="semibold">Seating List</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeatingList;
