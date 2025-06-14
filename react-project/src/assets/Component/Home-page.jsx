// import * as React from "react";
// import {
//   Box,
//   Stack,
//   styled,
//   CardMedia,
//   Card,
//   CardHeader,
//   CardContent,
//   CardActions,
//   Collapse,
//   Avatar,
//   IconButton,
//   Typography,
//   Container,
//   Link,
//   Fab,
// } from "@mui/material";

// // import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// // import FavoriteIcon from "@mui/icons-material/Favorite";

// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import postImage from "./images/postImage1.jpg";
// import { Navigate } from "react-router-dom";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: "rotate(0deg)",
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: "rotate(180deg)",
//       },
//     },
//   ],
// }));

// export default function HomePage() {
//   const navigate = useNavigate();
//   // export default function RecipeReviewCard() {
//   //   const [expanded, setExpanded] = React.useState(false);

//   //   const handleExpandClick = () => {
//   //     setExpanded(!expanded);
//   //   };

//   return (
//     <Box
//       sx={{
//         maxWidth: "sm",
//         margin: "auto",
//         padding: "20px",
//         marginBlock: "50px",
//         boxShadow: ".5px .5px 2px gray",
//         fontFamily: "Roboto",
//         textAlign: "center",
//       }}
//     >
//       <Stack sx={{ padding: 5 }}>
//         <stack style={{ marginBottom: 3, padding: 10 }}>
//           <span
//             style={{
//               padding: 10,
//               borderRadius: 30,
//               backgroundColor: "rgb(17, 119, 179)",
//               boxShadow: ".5px .5px 2px rgb(17, 119, 179)",
//               marginRight: "100px",
//               fontFamily: "cursive",
//               color: "white",
//               // border: "2px solid orange",
//             }}
//           >
//             E.S
//           </span>
//           {/* <span style={{ color: "blueviolet" }}> Login / Register </span> */}
//           <span style={{ marginLeft: "18%" }}>
//             <Link
//               sx={{ paddingRight: 2 }}
//               component="button"
//               variant="body2"
//               onClick={() => {
//                 navigate("/login");
//               }}
//             >
//               Login
//             </Link>
//           </span>
//           <span>
//             <Link
//               component="button"
//               variant="body2"
//               onClick={() => {
//                 navigate("/register");
//               }}
//             >
//               Register
//             </Link>
//           </span>
//         </stack>

//         <Card sx={{ maxWidth: 360, margin: "auto", marginBottom: 3 }}>
//           <CardHeader
//             title="Shrimp and Chorizo Paella"
//             subheader="September 14, 2016"
//           />
//           <CardMedia
//             component="img"
//             height="194"
//             image={postImage}
//             alt="Post Image"
//           />
//           <CardContent>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               This impressive paella is a perfect party dish and a fun meal to
//               cook together with your guests. Add 1 cup of frozen peas along
//               with the mussels, if you like.
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites" style={{ color: "red" }}>
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//               <ShareIcon />
//             </IconButton>
//           </CardActions>
//         </Card>

//         <Box sx={{ "& > :not(style)": { m: 1 } }}>
//           <Fab
//             color="primary"
//             aria-label="add"
//             onClick={() => navigate("/add")}
//           >
//             <AddIcon />
//           </Fab>
//           <Fab color="secondary" aria-label="edit">
//             <EditIcon />
//           </Fab>
//           <Fab color="error" aria-label="edit">
//             <DeleteIcon />
//           </Fab>
//         </Box>
//       </Stack>
//     </Box>
//   );
// }
// // }

import * as React from "react";
import {
  Box,
  Stack,
  styled,
  CardMedia,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Link,
  Fab,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { red } from "@mui/material/colors";
import postImage from "./images/postImage1.jpg";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate(); //to navigate pages

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
      <Stack sx={{ padding: 5 }}>
        <Box sx={{ marginBottom: 3, padding: 2 }}>
          <span
            style={{
              padding: 10,
              borderRadius: 30,
              backgroundColor: "rgb(17, 119, 179)",
              boxShadow: ".5px .5px 2px rgb(17, 119, 179)",
              marginRight: "100px",
              fontFamily: "cursive",
              color: "white",
            }}
          >
            E.S
          </span>

          <span style={{ marginLeft: "18%" }}>
            <Link
              sx={{ paddingRight: 2 }}
              component="button"
              variant="body2"
              onClick={() => navigate("/login")}
            >
              Login
            </Link>
          </span>
          <span>
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/register")}
            >
              Register
            </Link>
          </span>
        </Box>

        <Card sx={{ maxWidth: 360, margin: "auto", marginBottom: 3 }}>
          <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={postImage}
            alt="Post Image"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" style={{ color: "red" }}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => navigate("/add")}
          >
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab color="error" aria-label="delete">
            <DeleteIcon />
          </Fab>
        </Box>
      </Stack>
    </Box>
  );
}
