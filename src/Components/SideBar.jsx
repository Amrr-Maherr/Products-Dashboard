import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <ul className="nav">
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link to="/products" className="nav-link">
            <i className="fas fa-boxes"></i> All products
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link to="/products/add" className="nav-link">
            <i className="fas fa-plus-circle"></i> Add product
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nav-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link to="/settings" className="nav-link">
            <i className="fas fa-cog"></i> Settings
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}

export default SideBar;