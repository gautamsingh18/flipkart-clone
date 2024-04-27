import { Box, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginRight: "10px",
          marginLeft: "10px",
          borderRadius: 1,
          justifyContent: "space-between",
          bgcolor: "white",
        }}
      >
        {navData.map((data, index) => (
          <Box key={index} padding={"20px"} textAlign={"center"}>
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
      </Box>
    </>
  );
};

export default Navbar;
