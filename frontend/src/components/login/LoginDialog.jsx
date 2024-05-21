import { Dialog, Box, TextField, Typography, Button } from "@mui/material";
import { useState, useContext } from "react";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const accountInitials = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations.",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    subHeading: "signup with your mobile to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValue = {
  username: "",
  password: "",
};
/* eslint-disable react/prop-types */
const LoginDialog = ({ isOpen, setOpen }) => {
  const [signUp, setSignup] = useState(signupInitialValues);
  const [account, toggleAccount] = useState(accountInitials.login);
  const { setAccount } = useContext(DataContext);
  const [loginDetails, setLoginDetails] = useState(loginInitialValue);
  const [alertStatus, toggleAlertStatus] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitials.login);
    toggleAlertStatus(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitials.signup);
  };
  const toggleLogin = () => {
    toggleAccount(accountInitials.login);
  };

  const onInputChange = (e) => {
    setSignup({ ...signUp, [e.target.name]: e.target.value });
  };

  const loginInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    let response = await authenticateSignup(signUp);
    if (!response) return;
    handleClose();
    setAccount(signUp.firstname);
  };

  const handleLogin = async () => {
    let response = await authenticateLogin(loginDetails);
    if (response.status != 200) {
      toggleAlertStatus(true);
    } else {
      toggleAlertStatus(false);
      handleClose();
      setAccount(loginDetails.username);
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Box sx={{ display: "flex", height: "70vh", width: "90vh" }}>
          {/* left side of login page */}
          <Box
            sx={{
              height: "100%",
              width: "40%",
              background:
                "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%",
            }}
          >
            <Box
              sx={{
                color: "white",
                textAlign: "left",
                marginTop: "10%",
                marginRight: "10%",
                marginLeft: "10%",
              }}
            >
              <Typography fontSize={20} fontWeight={"bold"} marginBottom={2}>
                {account.heading}
              </Typography>
              <Typography fontSize={12}>{account.subHeading}</Typography>
            </Box>
          </Box>
          {/* right side of login page */}
          {account.view == "login" ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "25px 35px",
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                sx={{ margin: "20px" }}
                onChange={(e) => loginInputChange(e)}
              />

              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                margin="normal"
                onChange={(e) => loginInputChange(e)}
              />
              {alertStatus && (
                <Typography sx={{ fontSize: "10px", color: "red" }}>
                  please enter correct credentials
                </Typography>
              )}
              <Typography fontSize={10} margin={"20px"}>
                By continuing, you agree to Flipkart&apos;s Terms of use and
                Privacy Policy
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleLogin()}
                sx={{
                  textTransform: "none",
                  background: "#FB641B",
                  color: "#FFF",
                  height: "40ox",
                  borderRadius: "2px",
                }}
              >
                Login
              </Button>
              <Typography>or</Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  background: "#FFF",
                  color: "#2874F0",
                  height: "40ox",
                  borderRadius: "2px",
                  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%",
                }}
              >
                Request otp
              </Button>

              <Typography
                sx={{
                  fontSize: "14px",
                  margin: "20px",
                  color: "#2874F0",
                  cursor: "pointer",
                }}
                onClick={toggleSignup}
              >
                New to Flipkart? Create an account.
              </Typography>
            </Box>
          ) : (
            //   signup
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "25px 35px",
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <TextField
                variant="standard"
                label="Enter First Name"
                margin="normal"
                onChange={(e) => onInputChange(e)}
                name="firstname"
              />

              <TextField
                variant="standard"
                label="Enter Last Name"
                margin="normal"
                onChange={(e) => onInputChange(e)}
                name="lastname"
              />
              <TextField
                variant="standard"
                label="Username"
                margin="normal"
                onChange={(e) => onInputChange(e)}
                name="username"
              />
              <TextField
                variant="standard"
                label="Email"
                margin="normal"
                onChange={(e) => onInputChange(e)}
                name="email"
              />
              <TextField
                variant="standard"
                label="Password"
                margin="normal"
                onChange={(e) => onInputChange(e)}
                name="password"
              />
              <TextField
                variant="standard"
                label="Phone"
                margin="normal"
                onChange={(e) => onInputChange(e)}
                name="phone"
              />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  background: "#FB641B",
                  color: "#FFF",
                  height: "40ox",
                  borderRadius: "2px",
                }}
                onClick={() => handleSignup()}
              >
                Continue
              </Button>
              <Typography
                sx={{
                  fontSize: "14px",
                  margin: "20px",
                  color: "#2874F0",
                  cursor: "pointer",
                }}
                onClick={toggleLogin}
              >
                Have an account? Login.
              </Typography>
            </Box>
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default LoginDialog;
