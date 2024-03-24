import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

import "./HomePage.css";
import MapHome from "../Map/Map";
import PreyHome from "../Prey/Prey";
import { getAchievement } from "../../../../utils/apiEndpoints";
import AchievementsHome from "../Achievements/Achievements";

const HomePage = () => {
  const [achievements, setAchievements] = useState([]);
  const getAchievements = async () => {
    const res = await getAchievement(1);

    res.data.forEach((r, i) => {
      if (i < 3) {
        setAchievements((a) => [
          ...a,
          {
            icon: r.image_url,
            achievement: r.prey_type,
            date: r.timestamp,
          },
        ]);
      }
    });
  };

  useEffect(() => {
    getAchievements();
  }, []);
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
      {achievements &&
        achievements.map((a, i) => (
          <AchievementsHome props={a} key={`Achievments_${i}`} />
        ))}
    </Stack>
  );
};

export default HomePage;
