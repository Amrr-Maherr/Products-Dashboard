import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import ProductDetails from "./Pages/ProductDetails";
import EditProduct from "./Pages/EditProduct";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import "./App.css";

function App() {
  // Layout for authenticated pages (with NavBar and SideBar)
  const MainLayout = ({ children }) => (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10">{children}</div>
        </div>
      </div>
    </div>
  );

  // Layout for authentication pages (without NavBar and SideBar)
  const AuthLayout = ({ children }) => (
    <div className="App">
      <div className="container mt-5">{children}</div>
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Auth routes with AuthLayout */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        {/* Main routes with MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
        <Route
          path="/add-product"
          element={
            <MainLayout>
              <AddProduct />
            </MainLayout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          }
        />
        <Route
          path="/edit-product/:id"
          element={
            <MainLayout>
              <EditProduct />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
