import { Stack } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";

const HomePage = () => {
  const { user } = useContext(GlobalContext);
  return (
    <Stack>From Globalcontext: {user.firstName + " " + user.lastName}</Stack>
  );
};

export default HomePage;
