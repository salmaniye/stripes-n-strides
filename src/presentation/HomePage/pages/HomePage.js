import { Stack } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import Footer from "../../../common/components/Footer/Footer";

const HomePage = () => {
  const { user } = useContext(GlobalContext);
  return (
    <Stack>
      From Globalcontext: {user.firstName + " " + user.lastName}
      <Footer />
    </Stack>
  );
};

export default HomePage;
