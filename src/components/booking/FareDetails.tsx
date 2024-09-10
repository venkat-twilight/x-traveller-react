import React from "react";
import styles from "../../assets/styles/booking.module.css";
import { Panel } from "rsuite";
import Image from "next/image";
import IconsPlus from "../../assets/icons/IconsPlus.svg";

interface FareDetailslistProps {
  title: string;
  value: string;
}

interface FareDetailsProps {
  list: FareDetailslistProps[];
  Total: string;
}

const FareDetailsPanel: React.FC<FareDetailsProps> = ({ list, Total }) => {
  return (
    <Panel
      bordered
      style={{ borderRadius: "14px", border: "1px solid lightgrey",background:"#fff" }}
    >
      <div style={headerStyle}>Fare Details</div>
      <div className={styles.FareList}>
        {list.map((item: any, index: number) => (
          <div key={index} style={rowStyle}>
            <div style={leftStyle}>
              <Image src={IconsPlus} alt="Brand Logo" />
              <span>{item.title} </span>
            </div>
            <div style={rightStyle}>{item.value} </div>
          </div>
        ))}
      </div>
      <div style={rowAmtStyle}>
        <div style={leftAmtStyle}>
          <span>Total Amount</span>
        </div>
        <div style={rightAmtStyle}>{Total}</div>
      </div>
    </Panel>
  );
};

const headerStyle: React.CSSProperties = {
  fontWeight: "bold",
  borderBottom: "1px solid lightgrey",
  backgroundColor: "#f2f4f5",
  borderTopLeftRadius: "14px",
  borderTopRightRadius: "14px",
  fontSize:'16px',
  padding: "10px 15px",
  margin: "-20px -20px 0 -20px", // Removes any extra margin
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4px 0px",
  width: "100%",
  boxSizing: "border-box",
  margin: 0, // Ensure no margin between rows
};

const leftStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flex: 1,
  fontWeight: "400px",
};

const rightStyle: React.CSSProperties = {
  fontWeight: "bold",
  textAlign: "right",
  flexShrink: 0,
};

const leftAmtStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flex: 1,
  fontSize:'16px',
  fontWeight: "bold",
};

const rightAmtStyle: React.CSSProperties = {
  fontWeight: "bold",
  textAlign: "right",
  flexShrink: 0,
  color: "#0770E3",
};

const rowAmtStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 3px 5px",
  width: "100%",
  boxSizing: "border-box",
  margin: 0, // Ensure no margin between rows
  borderTop: "1px solid lightgrey",
};
export default FareDetailsPanel;
