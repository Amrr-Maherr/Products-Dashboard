import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
          console.log(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
          console.log(error);
          setLoading(true)
      });
  }, []);
  return (
    <>
      <h1 className="my-4">Products</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 my-4">
            <button
              className="btn btn-success"
              onClick={() => {
                Navigate("/add-product");
              }}
            >
              Add New Product
            </button>
          </div>
          <div className="col-12">
            {loading ? (
              <>
                <div className="d-flex justify-content-center vh-100">
                  <div className="loader"></div>
                </div>
              </>
            ) : (
              <>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <motion.tr
                        whileHover={{ scale: 1.02, backgroundColor: "#f8f9fa" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }} 
                        transition={{ duration: 0.5 }}
                      >
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                          <button className="btn btn-info mx-2">View</button>
                          <button className="btn btn-primary">Edit</button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Products