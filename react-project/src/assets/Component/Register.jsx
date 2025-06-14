import React from "react";
import {
  Box,
  Stack,
  Paper,
  TextField,
  Checkbox,
  Link,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Register() {
  return (
    <Box
      sx={{
        maxWidth: "sm",
        margin: "auto",
        padding: "20px",
        marginBlock: "50px",
        boxShadow: ".5px .5px 2px gray",
        fontFamily: "Roboto",
        textAlign: "center",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          padding: "20px",
          borderRadius: "15px",
          marginTop: "10px",
        }}
      >
        <Stack sx={{ margin: "5px", textAlign: "center" }}>
          <h2
            style={{ fontFamily: "Roboto", fontSize: "bold", color: "black" }}
          >
            Register
          </h2>
        </Stack>

        {/* FullName */}
        <Stack>
          <TextField
            id="text"
            label="Fullname"
            variant="outlined"
            sx={{
              width: "90%",
              //   bottom_border: "1px solid black ",
              //   borderBlockColor: "black",
              margin: "auto",
            }}
          />
        </Stack>

        {/* email */}
        <Stack>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{
              width: "90%",
              //   bottom_border: "1px solid black ",
              //   borderBlockColor: "black",
              margin: "auto",
            }}
          />
        </Stack>

        {/* Password */}
        <Stack>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{
              width: "90%",
              //   bottom_border: "1px solid black",
              Color: "black",
              margin: "auto",
            }}
          />
        </Stack>

        <Stack>
          <span
            sx={{
              fontFamily: "Roboto",
              fontSize: "900",
              fontWeight: "bolder",
              color: "black",
            }}
          >
            <Checkbox sx={{ color: "black" }} />
            Remember me
          </span>
        </Stack>
        <Stack>
          <Button
            variant="contained"
            style={{
              fontFamily: "Roboto",
              fontSize: "bold",
              width: "90%",
              margin: "auto",
            }}
          >
            Register
          </Button>
        </Stack>
        <Stack sx={{ textAlign: "center" }}>
          <Link href="#" underline="always">
            {'Forget Password?"'}
          </Link>
          {/* </Item> */}
        </Stack>
      </Stack>
    </Box>
  );
}
