import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

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
      <Box display={"flex"} alignItems={"center"} gap={4}>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <Button
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
          </Button>
        )}

        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => handleSellerClick()}
        >
          Become a Seller
        </Typography>
        <Typography>More</Typography>
        <Box sx={{ display: "flex" }}>
          <ShoppingCartIcon />
          <Typography>Cart</Typography>
        </Box>
      </Box>
      <LoginDialog isOpen={open} setOpen={setOpen} />
    </>
  );
};

export default CustomButtons;
