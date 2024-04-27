import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CustomButtons = () => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={4}>
        <Button
          sx={{
            color: "#2874f0",
            marginLeft: "10px",
            background: "white",
            height: "33px",
          }}
        >
          LOGIN
        </Button>
        <Typography>Become a Seller</Typography>
        <Typography>More</Typography>
        <Box display={"flex"}>
          <ShoppingCartIcon />
          <Typography>Cart</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CustomButtons;
