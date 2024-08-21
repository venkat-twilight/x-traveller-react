import React from "react";
import { Navbar, Nav, Button, Container, Content } from "rsuite";
import Image from "next/image";
import Logo from "../assets/images/Logo.svg";
import CogIcon from "@rsuite/icons/legacy/Cog";
import styles from "../assets/styles/home.module.css";

const AppHeader = () => {
  return (
    <Navbar id="mmain">
      <div className={styles.navbar_container}>
        <Nav style={{ flex: 1, cursor: "pointer" }}>
          <a href="/home">
            <Image src={Logo} alt="Logo" />
          </a>
        </Nav>
        <Nav style={{ cursor: "pointer" }}>
          <Button appearance="ghost">Create Account/Login</Button>
        </Nav>
      </div>
    </Navbar>
  );
};

export default AppHeader;
