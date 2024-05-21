import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/* eslint-disable react/prop-types */

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const Logout = () => {
    setAccount("");
  };
  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          marginTop: "3px",
          color: "white",
          marginLeft: "15px",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
        }}
      >
        <AccountCircleIcon />
        <Typography sx={{ marginTop: "3px" }}>{account}</Typography>

        <Menu
          id="basic-menu"
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              Logout();
            }}
          >
            <Typography>Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default Profile;
