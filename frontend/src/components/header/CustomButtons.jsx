import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: 12,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 40px",
  height: 32,
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    background: "#2874f0",
    color: "#FFFFFF",
  },
}));

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    setOpen(true);
  };
  const { account, setAccount } = useContext(DataContext);

  const handleSellerClick = () => {
    let path =
      "https://seller.flipkart.com/sell-online?utm_source=fkwebsite&utm_medium=websitedirect";
    window.open(path, "_blank");
  };
  return (
    <>
      <Wrapper display={"flex"} alignItems={"center"} gap={4}>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <LoginButton
            sx={{
              color: "#2874f0",
              marginLeft: "10px",
              background: "white",
              height: "33px",
              alignSelf: "center",
            }}
            onClick={handleOnClick}
          >
            LOGIN
          </LoginButton>
        )}

        <Typography
          sx={{ cursor: "pointer", fontSize: "14px" }}
          onClick={() => handleSellerClick()}
        >
          Become a Seller
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>More</Typography>
        <Box sx={{ display: "flex" }}>
          <ShoppingCartIcon />
          <Typography>Cart</Typography>
        </Box>
      </Wrapper>
      <LoginDialog isOpen={open} setOpen={setOpen} />
    </>
  );
};

export default CustomButtons;
