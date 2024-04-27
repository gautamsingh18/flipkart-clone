import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Box sx={{ paddingTop: "10px" }}>
        <Navbar />
        <Banner />
      </Box>
    </>
  );
};

export default Home;
