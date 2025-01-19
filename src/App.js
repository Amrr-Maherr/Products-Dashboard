import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import AddProduct from "./Pages/AddProduct";
import "../src/App.css"
import ProductDetails from "./Pages/ProductDetails";
import EditProduct from "./Pages/EditProduct";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <SideBar />
            </div>
            <div className="col-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route
                  path="/Product-Detail/:id"
                  element={<ProductDetails />}
                />
                <Route path="/categories" element={<Categories />} />
                <Route path="/edit-product/:id" element={<EditProduct />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
