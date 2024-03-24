import { Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import "./HomePage.css";
import MapHome from "../Map/Map";
import PreyHome from "../Prey/Prey";
import {
  getAchievement,
  getChallenge,
  postAchievement,
} from "../../../../utils/apiEndpoints";
import AchievementsHome from "../Achievements/Achievements";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import Pursuit from "../Pursuit/Pursuit";

const HomePage = () => {
  const [achievements, setAchievements] = useState([]);
  const [showPursuit, setShowPursuit] = useState(false);
  const [challenge, setChallenge] = useState(null);
  const { user } = useContext(GlobalContext);

  const getAchievements = async () => {
    setAchievements([]);
    if (user.user_id) {
      const res = await getAchievement(user.user_id);

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
    }
  };

  const startPursuit = async (id) => {
    const res = await getChallenge(id);
    setChallenge(res.data);
    setShowPursuit(true);
  };

  const endPursuit = async () => {
    await postAchievement(user.user_id, {
      ...challenge,
      plan_id: user.plan_id,
      plan_name: user.plan_name,
    });
    getAchievements();
    setShowPursuit(false);
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
      {showPursuit ? (
        <Pursuit challenge={challenge} endPursuit={endPursuit} />
      ) : (
        <>
          <MapHome />
          <PreyHome startPursuit={startPursuit} />
          {achievements &&
            achievements.map((a, i) => (
              <AchievementsHome props={a} key={`Achievments_${i}`} />
            ))}
        </>
      )}
    </Stack>
  );
};

export default HomePage;
