import React from "react";

import "./Prey.css";
import { Box } from "@mui/system";
import { Link } from "@mui/material";

const PreyHome = () => {
  const preyClick = () => {
    console.log("prey");
  };

  return (
    <Box id="preyContainer">
      <Link component="button" onClick={preyClick} className="preyLink">
        <embed
          src="/prey/rabbit.svg"
          className="preyImg"
          id="preyRabbit"
        ></embed>
      </Link>
      <Link component="button" onClick={preyClick} className="preyLink">
        <embed
          src="/prey/buffalo.svg"
          className="preyImg"
          id="preyBuffalo"
        ></embed>
      </Link>
      <Link component="button" onClick={preyClick} className="preyLink">
        <embed
          src="/prey/elephant.svg"
          className="preyImg"
          id="preyElephant"
        ></embed>
      </Link>
      <Link component="button" onClick={preyClick} className="preyLink">
        <embed
          src="/prey/gazelle.svg"
          className="preyImg"
          id="preyGazelle"
        ></embed>
      </Link>
      <Link component="button" onClick={preyClick} className="preyLink">
        <embed src="/prey/zebra.svg" className="preyImg" id="preyZebra"></embed>
      </Link>
      <embed
        src="/images/tiger-face-svgrepo-com.svg"
        className="preyImg"
        id="preyUser"
      ></embed>
    </Box>
  );
};

export default PreyHome;
