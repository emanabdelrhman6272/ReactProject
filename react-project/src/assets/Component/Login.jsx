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
  FormControl,
} from "@mui/material";

// import IconButton from "@mui/material/IconButton";

// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";

// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

export default function Login() {
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
          //     boxShadow: ".5px .5px 2px gray",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "10px",
        }}
      >
        <Stack sx={{ margin: "5px", textAlign: "center" }}>
          <h2
            style={{ fontFamily: "Roboto", fontSize: "bold", color: "black" }}
          >
            Login
          </h2>
        </Stack>

        {/* Email */}
        <Stack>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{
              width: "90%",
              // bottom_border: "1px solid black ",
              // borderBlockColor: "black",
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
              // bottom_border: "1px solid black",
              Color: "black",
              margin: "auto",
            }}
          />
        </Stack>
        {/* <Item> */}
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
            Login
          </Button>
        </Stack>

        <Stack sx={{ textAlign: "center" }}>
          <Link href="#" underline="always">
            {'Forget Password?"'}
          </Link>
          {/* </Item> */}
        </Stack>

        {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}
      </Stack>
    </Box>
  );
}
