import { Stack } from "@mui/material";
import React, { useContext } from "react";

import { GlobalContext } from "../../../contexts/GlobalContext";

const LandingPage = () => {
  const { user } = useContext(GlobalContext);
  return (
    <>
      <Stack>landing page</Stack>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
