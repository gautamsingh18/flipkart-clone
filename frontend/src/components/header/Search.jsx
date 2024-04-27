import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          background: "#fff",
          width: "40%",
          marginLeft: "10px",
          borderRadius: "5px",
        }}
      >
        <InputBase
          sx={{
            width: "100%",
            paddingLeft: "20px",
            fontSize: "unset    ",
          }}
          placeholder="Search for products,brands and more"
        />
        <Box sx={{ color: "#2874f0", padding: "5px", display: "flex" }}>
          <SearchIcon />
        </Box>
      </Box>
    </>
  );
};

export default Search;
