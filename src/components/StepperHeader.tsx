import React from "react";
import { Grid, Nav, Steps, Row, Col } from "rsuite";

const StepperHeader: React.FC = () => {
  const [step, setStep] = React.useState(0);

  return (
    <Grid
      fluid
      style={{
        background: "linear-gradient(to right, #0770E3, #0087E1, #174495)",
        padding: "0 20px",
        color: "#fff",
      }}
    >
      <Row>
        <Col
          xs={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "77%",
              margin: "0 auto",
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Nav style={{ flex: 3 }}>
              <Steps current={step} className="custom-stepper">
                <Steps.Item title="Flight Details" />
                <Steps.Item title="Add ons" />
                <Steps.Item title="Seat Selection" />
                <Steps.Item title="Share & Confirm" />
              </Steps>
            </Nav>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default StepperHeader;
