/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const ActionItem = ({ product }) => {
  return (
    <Box
      sx={{
        minWidth: "40%",
        padding: "40px 0 0 80px",
      }}
    >
      <Box sx={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
        <img
          src={product.detailUrl}
          alt="product"
          style={{
            padding: "10px",
            border: "1px solid #f0f0f0",
            width: "95%",
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "48%",
          height: "50px",
          borderRadius: "2px",
          marginLeft: "10px",
          background: "#ff9f00",
        }}
      >
        <ShoppingCartIcon />
        Add to cart
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "48%",
          height: "50px",
          borderRadius: "2px",
          background: "#fb541b",
        }}
      >
        <FlashOnIcon />
        Buy now
      </Button>
    </Box>
  );
};

export default ActionItem;
