import React from "react";

import { Stack, Typography } from "@mui/material";
import "./Achievements.css";

const AchievementsHome = ({ props, key }) => {
  const { icon, achievement, date } = props;
  console.log(props);
  return (
    <Stack
      key={key}
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      className="AchContainer"
    >
      <embed src={icon} className="AchImg"></embed>
      <Typography>{achievement}</Typography>
      <Typography>{date}</Typography>
    </Stack>
  );
};

export default AchievementsHome;
