import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import ProductLists from "./component/ProductsList";
import Slider from "./component/Slider";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductLists />
            </>
          }
        />
        <Route path="About" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
