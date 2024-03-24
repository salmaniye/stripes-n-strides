import React, { useContext, useEffect, useState } from "react";

import "./Hungar.css";
import { Stack, Box } from "@mui/material";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import { getHungar } from "../../../../utils/apiEndpoints";

const Hungar = () => {
  const [hungerTotal, setHungerTotal] = useState(0);
  const { user } = useContext(GlobalContext);

  const hungar = async () => {
    const res = await getHungar(user.user_id, user.plan_id);
    setHungerTotal(res.percentage);
  };

  useEffect(() => {
    user.user_id && hungar();
  }, [user]);

  return (
    <Box>
      <Stack alignItems={"end"} id="hungarFull">
        Full
      </Stack>
      <Stack
        alignItems={"Start"}
        id="hungarBar"
        sx={{ width: `${hungerTotal}%` }}
      >
        Hungar
      </Stack>
    </Box>
  );
};

export default Hungar;
