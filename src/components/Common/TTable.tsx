import Image from "next/image";
import React from "react";

interface DataItem {
  [key: string]: string;
}

interface DataTableProps {
  data: DataItem[];
  headers: string[];
  icons?: { [key: string]: string };
}

const TTable: React.FC<DataTableProps> = ({ data, headers, icons }) => {
  return (
    <div
      style={{ marginTop: "20px", borderRadius: "10px", overflow: "hidden" }}
    >
      {/* Header Row */}
      <div
        style={{
          display: "flex",
          backgroundColor: "#f7f7f7",
          borderBottom: "2px solid #e5e5e5",

          fontWeight: "bold",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        {headers.map((header, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              textAlign: "center",

              padding: "10px",
            }}
          >
            {header}
          </div>
        ))}
      </div>

      {/* Data Rows */}
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            border: "1px solid #e5e5e5",
            borderRadius: rowIndex === 0 ? "10px " : "0",
            marginBottom: "5px",
          }}
        >
          {headers.map((header, colIndex) => (
            <div
              key={colIndex}
              style={{
                flex: 1,
                textAlign: "center",
                padding: "10px",
                borderRadius: rowIndex === 0 ? "10px" : "0",
                borderBottom: "none",
              }}
            >
              {icons && icons[header] && (
                <Image
                  src={icons[header]}
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                    verticalAlign: "middle",
                  }}
                />
              )}
              {row[header.toLowerCase().replace(/\s+/g, "")]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TTable;
