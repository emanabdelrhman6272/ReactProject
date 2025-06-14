import React from "react";
import {
  Box,
  Container,
  Stack,
  Paper,
  TextField,
  CardMedia,
  Card,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import postImage from "./images/postImage1.jpg";

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

export default function Addpost() {
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
      <Stack sx={{ margin: "5px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Roboto", fontSize: "bold", color: "black" }}>
          New Post
        </h2>
      </Stack>
      <Card sx={{ maxWidth: 360, margin: "auto", marginBottom: 3 }}>
        {/* Title */}
        <Stack>
          <TextField
            id="text"
            label="Title"
            variant="outlined"
            //   sx={{
            //     width: "90%",
            //     margin: "auto",
            //   }}
          />
        </Stack>

        {/* post Image */}
        <Stack
          // sx={{
          //   width: "80%",
          //   margin: "auto",
          // }}
          sx={{ marginTop: 3, marginBottom: 3 }}
        >
          <CardMedia
            component="img"
            height="194"
            image={postImage}
            alt="Post Image"
          />
        </Stack>

        {/* Description */}
        <Stack>
          <TextField
            id="text"
            label="Description"
            variant="outlined"
            style={{
              width: "sm",
              height: "100px",
              marginTop: 4,
            }}
            //   sx={{
            //     width: "90%",
            //     margin: "auto",
            //   }}
          />
          {/* <div
            style={{
              width: "sm",
              height: "150px",
              boxShadow: ".5px .5px 2px gray",
              marginTop: 4,
            }}
          >
            hello...
          </div> */}
        </Stack>

        {/* Submit  Button*/}
        <Stack>
          <Button
            variant="contained"
            style={{
              fontFamily: "Roboto",
              fontSize: "bold",
              width: "100%",
              margin: "auto",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
