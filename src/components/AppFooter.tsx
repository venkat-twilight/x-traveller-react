import React from "react";
import {
  Container,
  Row,
  Col,
  Panel,
  Button,
  IconButton,
  ButtonToolbar,
} from "rsuite";
import styles from "../assets/styles/app-footer.module.css"; // Update the path as needed
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import Twitter from "../assets/images/Twitter.svg";
import Linkedin from "../assets/images/LinkedIn.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row
          style={{
            boxSizing: "border-box",
          }}
        >
          {/* Newsletter Column */}
          <Col  xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={7}>
            <Panel
              className={styles.panel}
              style={{ textWrap: "wrap", lineHeight: "2",marginLeft:"-20px" }}
            >
              <h5>Newsletter</h5>
              <p style={{padding:"18px 0px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div style={{ display: "flex", width: "100%" }}>
                <input
                  type="text"
                  placeholder="Type something"
                  style={{
                    flex: 1,
                    borderRadius: "0",
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                    border: "none",
                    paddingLeft: "10px",
                  }}
                />
                <Button
                  style={{
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                    background:
                      "linear-gradient(to right, #0087E1 0%, #174495 100%)",
                    border: "none",
                    borderRadius: "0px 4px 4px 0px",
                    color: "white",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </Panel>
          </Col>

          {/* Our Product Column */}
          <Col   xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={5}>
            <Panel className={styles.panel}>
              <h5>Our Products</h5>
              <ul style={{ listStyleType: "none", lineHeight: "2",padding:"5px" }}>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>Domestic Hotel</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>International Hotel</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>Domestic Flights</span>
                  </a>
                </li>
              </ul>
              <h5>Travel Essentials</h5>
              <ul style={{ listStyleType: "none", lineHeight: "2",padding:"5px" }}>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>PNR Status</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>Offers</span>
                  </a>
                </li>
              </ul>
            </Panel>
          </Col>

          {/* More Links Column */}
          <Col   xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={5}>
            <Panel className={styles.panel}>
              <h5>More Links</h5>
              <ul style={{ listStyleType: "none", lineHeight: "2" }}>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>Cheap Flight</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>Hotels Near Me</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>My Booking</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>Cancellation</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>My Account</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>Wallet</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span>Advertise with Us</span>
                  </a>
                </li>
              </ul>
            </Panel>
          </Col>

          {/* Contact Us Column */}

          <Col   xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={7}>
            <Panel className={styles.panel}>
              <h5>Contact Us</h5>
              <div className={styles.socialMedia}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <Image src={Facebook} alt="Facebook" />
                </a>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <Image src={Instagram} alt="Instagram" />
                </a>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <Image src={Twitter} alt="Twitter" />
                </a>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <Image src={Linkedin} alt="Linkedin" />
                </a>
              </div>
            </Panel>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
