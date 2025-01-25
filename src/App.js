// Importing React library for building UI components
import React from "react";

// Importing necessary components from react-router-dom for routing functionality
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing custom components
import NavBar from "./Components/NavBar"; // Navigation bar component
import SideBar from "./Components/SideBar"; // Sidebar navigation component
import Content from "./Components/Content"; // (Optional) Main content component (not used here)

// Importing Bootstrap CSS and JavaScript for styling and interactivity
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Importing page components
import Home from "./Pages/Home"; // Home page component
import Products from "./Pages/Products"; // Products listing page component
import Categories from "./Pages/Categories"; // Categories page component
import AddProduct from "./Pages/AddProduct"; // Page to add a new product
import "../src/App.css"; // Custom CSS for additional styling
import ProductDetails from "./Pages/ProductDetails"; // Page to display product details
import EditProduct from "./Pages/EditProduct"; // Page to edit product details

// Main application component
function App() {
  return (
    // Wrapping the entire application inside the Router to enable routing
    <Router>
      <div className="App">
        {/* Displaying the navigation bar */}
        <NavBar />
        
        {/* Creating a responsive container for layout */}
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar occupies 2 columns */}
            <div className="col-2">
              <SideBar />
            </div>
            
            {/* Main content area occupies 10 columns */}
            <div className="col-10">
              {/* Defining application routes */}
              <Routes>
                {/* Route for the home page */}
                <Route path="/" element={<Home />} />
                
                {/* Route for the products page */}
                <Route path="/products" element={<Products />} />
                
                {/* Route for adding a new product */}
                <Route path="/add-product" element={<AddProduct />} />
                
                {/* Route for product details with a dynamic parameter (:id) */}
                <Route path="/Product-Detail/:id" element={<ProductDetails />} />
                
                {/* Route for the categories page */}
                <Route path="/categories" element={<Categories />} />
                
                {/* Route for editing a product with a dynamic parameter (:id) */}
                <Route path="/edit-product/:id" element={<EditProduct />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;
