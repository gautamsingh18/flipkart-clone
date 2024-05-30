import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slides from "./Slides";
import MidSlide from "./MidSlide";

import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import MidSection from "./MidSection";

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box sx={{ paddingTop: "10px", width: "100%" }}>
        <Banner />
        <MidSlide products={products} title={"Deals of the day"} timer={true} />
        <MidSection />
        <Slides products={products} title={"Discounts for you"} timer={false} />
        <Slides products={products} title={"Suggested for you"} timer={false} />
        <Slides products={products} title={"Trending offers"} timer={false} />
      </Box>
    </>
  );
};

export default Home;
