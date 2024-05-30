import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../constants/data";

const Navbar = () => {
  const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    marginRight: "10px",
    marginLeft: "10px",
    borderRadius: 1,
    justifyContent: "space-between",
    bgcolor: "white",
    overflow: "overlay",
    background: "#fff",
    [theme.breakpoints.down("lg")]: {
      margin: 0,
    },
  }));
  return (
    <>
      <Wrapper>
        {navData.map((data, index) => (
          <Box item key={index} padding={"20px"} textAlign={"center"}>
            <div>
              <img src={data.url} style={{ width: "64px" }} />
              <Typography
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                }}
              >
                {data.text}
              </Typography>
            </div>
          </Box>
        ))}
      </Wrapper>
    </>
  );
};

export default Navbar;
