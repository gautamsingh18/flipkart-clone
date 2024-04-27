import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <>
      <AppBar sx={{ background: "#2874f0", height: "54px" }}>
        <Toolbar
          sx={{
            background: "#2874f0",
            height: "54px",
          }}
        >
          <Box sx={{ marginLeft: "12%", lineHeight: "0" }}>
            <img src={logoURL} alt="" style={{ width: "75px" }} />
            <Box style={{ display: "flex" }}>
              <Typography sx={{ fontSize: "10px", fontStyle: "italic" }}>
                explore&nbsp;
                <Box component={"span"} sx={{ color: "yellow" }}>
                  Plus
                </Box>
              </Typography>
              <img
                src={subURL}
                style={{ width: "10px", height: "10px", marginLeft: "5%" }}
              />
            </Box>
          </Box>

          <Search />
          <CustomButtons />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
