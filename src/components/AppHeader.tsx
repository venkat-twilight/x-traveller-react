"use client";
import React, { useRef, useState } from "react";
import { Navbar, Nav, Dropdown, Avatar, Tag } from "rsuite";
import Image from "next/image";
import IconButton from "rsuite/IconButton";
import MoreIcon from "../assets/images/Trippledot.svg";
import Logo from "../assets/images/Logos.svg";
import styles from "../assets/styles/home.module.css";
import { handleLogout } from "../serves/login.api";
import DetailIcon from "@rsuite/icons/Detail";
import Login from "./Login";
import TButton from "./Common/TButton";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // Correct import for Next.js router
import { HOME } from "../utils/constant";

const renderIconButton = (props: any, ref: React.Ref<HTMLButtonElement>) => {
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
  { label: "Get Started", eventKey: "getstarted" },
  { eventKey: "subusers", label: "Sub users" },
  { label: "Careers", eventKey: "careers" },
  { label: "Contact us", eventKey: "contactus" },
];

const AppHeader: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loginRef = useRef<any>(null); // Create a ref for Login component
  const user = useSelector((state: any) => state.auth.data?.user_data);
  const isLogedin = useSelector((state: any) => state.auth.isAuthenticated);
  const authToken: string | null = useSelector(
    (state: any) => state.auth.token
  );

 
  const handleLogOut = () => {
   handleLogout(dispatch, authToken); // Call handleLogout with dispatch
  };

  return (
    <>
      <Navbar id="mmain">
        <div className={styles.navbar_container}>
          <Nav style={{ flex: 1, cursor: "pointer" }}>
            <a href={HOME}>
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
              <TButton
                label="Login"
                type="primary"
                onClick={() => {
                  loginRef.current.openModal();
                }}
              />
            </Nav>
          ) : (
            <>
              <Nav style={{ cursor: "pointer", marginRight: "10px" }}>
                <Tag size="lg" color="blue">
                  MyBalance : {user.balance ? user.balance : "$45000"}
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
                  <Avatar src={user.Profile ? user.Profile : null} circle />
                  <span style={{ marginLeft: "10px" }}>
                    {user ? user.first_name + " " + user.last_name : "Guest"}
                  </span>
                  <div id="icon-dropdown">
                    <Dropdown
                      renderToggle={renderIconButton}
                      placement="bottomEnd"
                    >
                      <Dropdown.Item icon={<DetailIcon />}>
                        My profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        icon={<DetailIcon />}
                        onClick={handleLogOut}
                      >
                        Log out
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </Nav>
            </>
          )}
        </div>
      </Navbar>

      <Login ref={loginRef} />
    </>
  );
};

export default AppHeader;
