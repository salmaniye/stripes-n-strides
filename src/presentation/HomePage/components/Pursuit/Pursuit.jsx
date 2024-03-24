import React, { useEffect, useState } from "react";

import "./Pursuit.css";
import { Stack, Typography } from "@mui/material";

const Pursuit = ({ challenge }) => {
  const [timer, setTimer] = useState(0);
  const [displayTime, setDisplayTime] = useState("");

  useEffect(() => {
    const interval = setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);

    setDisplayTime(() => new Date(timer * 1000).toISOString().substr(11, 8));

    return () => {
      clearTimeout(interval);
    };
  }, [timer]);
  return (
    <>
      <iframe
        title="homeMap"
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d4777.160380062042!2d-0.5405743648102554!3d53.225375197321696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d53.2298538!2d-0.537867!4m5!1s0x48785b31d498f06b%3A0x868b6634745dede1!2sIndustrial%20Estate!3m2!1d53.2248218!2d-0.538971!5e0!3m2!1sen!2suk!4v1711250110008!5m2!1sen!2suk"
        id="mapHome"
      ></iframe>
      <Stack
        justifyContent={"center"}
        sx={{ padding: "0.5rem", height: "20vh" }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Typography variant="h3">Challenge</Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#F58220" }}
          >
            {challenge.prey_type}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Typography variant="h3">Distance</Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#F58220" }}
          >
            {challenge.distance}Km
          </Typography>
        </Stack>
        <Typography variant="h2" sx={{ textAlign: "center", color: "green" }}>
          {displayTime}
        </Typography>
      </Stack>
    </>
  );
};

export default Pursuit;
