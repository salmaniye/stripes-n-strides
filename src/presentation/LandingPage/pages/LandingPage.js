import { Stack } from "@mui/material";
import React, { useContext } from "react";

import Header from "../../../common/components/Header/Header.jsx";
import { GlobalContext } from "../../../contexts/GlobalContext";

const LandingPage = () => {
  const { user } = useContext(GlobalContext);
  return (
    <Stack>
      <Header user={user} />
    </Stack>
  );
};

export default LandingPage;
