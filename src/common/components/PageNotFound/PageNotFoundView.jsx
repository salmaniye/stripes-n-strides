import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFoundView.css";

const PageNotFoundView = () => {

  return (
    <Stack id="pnf_stack" alignItems={"center"} justifyContent={"center"}>
        <Typography id="pnf_h3" variant="h3">
        404 - PAGE NOT FOUND
        </Typography>
        <Typography id="pnf_h6" variant="h6">
        The page you are looking for cannot be found.
        </Typography>
        <Button variant="contained" color="secondary" id="pnf_btn" component={Link} to="/">
        HomePage
        </Button>
    </Stack>
  );
};

export default PageNotFoundView;
