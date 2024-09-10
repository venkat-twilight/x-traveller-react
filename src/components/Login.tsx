"use client";
import React, { useState, ForwardedRef } from "react";
import {
  Container,
  Content,
  Form,
  Button,
  Panel,
  InputGroup,
  Input,
  Stack,
  VStack,
  Divider,
  Modal,
} from "rsuite";
import Image from "next/image";
import Background from "../assets/images/LoginImage.svg";
import Logo from "../assets/images/Logo.svg";
import Google from "../assets/icons/Google.svg";
import Fb from "../assets/icons/Fb.svg";
import VisibleIcon from "../assets/icons/VisibleIcon.svg";
import InVisibleIcon from "../assets/icons/InVisibleIcon.svg";
import styles from "../assets/styles/login.module.css";
import TButton from "./Common/TButton";

// Define the PasswordProps type
interface PasswordProps {
  ref?: ForwardedRef<HTMLDivElement>;
  [key: string]: any;
}
interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}
// Password component with displayName
const Password = React.forwardRef<HTMLDivElement, PasswordProps>(
  (props, ref) => {
    const [visible, setVisible] = React.useState<boolean>(false);

    const handleChange = () => {
      setVisible(!visible);
    };

    return (
      <InputGroup inside ref={ref} {...props}>
        <Input type={visible ? "text" : "password"} />
        <InputGroup.Button onClick={handleChange}>
          {visible ? (
            <Image src={VisibleIcon} alt="VisibleIcon" />
          ) : (
            <Image src={InVisibleIcon} alt="VisibleIcon" />
          )}
        </InputGroup.Button>
      </InputGroup>
    );
  }
);

// Assign displayName to Password component
Password.displayName = "Password";

// Define the Login component
const Login: React.FC<LoginModalProps> = ({ open, onClose }) => {
  // const [open, setOpen] = useState(true); // Control the modal visibility

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal
        open={open}
        onClose={onClose}
        size="lg"
        id="login-dialog"
        className={styles.panel}
      >
        <Modal.Body>
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: 1,
                position: "relative",
                height: "500px",
                backgroundImage: `url(${Background.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <Image
                src={Background}
                alt="Login Image"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Content>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  style={{ height: "100%" }}
                >
                  <Panel style={{ width: 400, height: 500 }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Image src={Logo} alt="Login Image" />
                    </div>
                    <h4>
                      <span style={{ color: "#0770E3", paddingBottom: "5px" }}>
                        Sign
                      </span>{" "}
                      In
                    </h4>

                    <Form fluid>
                      <Form.Group>
                        <Form.ControlLabel style={{ fontSize: "16px" }}>
                          <strong>Enter your Email address</strong>
                        </Form.ControlLabel>
                        <Form.Control name="email" />
                      </Form.Group>
                      <Form.Group>
                        <Form.ControlLabel style={{ fontSize: "16px" }}>
                          <strong>Enter your Password</strong>
                        </Form.ControlLabel>
                        <Form.Control
                          name="password"
                          autoComplete="off"
                          accepter={Password}
                        />
                      </Form.Group>

                      <VStack spacing={5}>
                        <TButton
                          label="Sign in"
                          type="primary"
                          padding="10px 0"
                          block={true}
                          link="/home"
                        />
                        <div>
                          <a href="#" style={{ textDecoration: "none" }}>
                            Forgot password?
                          </a>
                          <div
                            style={{ textAlign: "center", marginTop: "10px" }}
                          >
                            <span>Don’t have an account? </span>
                            <a
                              href="/signup"
                              style={{
                                color: "#0770E3",
                                textDecoration: "none",
                              }}
                            >
                              Sign up
                            </a>
                          </div>
                        </div>
                      </VStack>
                    </Form>
                  </Panel>
                </Stack>
              </Content>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Login;
