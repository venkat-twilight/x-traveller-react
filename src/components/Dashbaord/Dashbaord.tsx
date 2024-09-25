import React from "react";
import { AutoComplete, Grid, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
  "Louisa",
  "Lester",
  "Lola",
  "Lydia",
  "Hal",
  "Hannah",
  "Harriet",
  "Hattie",
  "Hazel",
  "Hilda",
];

const Dashbaord: React.FC = () => {
  return (
    <Grid
      fluid
      style={{
        background: "linear-gradient(to right,  #0770E3 ,#0087E1,#174495)",
      }}
    >
      {" "}
      <InputGroup inside style={{ width: 300 }}>
        <AutoComplete data={data} />
        <InputGroup.Button tabIndex={-1}>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      <div>Dashbaord</div>
    </Grid>
  );
};

export default Dashbaord;
