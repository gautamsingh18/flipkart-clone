/* eslint-disable react/prop-types */
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",

  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  width: "40%",
  height: "50px",
  borderRadius: "2px",
  marginLeft: "5px",

  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;
  const [quantity, setQuantity] = useState(1);
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
    const res = await payUsingPaytm({
      amount: 500,
      email: "gasingh@gmail.com",
    });
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: res,
    };
    post(information);
  };

  return (
    <LeftContainer>
      <Box sx={{ padding: "15px 20px" }}>
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
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <StyledButton
          variant="contained"
          sx={{ background: "#2874f0" }}
          onClick={() => addItemToCart()}
        >
          <ShoppingCartIcon />
          Add to cart
        </StyledButton>
        <StyledButton
          variant="contained"
          sx={{ background: "#fb541b" }}
          onClick={() => buyNow()}
        >
          <FlashOnIcon />
          Buy now
        </StyledButton>
      </Box>
    </LeftContainer>
  );
};

export default ActionItem;
