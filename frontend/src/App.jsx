import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";

// components

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Box
            sx={{
              marginTop: "65px",
              height: "100vh",
              padding: "10px",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<DetailView />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
