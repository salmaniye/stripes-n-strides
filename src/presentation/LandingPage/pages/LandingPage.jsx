import { Stack, Box, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

import { register, login } from "../../../utils/apiEndpoints";

import "./LandingPage.css";

const LandingPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState(null);
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (isRegistering) {
      const res = await register(email, firstName, lastName);
      setMessage(res.message);
      setIsRegistering(!isRegistering);
    } else {
      const res = await login(email);

      setUser({
        user_id: res.data.id,
        firstName: res.data.first_name,
        lastName: res.data.last_name,
        email: res.data.email,
        avatarUrl: res.data.avatarUrl,
        plan_id: res.data.plan_id,
        plan_name: res.data.plan_name,
      });
      setMessage(res.message);
      setIsRegistering(!isRegistering);
      navigate("/home");
    }
  };

  return (
    <Stack className="login-container" height="calc(100vh)">
      <img
        className="tiger-logo"
        src="/images/tiger-face-svgrepo-com.svg"
        alt="cute face of a tiger"
      />
      <Box className="button-container">
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "90%",
            alignSelf: "center",
            height: "60px",
          }}
        />

        {isRegistering && !message && (
          <TextField
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ width: "90%", marginBottom: 1 }}
          />
        )}
        {isRegistering && !message && (
          <TextField
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ width: "90%", marginBottom: 1 }}
          />
        )}

        <button
          className="button-login"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          {isRegistering ? "Register" : "Login"}
        </button>
        <Button
          variant="text"
          onClick={() => setIsRegistering(!isRegistering)}
          sx={{
            fontSize: "2rem",
            textTransform: "none",
            fontWeight: "600",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            {message ? (
              <>{message}</>
            ) : (
              <>
                {isRegistering ? (
                  <span style={{ color: "black" }}>or login&nbsp;</span>
                ) : (
                  <span style={{ color: "black" }}>or register&nbsp;</span>
                )}
                <span>here</span>
              </>
            )}
          </Box>
        </Button>
      </Box>
    </Stack>
  );
};

export default LandingPage;
