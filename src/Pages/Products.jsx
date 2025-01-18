import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5002/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, []);

  const handleDeleteProduct = (productId) => {
    Swal.fire({
      title: "Are you sure you want to delete this product?",
      text: "This action cannot be undone.",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      denyButtonText: `No, keep it`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5003/products/${productId}`)
          .then((response) => {
            console.log(response);
            Swal.fire("Deleted!", "The product has been deleted.", "success");
            const updatedProducts = products.filter(
              (product) => product.id !== productId
            );
            setProducts(updatedProducts);
          })
          .catch((error) => {
            console.log(error);
            Swal.fire(
              "Error",
              "There was an issue deleting the product.",
              "error"
            );
          });
      } else if (result.isDenied) {
        Swal.fire("Product not deleted", "The product is safe.", "info");
      }
    });
  };


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <motion.h1
        className="my-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Products
      </motion.h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <input
              type="search"
              className="form-control mb-3"
              placeholder="Search by title"
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
        </div>
      </div>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="row"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="col-12 my-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="btn btn-success"
              onClick={() => {
                Navigate("/add-product");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Add New Product
            </motion.button>
          </motion.div>
          <motion.div
            className="col-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {loading ? (
              <div className="d-flex justify-content-center vh-100">
                <motion.div
                  className="loader"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>
              </div>
            ) : (
              <motion.table
                className="table table-hover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <thead>
                  <motion.tr
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Operations</th>
                  </motion.tr>
                </thead>
                <tbody>
                  {filteredProducts.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No products available
                      </td>
                    </tr>
                  ) : (
                    filteredProducts.map((product) => (
                      <motion.tr
                        key={product.id}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "#f8f9fa",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description.slice(0, 20)}...</td>
                        <td>{product.price}</td>
                        <td>
                          <motion.button
                            onClick={() => {
                              handleDeleteProduct(product.id);
                            }}
                            className="btn btn-danger"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Delete
                          </motion.button>
                          <motion.button
                            onClick={() => {
                              Navigate(`/Product-Detail/${product.id}`);
                            }}
                            className="btn btn-info mx-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View
                          </motion.button>
                          <motion.button
                            className="btn btn-primary"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Edit
                          </motion.button>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </motion.table>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Products;
