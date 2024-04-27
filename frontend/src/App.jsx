import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

// components

function App() {
  return (
    <>
      <div>
        <Header />
        <Box
          sx={{
            marginTop: "65px",
            background: "#e4e8e3",
            height: "100dvh",
          }}
        >
          <Home />
        </Box>
      </div>
    </>
  );
}

export default App;
