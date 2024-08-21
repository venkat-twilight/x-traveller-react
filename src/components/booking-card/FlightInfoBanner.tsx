import React from "react";

import { FlightInfo } from "../Flight-listing-card/FlightListBanner/FlightDetailsPopup";
import FareDetails from "./FareDetails";
import PassengerFlightDetails from "./PassengerFlightDetails";
import { List, Grid, Row, Col, Heading, Text, Stack, Panel } from "rsuite";

// interface HotelCardProps {
//   backdrop: string;
// }

const FlightInfoBanner: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Grid
        style={{
          padding: "40px 0px",
          display: "flex",
          width: "77%",
          margin: "auto ",
        }}
      >
        
      <Row >
        <Col xs={18}>
       <PassengerFlightDetails/>
       </Col>
       <Col xs={5}>
        <FareDetails />
        </Col>
        </Row>
       
      </Grid>
    </div>
  );
};

export default FlightInfoBanner;
