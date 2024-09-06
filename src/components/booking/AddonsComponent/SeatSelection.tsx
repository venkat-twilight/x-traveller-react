import React, { useState } from "react";
import Image from "next/image";
import Flightimg from "../../../assets/images/FlightImagee.svg";

interface Seat {
  row: number;
  column: string;
  type: string;
  available: boolean;
}

const seatData = {
  aircraftType: "A320",
  rows: 29,
  columns: 6,
  seats: [
    { row: 1, column: "A", type: "Economy", available: true },
    { row: 1, column: "B", type: "Economy", available: false },
    { row: 1, column: "C", type: "Economy", available: true },
    { row: 1, column: "D", type: "Economy", available: true },
    { row: 1, column: "E", type: "Economy", available: false },
    { row: 1, column: "F", type: "Economy", available: true },
    { row: 2, column: "A", type: "Economy", available: true },
    { row: 2, column: "B", type: "Economy", available: true },
    { row: 2, column: "C", type: "Economy", available: true },
    { row: 2, column: "D", type: "Economy", available: true },
    { row: 2, column: "E", type: "Economy", available: true },
    { row: 2, column: "F", type: "Economy", available: true },
    { row: 3, column: "A", type: "Economy", available: true },
    { row: 3, column: "B", type: "Economy", available: true },
    { row: 3, column: "C", type: "Economy", available: true },
    { row: 3, column: "D", type: "Economy", available: true },
    { row: 3, column: "E", type: "Economy", available: true },
    { row: 3, column: "F", type: "Economy", available: true },
    { row: 4, column: "A", type: "Economy", available: true },
    { row: 4, column: "B", type: "Economy", available: true },
    { row: 4, column: "C", type: "Economy", available: true },
    { row: 4, column: "D", type: "Economy", available: true },
    { row: 4, column: "E", type: "Economy", available: true },
    { row: 4, column: "F", type: "Economy", available: true },
    // ... add more seat data as needed
  ] as Seat[],
};

const FlightSeatSelection: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const handleSeatClick = (seat: Seat) => {
    if (!seat.available) return;

    const isSelected = selectedSeats.find(
      (s) => s.row === seat.row && s.column === seat.column
    );

    if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter(
          (s) => !(s.row === seat.row && s.column === seat.column)
        )
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const renderSeats = () => {
    const seatMap = [];
    for (let row = 1; row <= seatData.rows; row++) {
      const rowSeats = [];
      for (let col = 0; col < seatData.columns; col++) {
        const column = String.fromCharCode(65 + col);
        const seat = seatData.seats.find(
          (s) => s.row === row && s.column === column
        );

        const getSeatStyle = (seat: Seat | undefined, column: string) => {
          const baseStyle = {
            width: "32px",
            height: "25px",
            backgroundColor: seat?.available ? "#8BC34A" : "#F44336",
            border: "2px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: seat?.available ? "pointer" : "not-allowed",
            margin: "2px",
            transition: "background-color 0.3s",
          };

          const selectedStyle = selectedSeats.find(
            (s) => s.row === row && s.column === column
          )
            ? { backgroundColor: "#FF9800" }
            : {};

          const marginRightStyle =
            column === "C" ? { marginRight: "20px" } : {};

          return { ...baseStyle, ...selectedStyle, ...marginRightStyle };
        };

        rowSeats.push(
          <div
            key={`${row}-${column}`}
            style={getSeatStyle(seat, column)}
            onClick={() => seat && handleSeatClick(seat)}
            title={`Seat ${column}${row}, Fare: $450`}
          >
            {column}
            {row}
          </div>
        );
      }
      seatMap.push(
        <div
          key={row}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          {rowSeats}
        </div>
      );
    }
    return seatMap;
  };

  return (
    <div
      style={{ background: "aliceblue", padding: "20px", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 2,
        }}
      >
        <h3>Selected Seats:</h3>
        <ul style={{ listStyle: "none", padding: "20px 0px 0px" }}>
          {selectedSeats.map((seat, index) => (
            <li key={index}>
              {index + 1}. Adult {seat.column}
              {seat.row}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 2,
        }}
      >
        <h4>Legend:</h4>
        <div style={{ marginBottom: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px 0px 0px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#8BC34A",
                marginRight: "10px",
              }}
            ></div>
            <span>Available Seat</span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#FF9800",
                marginRight: "10px",
              }}
            ></div>
            <span>Selected Seat</span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#F44336",
                marginRight: "10px",
              }}
            ></div>
            <span>Booked Seat</span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "350px",
          height: "1600px",
          position: "relative",
          left: "50px",
          top: "20px",
        }}
      >
        <Image src={Flightimg} alt="FlightImage" />
      </div>
      <div
        style={{
          width: "291px",
          position: "absolute",
          top: "250px",
          left: "375px",
          borderRadius: "50px",
          backgroundColor: "#fff",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            overflowY: "auto",
            width: "80%",
          }}
        >
          {renderSeats()}
        </div>
      </div>
      {/* <div
        style={{
          position: "absolute",
          top: "350px",
          left: "970px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h4>Legend:</h4>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#8BC34A",
                marginRight: "10px",
              }}
            ></div>
            <span>Available Seat</span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#FF9800",
                marginRight: "10px",
              }}
            ></div>
            <span>Selected Seat</span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#F44336",
                marginRight: "10px",
              }}
            ></div>
            <span>Booked Seat</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FlightSeatSelection;
