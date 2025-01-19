import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // استيراد framer-motion

function Home() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب البيانات من API لحساب إجمالي المنتجات والفئات
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setTotalProducts(response.data.total);
      })
      .catch((error) => {
        console.log("Error fetching products", error);
      });

    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setTotalCategories(response.data.length); // تعديل حسب API الفئات
      })
      .catch((error) => {
        console.log("Error fetching categories", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="my-4">Admin Dashboard</h1>
      <div className="container mt-4 vh-100">
        <div className="row">
          {/* Total Products Card with Animation */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -100 }} // بداية الحركة
            animate={{ opacity: 1, x: 0 }} // حركة النهاية
            transition={{ duration: 0.5 }} // مدة الحركة
          >
            <div className="card text-white bg-info mb-4">
              <div className="card-body">
                <h5 className="card-title">Total Products</h5>
                <p className="card-text">{totalProducts} Products</p>
              </div>
            </div>
          </motion.div>

          {/* Total Categories Card with Animation */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 100 }} // بداية الحركة
            animate={{ opacity: 1, x: 0 }} // حركة النهاية
            transition={{ duration: 0.5 }} // مدة الحركة
          >
            <div className="card text-white bg-success mb-4">
              <div className="card-body">
                <h5 className="card-title">Total Categories</h5>
                <p className="card-text">{totalCategories} Categories</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Card with Animation */}
        <div className="row">
          <motion.div
            className="col-md-12"
            initial={{ opacity: 0, y: 100 }} // بداية الحركة
            animate={{ opacity: 1, y: 0 }} // حركة النهاية
            transition={{ duration: 0.5 }} // مدة الحركة
          >
            <div className="card text-white bg-dark">
              <div className="card-body">
                <h5 className="card-title">Additional Statistics</h5>
                <p className="card-text">
                  More detailed statistics can go here, such as product
                  categories, most popular products, etc.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
