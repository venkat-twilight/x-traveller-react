import Link from "next/link";
import React from "react";
import { Button } from "rsuite";

interface TButtonProps {
  label: string; // Fixed the typo from `lable` to `label`
  link?: string; // Marked `link` as optional
  onClick?: () => void; // Marked `onClick` as optional
}

const TButton: React.FC<TButtonProps> = ({ label, link, onClick }) => {
  const buttonContent = (
    <Button
      appearance="primary"
      style={{
        background: "linear-gradient(to right, #0087E1 0%, #174495 100%)",
        border: "none",
        borderRadius: "4px",
        color: "white",
        padding: "10px 20px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );

  return (
    <div>
      {link ? (
        <Link href={link} passHref>
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      )}
    </div>
  );
};

export default TButton;
