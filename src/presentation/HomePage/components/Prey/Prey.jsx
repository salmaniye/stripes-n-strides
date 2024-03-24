import React from "react";

import "./Prey.css";
import { Box } from "@mui/system";
import { Link } from "@mui/material";

const PreyHome = ({ startPursuit, preyIcon }) => {
  const preyClick = (prey) => {
    startPursuit(prey);
  };

  return (
    <Box id="preyContainer">
      {!preyIcon && (
        <>
          <Link
            component="button"
            onClick={() => preyClick(1)}
            className="preyLink"
          >
            <img
              src="/prey/rabbit.svg"
              className="preyImg"
              id="preyRabbit"
              alt="Rabbit"
            />
          </Link>
          <Link
            component="button"
            onClick={() => preyClick(4)}
            className="preyLink"
          >
            <img
              src="/prey/buffalo.svg"
              className="preyImg"
              id="preyBuffalo"
              alt="Buffalo"
            />
          </Link>
          <Link
            component="button"
            onClick={() => preyClick(5)}
            className="preyLink"
          >
            <img
              src="/prey/elephant.svg"
              className="preyImg"
              id="preyElephant"
              alt="Elephant"
            />
          </Link>
          <Link
            component="button"
            onClick={() => preyClick(3)}
            className="preyLink"
          >
            <img
              src="/prey/gazelle.svg"
              className="preyImg"
              id="preyGazelle"
              alt="Gazelle"
            />
          </Link>
        </>
      )}
      <Link
        component="button"
        onClick={() => preyClick(2)}
        className="preyLink"
      >
        <img
          src="/prey/zebra.svg"
          className="preyImg"
          id={preyIcon ? "preyZebraP" : "preyZebra"}
          alt="Zebra"
        />
      </Link>
      <img
        src="/images/tiger-face-svgrepo-com.svg"
        className="preyImg"
        id={preyIcon ? "preyUserP" : "preyUser"}
        alt="User"
      />
    </Box>
  );
};

export default PreyHome;
