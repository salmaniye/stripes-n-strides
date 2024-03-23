import { Stack } from "@mui/material";
import React from "react";
import { FaHome, FaHistory } from "react-icons/fa";
import { FaStairs } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Stack
      id="footer"
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "")}
        to={"/home"}
      >
        <FaHome />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "")}
        to={"/plans"}
      >
        <FaStairs />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "")}
        to={"/history"}
      >
        <FaHistory />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "")}
        to={"/login"}
      >
        <BiLogOut />
      </NavLink>
    </Stack>
  );
};

export default Footer;
