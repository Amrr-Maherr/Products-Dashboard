import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar p-2 bg-body-tertiary h-100">
      <ul className="nav flex-column">
        {/* تأثير hover وتنسيق الحركة */}
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="nav-item"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/products" className="nav-link text-dark">
            <i className="fas fa-box-open"></i> all products
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}

export default SideBar;
