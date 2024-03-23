import { Stack } from "@mui/material";
import React from "react";

import "./HomePage.css";
import MapHome from "../Map/Map";

const HomePage = ({ reference }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "coral",
        height: "calc(100vh - 176px)",
        maxHeight: "calc(100vh - 176px)",
        marginTop: "88px",
      }}
    >
      <MapHome />
    </Stack>
  );
};

export default HomePage;
