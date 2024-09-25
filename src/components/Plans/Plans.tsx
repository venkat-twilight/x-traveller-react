import React, { useEffect, useState } from "react";
import { Panel, Button, Grid, Col, Stack, Divider, Row } from "rsuite";
import Image from "next/image";
import flight from "../../assets/images/Flight.svg";
import styles from "../../assets/styles/plan-banner.module.css";
import { Plan } from "@/src/models/plan.model";
import {planDetails} from "../../utils/constant"
const Plans = () => {
  //const [planDetails, setPlanDetails] = useState<Plan[]>([]);

  // useEffect(() => {
  //   const fetchPlans = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3001/plans");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setPlanDetails(data.data);
  //       console.log(data, "data");
  //     } catch (error) {
  //       console.error("Error fetching plan details:", error);
  //     }
  //   };

  //   fetchPlans();
  // }, []);

  const PlanCard = ({
    title,
    priceMonthly,
    priceTotal,
    description,
    features,
  }: Plan) => (
    <Panel
      bordered
      style={{
        padding: 20,
        height: "550px",
        background: "#fff",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        boxShadow: "0px 18.63px 53.13px 0px #00000017",
        borderRadius: "20px",
        width: "410px",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        spacing={10}
      >
        <h3>{title}</h3>
        <h4 style={{ color: "#000", fontWeight: "bold" }}>
          {priceMonthly} Per Month
        </h4>
        <h4 style={{ color: "#000", fontWeight: "bold" }}>
          {priceTotal} Total
        </h4>
        <p>{description}</p>

        <Stack
          direction="column"
          spacing={8}
          alignItems="flex-start"
          style={{ height: "217px", paddingTop: "20px" }}
        >
          {features.map((feature: string, index: number) => (
            <div key={index}>
              <Image src={flight} alt="flight" /> {feature}
            </div>
          ))}
        </Stack>

        <Divider />

        <Button appearance="primary" block style={{ width: "100%" }}>
          Choose Plan
        </Button>
      </Stack>
    </Panel>
  );

  return (
    <div>
      <div
        style={{ textAlign: "center", marginBottom: "40px" }}
        className={styles.header}
      >
        <h1>Choose your Perfect Plan</h1>
        <p style={{ fontSize: "18px", color: "#666" }}>
          Affordable Pricing to elevate your brand
        </p>
      </div>

      <Grid fluid>
        <Row gutter={16}>
          {planDetails.map((plan, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <PlanCard {...plan} />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default Plans;
