"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material";

import { Formik } from "formik";

const Form = () => {
  const theme = useTheme();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {};

  return (
    <Formik>
      <Box>
        <form>
          <Typography
            align="center"
            variant="h5"
            color={"#667780"}
            fontWeight={"bold"}
            marginBottom={"1rem"}
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
              },
            }}
          >
            Add a new User
          </Typography>
          <Box
            display="grid"
            gap="1rem"
            width="500px"
            sx={{
              [theme.breakpoints.down("sm")]: {
                width: "300px",
              },
            }}
            margin={"auto"}
          >
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box>
              <Button
                fullWidth
                sx={{
                  backgroundColor: "#8500FA",
                  color: "#FFFFFF",
                  "&:hover": { color: "#8500FA" },
                }}
                onClick={onSubmit}
              >
                ADD USER
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Formik>
  );
};

export default Form;
