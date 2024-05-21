/* eslint-disable react/prop-types */
import { Typography, Box } from "@mui/material";
const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const ProductDetail = ({ product }) => {
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 rating an 1 review
        <Box component="span">
          <img
            src={fassured}
            alt=""
            style={{ width: "77px", marginLeft: "20px" }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: "22px", marginLeft: "10px" }}>
          ₹{product.price.cost}
        </Box>
        <Box component="span" style={{ color: "#878787", marginLeft: "10px" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        <Box component="span" style={{ color: "#388E3C", marginLeft: "10px" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <Box>
        <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
          <LocalOfferIcon
            sx={{
              marginRight: "10px",
              color: "green",
              fontSize: "16px",
              verticalAlign: "baseline",
            }}
          />
          Bank OfferGet ₹25 instant discount on first Flipkart UPI txns on order
          of ₹250 and aboveT&C
        </Typography>
        <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
          <LocalOfferIcon
            sx={{
              marginRight: "10px",
              color: "green",
              fontSize: "16px",
              verticalAlign: "baseline",
            }}
          />
          Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
        <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
          <LocalOfferIcon
            sx={{
              marginRight: "10px",
              color: "green",
              fontSize: "16px",
              verticalAlign: "baseline",
            }}
          />
          Special PriceGet extra ₹7000 off (price inclusive of
          cashback/coupon)T&C
        </Typography>
        <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
          <LocalOfferIcon
            sx={{
              marginRight: "10px",
              color: "green",
              fontSize: "16px",
              verticalAlign: "baseline",
            }}
          />
          FreebieFlat ₹1000 off on Cleartrip hotels booking along with 300
          supercoins on bookingT&C
        </Typography>
      </Box>
    </>
  );
};

export default ProductDetail;
