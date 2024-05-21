import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Grid } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <>
      <Box sx={{ background: "#f2f2f2", marginTop: "55px" }}>
        {product && Object.keys(product).length && (
          <Grid container sx={{ background: "#ffffff", display: "flex" }}>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={product} />
            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              sm={8}
              xs={12}
              sx={{ marginTop: "50px", padding: "10px" }}
            >
              <ProductDetail product={product} />
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default DetailView;
