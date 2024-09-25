/* eslint-disable @next/next/no-async-client-component */
"use client";

import { TButtonProps } from "@/src/models/common.model";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "rsuite";

const TButton: React.FC<TButtonProps> = ({
  label,
  link,
  onClick,
  disabled,
  icon,
  type = "primary",
  padding = "10px 20px",
  block = false, // Default is not full-width
  background = "#1A6AE5",
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (link) {
      router.push(link);
    }
  };

  const buttonStyle = {
    borderRadius: "4px",
    padding: type === "link" ? "0px" : padding,
    cursor: "pointer",
    textDecoration: "none",
    width: block ? "100%" : "auto", // Full-width if block is true
    ...(type === "primary" && {
      background: background,
      border: "none",
      color: background === "white" ? "#0770E3" : "white",
    }),
  };

  return (
    <Button
      appearance={type}
      style={buttonStyle}
      disabled={disabled}
      onClick={link ? handleClick : onClick}
    >
      {label || icon}
    </Button>
  );
};

export default TButton;
