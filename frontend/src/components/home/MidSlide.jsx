import { Box, styled } from "@mui/material";
import Slides from "./Slides";
/* eslint-disable react/prop-types */
const MidSlide = ({ products, title, timer }) => {
  const RightSide = styled(Box)(({ theme }) => ({
    padding: "10px",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "10px",
    width: "17%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const LeftSide = styled(Box)(({ theme }) => ({
    width: "83%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <LeftSide>
        <Slides products={products} title={title} timer={timer} />
      </LeftSide>
      <RightSide>
        <img
          src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
          alt="ad"
          style={{ width: "217px" }}
        />
      </RightSide>
    </Box>
  );
};

export default MidSlide;
