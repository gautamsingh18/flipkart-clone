import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";
import { Box } from "@mui/material";

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
    >
      {bannerData.map((data, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            marginRight: "10px",
            marginLeft: "10px",
            marginTop: "10px",
            borderRadius: 1,
            justifyContent: "space-between",
            bgcolor: "white",
          }}
        >
          <img
            src={data.url}
            alt="banner"
            style={{ height: "200px", width: "100%" }}
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default Banner;
