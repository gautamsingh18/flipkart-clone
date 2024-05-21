import { Grid, styled } from "@mui/material";
import { imageURL } from "../../constants/data";

const MidSection = () => {
  const Image = styled("img")(({ theme }) => ({
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: "120px",
    },
  }));
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Grid
        container
        lg={12}
        sm={12}
        md={12}
        xs={12}
        sx={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        {imageURL.map((image, index) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
            <img src={image} alt="" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>

      <Image
        src={url}
        alt=""
        style={{
          marginTop: "10px",
          width: "100%",
          display: "Flex",
          justifyContent: "space-between",
        }}
      />
    </>
  );
};

export default MidSection;
