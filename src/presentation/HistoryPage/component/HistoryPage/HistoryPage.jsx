import { Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../../../contexts/GlobalContext";
import { getAchievement } from "../../../../utils/apiEndpoints";
import "./HistoryPage.css";
import AchievementsHistory from "../Achievements/Achievements";

const HistoryPage = () => {
  const [achievements, setAchievements] = useState([]);
  const [achievementsTotal, setAchievementsTotal] = useState(0);
  const [distanceTotal, setDistanceTotal] = useState(0);
  const { user } = useContext(GlobalContext);

  const getAchievements = async () => {
    setAchievements([]);
    setAchievementsTotal(0);
    setDistanceTotal(0);
    if (user.user_id) {
      const res = await getAchievement(user.user_id);
      setAchievementsTotal(res.data.length);
      res.data.forEach((r, i) => {
        setDistanceTotal((d) => (d += r.distance));
        setAchievements((a) => [
          ...a,
          {
            icon: r.image_url,
            achievement: r.prey_type,
            date: r.timestamp,
          },
        ]);
      });
    }
  };

  useEffect(() => {
    user.user_id && getAchievements();
  }, [user]);
  return (
    <Stack
      sx={{
        height: "calc(100vh - 176px)",
        maxHeight: "calc(100vh - 176px)",
        marginTop: "88px",
      }}
    >
      {achievements && (
        <>
          <Stack
            direction={"row"}
            justifyContent={"space-evenly"}
            sx={{ padding: "5px" }}
          >
            <Typography variant="h5">Completed:</Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {achievementsTotal}
            </Typography>
            <Typography variant="h5">Distance:</Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {distanceTotal}
            </Typography>
          </Stack>
          {achievements.map((a, i) => (
            <AchievementsHistory props={a} key={`Achievments_${i}`} />
          ))}
        </>
      )}
    </Stack>
  );
};

export default HistoryPage;
