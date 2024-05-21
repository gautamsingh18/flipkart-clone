import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Button, Divider, Link } from "@mui/material";
import Countdown from "react-countdown";

const timerURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
/* eslint-disable react/prop-types */

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const viewAllProducts = async () => {};

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <Box variant="span">
      {hours} : {minutes} : {seconds} Left
    </Box>
  );
};

const Slides = ({ products, title, timer }) => {
  return (
    <Box
      sx={{
        marginRight: "10px",
        marginLeft: "10px",
        marginTop: "20px",
        borderRadius: 2,
        justifyContent: "space-between",
        background: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "15px 20px",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "20px", alignContent: "center" }}
        >
          {title}
        </Typography>
        {timer && (
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginLeft: "20px",
              alignItems: "center",
            }}
          >
            <img src={timerURL} style={{ width: "24px" }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Box>
        )}
        <Button
          variant="contained"
          sx={{
            marginLeft: "auto",
            background: "#2874f0",
            borderRadius: "2px",
          }}
          onClick={() => viewAllProducts()}
        >
          View All
        </Button>
      </Box>
      <Divider />
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((data, index) => (
          <Link
            href={`products/${data.id}`}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                padding: "25px 15px",
                textAlign: "center",
              }}
            >
              <img src={data.url} alt="product" style={{ height: "150px" }} />
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                {data.title.shortTitle}
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "green" }}>
                {data.discount}
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "#212121", opacity: "0.6" }}
              >
                {data.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slides;
