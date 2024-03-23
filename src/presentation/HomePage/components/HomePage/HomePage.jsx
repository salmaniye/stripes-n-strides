import { Stack } from "@mui/material";
import React from "react";

import "./HomePage.css";
import MapHome from "../Map/Map";
import PreyHome from "../Prey/Prey";

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
      <PreyHome />
    </Stack>
  );
};

export default HomePage;
