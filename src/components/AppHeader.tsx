"use client";
import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  IconButtonProps,
  InputGroup,
  Input,
  Avatar,
} from "rsuite";
import Image from "next/image";
import IconButton from "rsuite/IconButton";
import MoreIcon from "../assets/images/Trippledot.svg";
import Logo from "../assets/images/Logo.svg";
import styles from "../assets/styles/home.module.css";
import Profile from "../assets/images/Profile.svg";
import PageIcon from "@rsuite/icons/Page";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import DetailIcon from "@rsuite/icons/Detail";
import FileDownloadIcon from "@rsuite/icons/FileDownload";
import Login from "./Login";
import TButton from "./Common/TButton";
import { TagGroup, Tag } from "rsuite";

interface AppHeaderProps {
  isLogedin: boolean;
}

// Define Password component
const Password = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <InputGroup inside ref={ref} {...props}>
      <Input type={visible ? "text" : "password"} />
    </InputGroup>
  );
});

// Assign displayName to Password component to avoid the ESLint warning
Password.displayName = "PasswordInput";

// Render icon button for the dropdown
const renderIconButton = (
  props: IconButtonProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  return (
    <IconButton
      {...props}
      ref={ref}
      icon={<Image src={MoreIcon} alt="More" />}
      circle
      style={{ marginLeft: "15px", width: "100%" }}
    />
  );
};

const loginMenu = [
  {
    label: "Get Started",
    eventKey: "getstarted",
  },
  { eventKey: "Sub users", label: "subusers" },

  {
    label: "Careers",
    eventKey: "careers",
  },
  {
    label: "Contact us",
    eventKey: "contactus",
  },
];

const AppHeader: React.FC<AppHeaderProps> = ({ isLogedin }) => {
  const [open, setOpen] = useState(false); // State to control modal visibility

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar id="mmain">
        <div className={styles.navbar_container}>
          <Nav style={{ flex: 1, cursor: "pointer" }}>
            <a href="/home">
              <Image src={Logo} alt="Logo" />
            </a>
          </Nav>
          {!isLogedin && (
            <Nav style={{ cursor: "pointer" }}>
              {loginMenu.map((item) => (
                <Nav.Item key={item.eventKey} eventKey={item.eventKey}>
                  {item.label}
                </Nav.Item>
              ))}
            </Nav>
          )}

          {!isLogedin ? (
            <Nav
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <TButton label="Login" type="primary" onClick={handleModalOpen} />
            </Nav>
          ) : (
            <>
              <Nav style={{ flex: 1, cursor: "pointer" }}>
                <Nav.Item eventKey="1">Dashboard</Nav.Item>
                <Nav.Item eventKey="2">MyBookings</Nav.Item>
                <Nav.Item eventKey="3">Accounts</Nav.Item>
                <Nav.Item eventKey="4">Recharge</Nav.Item>
                <Nav.Item eventKey="5">Sales</Nav.Item>
              </Nav>
              <Nav style={{ cursor: "pointer", marginRight: "10px" }}>
                <Tag size="lg" color="blue">
                  MyBalance : $45000
                </Tag>
              </Nav>
              <Nav>
                <div
                  className={styles.user_section}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <Avatar src={Profile.src} circle />
                  <span style={{ marginLeft: "10px" }}>Johnson</span>
                  <div id="icon-dropdown">
                    <Dropdown
                      renderToggle={renderIconButton}
                      placement="bottomEnd"
                    >
                      {/* <Dropdown.Item icon={<PageIcon />}>
                        Dashboard
                      </Dropdown.Item>
                      <Dropdown.Item icon={<FolderFillIcon />}>
                        My Bookings
                      </Dropdown.Item>
                      <Dropdown.Item icon={<FileDownloadIcon />}>
                        Accounts
                      </Dropdown.Item>
                      <Dropdown.Item icon={<DetailIcon />}>
                        Recharge
                      </Dropdown.Item>
                      <Dropdown.Item icon={<DetailIcon />}>Sales</Dropdown.Item> */}
                      <Dropdown.Item icon={<DetailIcon />}>
                        My profile
                      </Dropdown.Item>
                      <Dropdown.Item icon={<DetailIcon />}>
                        <TButton label="Log out" type="link" link="/" />
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </Nav>
            </>
          )}
        </div>
      </Navbar>
      {/* Modal Component */}
      <Login open={open} onClose={handleModalClose} />
    </>
  );
};

export default AppHeader;
