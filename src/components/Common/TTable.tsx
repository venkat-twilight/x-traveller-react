import React from "react";
import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

interface DataItem {
  [key: string]: string;
}

interface DataTableProps {
  data: DataItem[];
  headers: string[];
}

const TTable: React.FC<DataTableProps> = ({ data, headers }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Table
        data={data}
        autoHeight
        style={{
          borderRadius: "10px",
          transition: "transform 0.3s ease-in-out",
          overflow: "hidden",

          backgroundColor: "#b8b8b8",
        }}
      >
        {headers.map((header, index) => (
          <Column key={index} flexGrow={1} align="center">
            <HeaderCell
              style={{
                backgroundColor: "#D9D9D9",
                borderRadius:
                  index === 0
                    ? "10px 0 0 10px"
                    : index === headers.length - 1
                    ? "0 10px 10px 0"
                    : "0",
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {header}
            </HeaderCell>
            <Cell
              dataKey={header.toLowerCase().replace(/\s+/g, "")}
              style={{
                borderRadius:
                  index === 0
                    ? "10px 0 0 10px"
                    : index === headers.length - 1
                    ? "0 10px 10px 0"
                    : "0",
              }}
            />
          </Column>
        ))}
      </Table>
    </div>
  );
};

export default TTable;
