/* eslint-disable @next/next/no-async-client-component */
"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { Button } from "rsuite";

interface TButtonProps {
  label?: string;
  type?: "primary" | "default" | "link" | "ghost";
  icon?: ReactNode;
  link?: string;
  onClick?: () => void;
  padding?: string;
  block?: boolean; // Add this prop
}

const TButton: React.FC<TButtonProps> = ({
  label,
  link,
  onClick,
  icon,
  type = "primary",
  padding = "10px 20px",
  block = false, // Default is not full-width
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
    padding,
    cursor: "pointer",
    width: block ? "100%" : "auto", // Full-width if block is true
    ...(type === "primary" && {
      background: "linear-gradient(to right, #0087E1 0%, #174495 100%)",
      border: "none",
      color: "white",
    }),
  };

  return (
    <Button
      appearance={type}
      style={buttonStyle}
      onClick={link ? handleClick : onClick}
    >
      {label || icon}
    </Button>
  );
};

export default TButton;
