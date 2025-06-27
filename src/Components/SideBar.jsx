import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar p-3 bg-light min-vh-100">
      <ul className="nav flex-column">
        {/* All Products */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-item mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link to="/products" className="nav-link text-dark">
            <i className="fas fa-box-open me-2"></i>
            All Products
          </Link>
        </motion.li>

        {/* Add Product */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-item mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link to="/products/add" className="nav-link text-dark">
            <i className="fas fa-plus me-2"></i>
            Add Product
          </Link>
        </motion.li>

        {/* All Users */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-item mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link to="/all-users" className="nav-link text-dark">
            <i className="fas fa-users me-2"></i>
            All Users
          </Link>
        </motion.li>

        {/* Settings */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-item mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Link to="/settings" className="nav-link text-dark">
            <i className="fas fa-cog me-2"></i>
            Settings
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}

export default SideBar;
